const MainLayout = ({ children }) => {
  return (
    <>
      <div className="min-w-screen flex min-h-screen bg-gray-100">
        {children}
      </div>
    </>
  );
};

export default MainLayout;
