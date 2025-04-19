import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../../components/SideBar";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <div className="flex-1">
        <main className="">
          <Sidebar>
            <Outlet />
          </Sidebar>
         
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
