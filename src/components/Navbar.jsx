import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-center">
        <nav className="mt-10 rounded-xl bg-white px-8 py-4 shadow drop-shadow-sm">
          {[
            ["Home", "/"],
            ["Master Barang", "/master-bahan"],
            ["Master Bahan", "/"],
            ["Satuan", "/master-bahan"],
          ].map(([title, url, index]) => (
            <Link
              key={index}
              to={url}
              className="m-4 rounded-lg px-3 py-2 font-medium text-slate-700 hover:bg-slate-100 focus:bg-sky-500 focus:text-white focus:ring"
            >
              {title}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
