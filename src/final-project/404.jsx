import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-base-200 text-center p-4">
      <h1 className="text-9xl font-bold text-error">404</h1>
      <h2 className="text-2xl md:text-4xl font-semibold mt-4">
        Oops! Page Not Found
      </h2>
      <p className="text-base-content mt-2 max-w-md">
        The page you are looking for is not available or may have moved.
      </p>
      <Link to="/" className="btn bg-blue-600 text-white hover:bg-blue-800 mt-6">
        Return to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
