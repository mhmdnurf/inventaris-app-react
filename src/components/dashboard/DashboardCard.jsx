import {
  FaArrowTrendDown,
  FaArrowTrendUp,
  FaBurger,
  FaCubes,
} from "react-icons/fa6";

const DashboardCard = () => {
  return (
    <>
      <div className="max-w-screen flex flex-wrap ">
        <div className="mx-2 mt-8 grow rounded-lg border-2 bg-white p-4 transition-transform duration-300 ease-in-out hover:scale-105 hover:transform">
          <FaCubes
            size={40}
            className="rounded-lg border-2 fill-teal-500 p-2"
          />
          <h1 className="mt-2 text-sm font-bold uppercase text-zinc-400">
            Total Barang
          </h1>
          <p className="text-3xl font-extrabold text-zinc-600">36</p>
        </div>
        <div className="mx-2 mt-8 grow rounded-lg border-2 bg-white p-4 transition-transform duration-300 ease-in-out hover:scale-105 hover:transform">
          <FaBurger
            size={40}
            className="rounded-lg border-2 fill-sky-500 p-2"
          />
          <h1 className="mt-2 text-sm font-bold uppercase text-zinc-400">
            Total Bahan
          </h1>
          <p className="text-3xl font-extrabold text-zinc-600">10</p>
        </div>
        <div className="mx-2 mt-8 grow rounded-lg border-2 bg-white p-4 transition-transform duration-300 ease-in-out hover:scale-105 hover:transform">
          <FaArrowTrendUp
            size={40}
            className="rounded-lg border-2 fill-green-500 p-2"
          />
          <h1 className="mt-2 text-sm font-bold uppercase text-zinc-400">
            Stok Masuk
          </h1>
          <p className="text-3xl font-extrabold text-zinc-600">5</p>
        </div>
        <div className="mx-2 mt-8 grow rounded-lg border-2 bg-white p-4 transition-transform duration-300 ease-in-out hover:scale-105 hover:transform">
          <FaArrowTrendDown
            size={40}
            className="rounded-lg border-2 fill-red-500 p-2"
          />
          <h1 className="mt-2 text-sm font-bold uppercase text-zinc-400">
            Stok Habis
          </h1>
          <p className="text-3xl font-extrabold text-zinc-600">-</p>
        </div>
      </div>
    </>
  );
};

export default DashboardCard;
