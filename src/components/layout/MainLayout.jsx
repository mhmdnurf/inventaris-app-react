const MainLayout = ({ children }) => {
  return (
    <>
      <div className="min-w-screen flex min-h-screen bg-slate-100">
        {children}
      </div>
    </>
  );
};

export default MainLayout;
