const ContentLayout = ({ children }) => {
  return (
    <>
      <div className="scrollbar-hide h-screen w-full overflow-y-auto rounded-3xl bg-white sm:m-3">
        {children}
      </div>
    </>
  );
};

export default ContentLayout;
