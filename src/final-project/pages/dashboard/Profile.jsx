import React from "react";
import { useGlobal } from "../../context/GlobalContext";
import { FaStar, FaToggleOn, FaToggleOff } from "react-icons/fa";

const Profile = () => {
  const { user } = useGlobal();

  // Data tambahan (nanti bisa diganti dari backend)
  const extraData = {
    gender: "Laki-laki",
    birthDate: "23/02/1987",
    phone: "0812 3456 7890",
    language: "Bahasa Indonesia",
  };

  return (
    <div className="">
      <div className="bg-white rounded-md shadow p-8 grid grid-cols-1 md:grid-cols-3">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src={user.image_url}
            alt="User"
            className="w-28 h-28 rounded-full object-cover mb-4 border border-neutral-400"
          />
          <h2 className="text-lg font-bold text-gray-800 capitalize">
            {user.name}
          </h2>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>

        <div className="md:col-span-2 md:mt-0 mt-5 space-y-6 text-sm text-gray-700">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <strong>User ID:</strong> {user.id}
            </div>
            <div>
              <strong>Gender:</strong> {extraData.gender}
            </div>
            <div>
              <strong>Date of Birth:</strong> {extraData.birthDate}
            </div>
            <div>
              <strong>Phone Number:</strong>{" "}
              <span className="text-blue-600">{extraData.phone}</span>
            </div>
            <div>
              <strong>Language:</strong> {extraData.language}
            </div>
          </div>

          {/* Tombol Aksi */}
          <div className="pt-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
