import Sidebar from "./_components/sidebar/index";
import OrgSidebar from "./_components/org-sidebar/index";
import Navbar from "./_components/navbar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <>
      <main className="h-full">
        {/* sidebar */}
        <Sidebar />

        <div className="pl-[60px] h-full">
          <div className="flex gap-x-3 h-full">
            {/* org sidebar */}
            <OrgSidebar />

            <div className="h-full flex-1">
              {/* navbar */}
              <Navbar />

              {children}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DashboardLayout;
