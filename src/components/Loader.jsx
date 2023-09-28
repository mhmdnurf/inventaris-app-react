import { ProgressBar } from "react-loader-spinner";

const Loader = () => {
  return (
    <>
      <div className="flex justify-center items-center w-screen">
        <ProgressBar
          height="80"
          width="80"
          ariaLabel="progress-bar-loading"
          wrapperStyle={{}}
          wrapperClass="progress-bar-wrapper"
          borderColor="#d4d4d8"
          barColor="#0ea5e9"
        />
      </div>
    </>
  );
};

export default Loader;
