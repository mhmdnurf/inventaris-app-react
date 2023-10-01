import DashboardUser from "../components/dashboard/DashboardUser";

const Header = ({ title }) => {
  return (
    <>
      <div className="flex">
        <h1 className="mx-8 mt-8 text-xl font-extrabold text-zinc-600 ">
          {title}
        </h1>
        <div className="flex-grow" />
        <p className="mr-4 mt-8 self-end text-xl font-medium text-zinc-600">
          {new Intl.DateTimeFormat("id-ID", {
            weekday: "long",
            day: "2-digit",
            month: "long",
            year: "numeric",
          }).format(new Date())}
        </p>
      </div>
      <DashboardUser username="Ayu Emeliana Pratiwi" />
    </>
  );
};

export default Header;
