import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import InputField from "../components/InputField";
import TextareaField from "../components/TextArea";
import TableItem from "../components/TableItem";
import TableItemSkeleton from "../components/TableItemSkeleton";
import TableHeader from "../components/TableHeader";

const ManageData = () => {
  const dataAPI = "https://quiz-react-sanber.vercel.app/api/mobile-apps";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    rating: "",
    release_year: 2010,
    image_url: "",
    size: "",
    description: "",
    is_android_app: 0,
    is_ios_app: 0,
  });
  useEffect(() => {
    axios
      .get(dataAPI)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`${dataAPI}/${id}`).then(() => {
      setData((prev) => prev.filter((item) => item._id !== id));
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "is_android_app" || name === "is_ios_app") {
      setFormData({
        ...formData,
        [name]: value === "true" ? 1 : 0,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData._id) {
      axios
        .put(`${dataAPI}/${formData._id}`, formData)
        .then((res) => {
          setData((prev) =>
            prev.map((item) => (item._id == formData._id ? res.data : item))
          );
          setFormData({
            name: "",
            category: "",
            price: "",
            rating: "",
            release_year: "",
            image_url: "",
            size: "",
            description: "",
            is_android_app: 0,
            is_ios_app: 0,
          });
        })
        .catch((err) => {
          console.log(err);
        });
      console.log("Edit Submit");
    } else {
      axios
        .post(dataAPI, formData)
        .then((res) => {
          setData([...data, res.data]);
          setFormData({
            name: "",
            category: "",
            price: "",
            rating: "",
            release_year: "",
            image_url: "",
            size: "",
            description: "",
            is_android_app: 0,
            is_ios_app: 0,
          });
        })
        .catch((err) => {
          console.log(err);
        });
      console.log("Submit Form");
    }
  };

  const handleEdit = (id) => {
    axios.get(`${dataAPI}/${id}`).then((res) => {
      setFormData({
        name: res.data.name,
        category: res.data.category,
        price: res.data.price,
        rating: res.data.rating,
        release_year: res.data.release_year,
        size: res.data.size,
        image_url: res.data.image_url,
        description: res.data.description,
        is_android_app: res.data.is_android_app,
        is_ios_app: res.data.is_ios_app,
        _id: res.data._id,
      });
    });
  };

  console.log(formData);

  return (
    <div className="pb-10">
      <div className="relative overflow-x-auto">
        <table className="w-full text-xs text-left text-gray-500">
          <TableHeader />
          <tbody>
            {loading
              ? [...Array(10)].map((_, idx) => <TableItemSkeleton key={idx} />)
              : data.map((item, index) => (
                  <TableItem
                    key={item._id}
                    item={item}
                    index={index}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                  />
                ))}
          </tbody>
        </table>
      </div>
      <form
        className="mt-8 border border-neutral-100 p-6 bg-white rounded-lg shadow-md space-y-6"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InputField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <InputField
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
          <InputField
            label="Price"
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InputField
            label="Rating"
            name="rating"
            type="number"
            min={0}
            max={5}
            step="1"
            value={formData.rating}
            onChange={handleChange}
          />
          <InputField
            label="Release Year"
            name="release_year"
            type="number"
            min={2010}
            max={2025}
            value={formData.release_year}
            onChange={handleChange}
          />
          <InputField
            label="Size (MB)"
            name="size"
            type="number"
            value={formData.size}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InputField
            label="Image URL"
            name="image_url"
            value={formData.image_url}
            onChange={handleChange}
          />
          <div>
            <label
              htmlFor="is_android_app"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Is Android App
            </label>
            <select
              id="is_android_app"
              name="is_android_app"
              value={formData.is_android_app === 1 ? "true" : "false"}
              onChange={handleChange}
              className="w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="is_ios_app"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Is iOS App
            </label>
            <select
              id="is_ios_app"
              name="is_ios_app"
              value={formData.is_ios_app === 1 ? "true" : "false"}
              onChange={handleChange}
              className="w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
        </div>

        <TextareaField
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />

        <div>
          <button
            type="submit"
            className="w-full cursor-pointer md:w-auto px-6 py-2.5 bg-blue-600 text-white font-medium text-sm rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ManageData;
