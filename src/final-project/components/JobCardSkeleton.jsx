const JobCardSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="p-5 bg-white border border-gray-100 rounded-lg shadow-xs">
        <div className="h-6 bg-gray-200 rounded w-2/3 mb-2"></div>

        <div className="flex items-center gap-2 mb-3 mt-2">
          <div className="h-4 w-16 bg-gray-200 rounded"></div>
          <div className="h-4 w-32 bg-gray-100 rounded"></div>
        </div>

        <div className="flex justify-between items-center">
          <ul className="list p-0 bg-base-100 rounded-box">
            <li className="list-row p-0 gap-2 items-center flex">
              <div>
                <div className="size-10 rounded-box bg-gray-200 border border-neutral-100"></div>
              </div>
              <div className="ml-2">
                <div className="h-3 w-24 bg-gray-200 rounded mb-1"></div>
                <div className="h-3 w-16 bg-gray-100 rounded"></div>
              </div>
            </li>
          </ul>

          <div className="h-8 w-8 rounded-full bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};

export default JobCardSkeleton;
