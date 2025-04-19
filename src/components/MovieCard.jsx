import React from "react";

const MovieCard = ({
  name,
  year,
  price,
  category,
  rating,
  size,
  description,
  image_url,
  is_android,
  is_ios,
}) => {
  let platform = "";
  if (is_android && is_ios) {
    platform = "Android & IOS";
  } else if (is_android) {
    platform = "Android";
  } else if (is_ios) {
    platform = "IOS";
  } else {
    platform = "";
  }

  return (
    <a
      href="#"
      className=" flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-full hover:bg-gray-100"
    >
      <img
        className="object-cover max-w-44 rounded-t-lg h-80   md:rounded-none md:rounded-s-lg"
        src={image_url}
        alt=""
      />
      <div className="flex items-start flex-col justify-between p-4 leading-normal">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {name}
        </h2>
        <div className="flex gap-2 font-bold">
          <p className="mb-3  text-gray-700 line-clamp-2">Release : {year}</p>

          <p className="mb-3  text-gray-700 line-clamp-2">Rating : {rating}</p>
          <p className="mb-3 text-gray-700 line-clamp-2">
            Size: {(size / 1024).toFixed(2)} GB
          </p>
        </div>

        <p className="mb-3 font-normal text-gray-700 line-clamp-2">
          {description}
        </p>
        <div className="flex">
          <p className="mb-3 font-normal text-gray-700 line-clamp-2">
            Category : {""}
            <span className="font-bold">
              {platform !== "" ? `${category}, ${platform}` : category}
            </span>
          </p>
        </div>
        <button className="btn text-white bg-blue-500">
          {price === 0
            ? "Free"
            : new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
              }).format(price)}
        </button>
      </div>
    </a>
  );
};

export default MovieCard;
