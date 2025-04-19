import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUser] = useState({});
  const [filters, setFilters] = useState({
    city: "",
    company: "",
    salary: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://final-project-api-alpha.vercel.app/api/jobs")
      .then((res) => setJobs(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const login = (token, userData) => {
    setToken(token);
    setIsLoggedIn(true);
    Cookies.set("token", token);
    Cookies.set("user", JSON.stringify(userData));
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    setIsLoggedIn(false);
    Cookies.remove("token");
    Cookies.remove("user");
    navigate("/login");
  };

  useEffect(() => {
    const savedToken = Cookies.get("token");
    const savedUser = Cookies.get("user");
    if (savedToken) {
      setToken(savedToken);
      setIsLoggedIn(true);
    }
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, [token]);

  const filteredJobs = jobs
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .filter((job) => {
      const matchTitle = job.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchCity =
        filters.city === "" || job.company_city === filters.city;
      const matchCompany =
        filters.company === "" || job.company_name === filters.company;
      const matchSalary =
        filters.salary === "" || job.salary_min >= parseInt(filters.salary);
      return matchTitle && matchCity && matchCompany && matchSalary;
    });

  return (
    <GlobalContext.Provider
      value={{
        jobs,
        setJobs,
        loading,
        token,
        isLoggedIn,
        login,
        logout,
        searchQuery,
        setSearchQuery,
        user,
        setUser,
        setFilters,
        filters,
        filteredJobs,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => useContext(GlobalContext);
