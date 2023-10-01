const ContentLayout = ({ children }) => {
  return (
    <>
      <div className="scrollbar-hide h-screen w-full overflow-y-auto bg-slate-50 sm:p-6">
        {children}
      </div>
    </>
  );
};

export default ContentLayout;
