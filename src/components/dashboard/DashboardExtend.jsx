const DashboardExtend = () => {
  return (
    <>
      <div className="min-w-screen flex flex-wrap">
        <div className="mx-2 my-4 flex flex-1 flex-wrap rounded-xl border-2 transition-transform duration-300 ease-in-out hover:scale-105 hover:transform">
          <img
            src="/coffee.svg"
            alt=""
            className="object-fit my-8 h-52 flex-grow rounded-[30px] px-4 "
          />
          <img
            src="/cafe.svg"
            alt=""
            className="object-fit my-8 h-52 w-1/3 flex-grow rounded-[30px] px-4 "
          />
        </div>
      </div>
    </>
  );
};

export default DashboardExtend;
