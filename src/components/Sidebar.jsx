import {
  FaEgg,
  FaHouseChimney,
  FaKitchenSet,
  FaRightToBracket,
  FaScrewdriverWrench,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="hidden sm:flex">
        <div className="mb-4 ml-2 flex w-72 flex-col overflow-y-auto rounded-xl p-4">
          <h1 className="mb-10 rounded-xl border-4 border-zinc-200 bg-white p-4 text-center text-xl font-extrabold text-sky-500 shadow-md">
            Inven Lilio
          </h1>
          <Link
            to="/"
            className="my-2 flex items-center rounded-md  bg-sky-500 px-2 py-3 transition-transform duration-300 ease-in-out hover:scale-105 hover:transform hover:bg-sky-500"
          >
            <FaHouseChimney className="mr-2 fill-white" />
            <p className=" text-sm font-medium  text-white hover:text-white">
              Dashboard
            </p>
          </Link>
          <Link className="my-2 flex  items-center rounded-md px-2 py-3 transition-transform duration-300 ease-in-out hover:scale-105 hover:transform hover:bg-white">
            <FaKitchenSet className=" mr-2 fill-slate-500" />
            <p className="text-sm font-medium text-slate-500">Master Barang</p>
          </Link>
          <Link className="my-2 flex  items-center rounded-md px-2 py-3  transition-transform duration-300 ease-in-out hover:scale-105 hover:transform hover:bg-white">
            <FaEgg className=" mr-2 fill-slate-500" />
            <p className="text-sm font-medium text-slate-500">Master Bahan</p>
          </Link>
          <Link className="my-2 flex  items-center rounded-md px-2 py-3  transition-transform duration-300 ease-in-out hover:scale-105 hover:transform hover:bg-white">
            <FaScrewdriverWrench className=" mr-2 fill-slate-500" />
            <p className="text-sm font-medium text-slate-500">Satuan</p>
          </Link>
          <Link className="my-2 flex  items-center rounded-md px-2 py-3  transition-transform duration-300 ease-in-out hover:scale-105 hover:transform hover:bg-white">
            <FaRightToBracket className=" mr-2 fill-slate-500" />
            <p className="text-sm font-medium text-slate-500">Logout</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
