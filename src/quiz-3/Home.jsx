import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import MovieCardSkeleton from "../components/MovieCardSkeleton";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://quiz-react-sanber.vercel.app/api/mobile-apps")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  console.log(data);
  return (
    <div className="pb-10">
      <h1 className="text-2xl">Find your data that you need!</h1>
      <div className="grid grid-cols-2 gap-4 mt-5">
        {loading
          ? [...Array(4)].map((_, index) => <MovieCardSkeleton key={index} />)
          : data.map((item) => (
              <MovieCard
                key={item._id}
                name={item.name}
                year={item.release_year}
                price={item.price}
                category={item.category}
                rating={item.rating}
                size={item.size}
                description={item.description}
                image_url={item.image_url}
                is_android={item.is_android_app}
                is_ios={item.is_ios_app}
              />
            ))}
      </div>
    </div>
  );
};

export default Home;
