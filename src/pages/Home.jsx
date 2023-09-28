import { useEffect, useState } from "react";
import { FaDocker } from "react-icons/fa6";
import { ProgressBar } from "react-loader-spinner";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <aside className="min-h-screen border-r border-zinc-700">
        <nav className="">
          <h1 className="text-center mx-2 my-10 p-4 rounded-md shadow-md drop-shadow-md font-bold text-white text-lg border-indigo-300 border-2 ">
            Lilio Cofee Garden
          </h1>
          <div className="flex justify-center items-center">
            <ul className="p-4 h-screen w-56">
              <h1 className="font-bold mb-2 text-slate-400">MENU</h1>
              <Link className="flex hover:bg-zinc-600 p-2 rounded-xl font-bold">
                <FaDocker size={25} className="mr-2" color="white" />
                <span className="text-white">Dashboard</span>
              </Link>
            </ul>
          </div>
        </nav>
      </aside>
    </>
  );
};

const DashboardCard = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="p-4 bg-indigo-300 grow rounded-2xl mx-4 my-4">
          <div className="flex mt-4">
            <FaDocker size={40} className="mr-2 bg-white rounded-md p-2" />
            <h1 className="text-black font-bold">Kondisi Stok</h1>
          </div>
        </div>
        <div className="p-4 bg-zinc-700 hover:bg-indigo-300 grow rounded-2xl mx-4 my-4">
          <div className="flex mt-4">
            <FaDocker size={40} className="mr-2 bg-white rounded-md p-2" />
            <h1 className="text-black font-bold">Barang Masuk</h1>
          </div>
        </div>
        <div className="p-4 bg-zinc-700 hover:bg-indigo-300 grow rounded-2xl mx-4 my-4">
          <div className="flex mt-4">
            <FaDocker size={40} className="mr-2 bg-white rounded-md p-2" />
            <h1 className="text-black font-bold">Barang Keluar</h1>
          </div>
        </div>
        <div className="p-4 bg-zinc-700 hover:bg-indigo-300 grow rounded-2xl mx-4 my-4">
          <div className="flex mt-4">
            <FaDocker size={40} className="mr-2 bg-white rounded-md p-2" />
            <h1 className="text-black font-bold">Bahan Masuk</h1>
          </div>
        </div>
        <div className="p-4 bg-zinc-700 hover:bg-indigo-300 grow rounded-2xl mx-4 my-4">
          <div className="flex mt-4">
            <FaDocker size={40} className="mr-2 bg-white rounded-md p-2" />
            <h1 className="text-black font-bold">Bahan Keluar</h1>
          </div>
        </div>
      </div>
    </>
  );
};

const Home = ({ title }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, [2000]);
  });

  return (
    <>
      {isLoading ? (
        <>
          <div className="flex flex-row justify-center items-center h-screen w-screen ">
            <ProgressBar
              height="80"
              width="80"
              ariaLabel="progress-bar-loading"
              wrapperStyle={{}}
              wrapperClass="progress-bar-wrapper"
              borderColor="white"
              barColor="#51E5FF"
            />
          </div>
        </>
      ) : (
        <>
          <Sidebar />
          <section className="p-10">
            <h1 className="text-2xl font-extrabold text-white mb-14">
              {title}
            </h1>
            <DashboardCard />
          </section>
        </>
      )}
    </>
  );
};

export default Home;
