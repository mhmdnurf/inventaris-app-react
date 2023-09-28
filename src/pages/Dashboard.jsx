import React, { useEffect, useState } from "react";
import {
  FaArrowTrendDown,
  FaArrowTrendUp,
  FaBurger,
  FaCubes,
  FaEgg,
  FaHouseChimney,
  FaKitchenSet,
  FaRightToBracket,
  FaScrewdriverWrench,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="flex min-h-screen min-w-screen bg-slate-100">
        {children}
      </div>
    </>
  );
};

const ContentLayout = ({ children }) => {
  return (
    <>
      <div className="sm:m-3 bg-white w-full rounded-3xl overflow-y-auto scrollbar-hide h-screen">
        {children}
      </div>
    </>
  );
};

const Sidebar = () => {
  return (
    <>
      <div className="w-72 p-4 mb-4 ml-2 rounded-xl flex flex-col overflow-y-auto">
        <h1 className="text-center mb-10 font-extrabold text-xl text-sky-500 border-4 p-4 rounded-xl border-zinc-200 bg-white shadow-md">
          Inven Lilio
        </h1>
        <Link
          to="/"
          className="flex items-center hover:bg-sky-500 bg-sky-500  my-2 py-3 px-2 rounded-md hover:transform hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          <FaHouseChimney className="fill-white mr-2" />
          <p className=" text-white font-medium  hover:text-white text-sm">
            Dashboard
          </p>
        </Link>
        <Link className="flex items-center  my-2 py-3 px-2 rounded-md hover:bg-white hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <FaKitchenSet className=" fill-slate-500 mr-2" />
          <p className="font-medium text-slate-500 text-sm">Master Barang</p>
        </Link>
        <Link className="flex items-center  my-2 py-3 px-2 rounded-md  hover:bg-white hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <FaEgg className=" fill-slate-500 mr-2" />
          <p className="font-medium text-slate-500 text-sm">Master Bahan</p>
        </Link>
        <Link className="flex items-center  my-2 py-3 px-2 rounded-md  hover:bg-white hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <FaScrewdriverWrench className=" fill-slate-500 mr-2" />
          <p className="font-medium text-slate-500 text-sm">Satuan</p>
        </Link>
        <Link className="flex items-center  my-2 py-3 px-2 rounded-md  hover:bg-white hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <FaRightToBracket className=" fill-slate-500 mr-2" />
          <p className="font-medium text-slate-500 text-sm">Logout</p>
        </Link>
      </div>
    </>
  );
};

const DashboardCard = () => {
  return (
    <>
      <div className="flex flex-wrap max-w-screen">
        <div className="mx-2 mt-8 p-4 border-2 rounded-lg grow hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <FaCubes
            size={40}
            className="fill-teal-500 border-2 p-2 rounded-lg"
          />
          <h1 className="uppercase mt-2 font-bold text-zinc-400 text-sm">
            Total Barang
          </h1>
          <p className="text-3xl font-extrabold text-zinc-600">36</p>
        </div>
        <div className="mx-2 mt-8 p-4 border-2 rounded-lg grow hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <FaBurger
            size={40}
            className="fill-sky-500 border-2 p-2 rounded-lg"
          />
          <h1 className="uppercase mt-2 font-bold text-zinc-400 text-sm">
            Total Bahan
          </h1>
          <p className="text-3xl font-extrabold text-zinc-600">10</p>
        </div>
        <div className="mx-2 mt-8 p-4 border-2 rounded-lg grow hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <FaArrowTrendUp
            size={40}
            className="fill-green-500 border-2 p-2 rounded-lg"
          />
          <h1 className="uppercase mt-2 font-bold text-zinc-400 text-sm">
            Stok Masuk
          </h1>
          <p className="text-3xl font-extrabold text-zinc-600">5</p>
        </div>
        <div className="mx-2 mt-8 p-4 border-2 rounded-lg grow hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <FaArrowTrendDown
            size={40}
            className="fill-red-500 border-2 p-2 rounded-lg"
          />
          <h1 className="uppercase mt-2 font-bold text-zinc-400 text-sm">
            Stok Habis
          </h1>
          <p className="text-3xl font-extrabold text-zinc-600">-</p>
        </div>
      </div>
    </>
  );
};

const DashboardExtend = () => {
  return (
    <>
      <div className="flex flex-wrap min-w-screen">
        <div className="border-2 flex flex-wrap my-4 mx-2 rounded-xl hover:transform hover:scale-105 transition-transform duration-300 ease-in-out flex-1">
          <img
            src="/coffee.svg"
            alt=""
            className="object-fit my-8 px-4 h-52 rounded-[30px] flex-grow "
          />
          <img
            src="/cafe.svg"
            alt=""
            className="object-fit my-8 px-4 w-1/3 h-52 rounded-[30px] flex-grow "
          />
        </div>
      </div>
    </>
  );
};

const DashboardContent = () => {
  const dataActivity = [
    { id: 1, namaBahan: "Makanan", pesan: "Stok Masuk", jumlah: 10 },
  ];
  return (
    <>
      <div className="flex flex-wrap p-2 mb-10 ">
        <div className="sm:mr-2 mt-4 p-4 border-2 rounded-lg grow">
          <h1 className="uppercase mt-2 mb-4 font-bold text-zinc-400 text-sm">
            Recent Activity
          </h1>
          {dataActivity.map((activity) => (
            <div
              className="overflow-y-auto max-h-20 scrollbar-hide"
              key={activity.id}
            >
              <p>{activity.namaBahan}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState("true");

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, [500]);
  });
  return (
    <>
      <MainLayout>
        <div className="hidden sm:flex">
          <Sidebar />
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <ContentLayout>
              <div className="flex">
                <h1 className="font-extrabold mx-8 mt-8 text-xl text-zinc-600 ">
                  Dashboard
                </h1>
                <div className="flex-grow" />
                <p className="font-medium mt-8 mr-4 text-xl text-zinc-600 self-end">
                  {new Intl.DateTimeFormat("id-ID", {
                    weekday: "long",
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  }).format(new Date())}
                </p>
              </div>
              <p className="ml-8 text-zinc-500 font-medium">
                Welcome Back, Fichry Kosandi
              </p>
              <DashboardExtend />
              <DashboardCard />
              <DashboardContent />
            </ContentLayout>
          </>
        )}
      </MainLayout>
    </>
  );
};

export default Dashboard;
