import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import MainLayout from "../components/layout/MainLayout";
import ContentLayout from "../components/layout/ContentLayout";
import Navbar from "../components/Navbar";
import DashboardCard from "../components/dashboard/DashboardCard";
import DashboardExtend from "../components/dashboard/DashboardExtend";
import DashboardContent from "../components/dashboard/DashboardContent";
import Header from "../components/Header";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState("true");

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, [1500]);
  });
  return (
    <>
      <MainLayout>
        <ContentLayout>
          <Navbar />
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <Header title="Dashboard" />
              <DashboardCard />
              <DashboardExtend />
              <DashboardContent />
            </>
          )}
        </ContentLayout>
      </MainLayout>
    </>
  );
};

export default Dashboard;
