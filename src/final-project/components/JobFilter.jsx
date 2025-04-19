import React, { useState, useEffect } from "react";
import Heading from "./Heading";
import SelectInputFilter from "./SelectInputFilter";
import { useGlobal } from "../context/GlobalContext";

const JobFilter = ({ onFilter }) => {
  const [city, setCity] = useState("");
  const [company, setCompany] = useState("");
  const [salary, setSalary] = useState("");
  const [cities, setCities] = useState([]);
  const [companies, setCompanies] = useState([]);

  const { jobs} = useGlobal();
  // console.log(jobs);
  useEffect(() => {
    if (jobs.length > 0) {
      const getCities = [...new Set(jobs.map((item) => item.company_city))];
      setCities(getCities);
      const getCompanies = [...new Set(jobs.map((item) => item.company_name))];
      setCompanies(getCompanies);
    }
  }, [jobs]);

  // console.log(companies);

  useEffect(() => {
    onFilter({ city, company, salary });
  }, [city, company, salary]);

  return (
    <>
      <SelectInputFilter
        label="City"
        value={city}
        options={cities}
        onChange={setCity}
      />
      <SelectInputFilter
        label="Company"
        value={company}
        options={companies}
        onChange={setCompany}
      />
      <SelectInputFilter
        label="Minimum Salary"
        value={salary}
        options={["3000000", "5000000", "10000000"]}
        onChange={setSalary}
      />
    </>
  );
};

export default JobFilter;
