import PageTitle from "@/components/PageTitle";
import { Sidebar } from "@/components/SideBar";
import { checkAuth } from "@/lib/auth/utils";

const layout = async ({ children }: { children: React.ReactNode }) => {
  await checkAuth();

  return (
    <>
      <div className="hidden md:block">
        <div className="grid h-[99vh] lg:grid-cols-5">
          <Sidebar className="hidden lg:block" />
          <div className="col-span-3 max-h-screen overflow-auto lg:col-span-4 lg:border-l">
            <div className="h-full px-4 py-6 lg:px-8">
              <PageTitle />
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default layout;
