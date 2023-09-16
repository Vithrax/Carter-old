import Logo from "@/components/Logo";
import { Sidebar } from "@/components/SideBar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { ScrollArea, ScrollBar } from "@/components/ui/ScrollArea";
import { Separator } from "@/components/ui/Separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { checkAuth } from "@/lib/auth/utils";
import { Bell, Home, ListChecks, PlusCircle } from "lucide-react";
import Link from "next/link";

const layout = async ({ children }: { children: React.ReactNode }) => {
  await checkAuth();

  return (
    <>
      <div className="md:hidden"></div>
      <div className="hidden md:block">
        <div className="border-t">
          <div className="bg-background">
            <div className="grid h-[99vh] lg:grid-cols-5">
              <Sidebar className="hidden lg:block" />
              <div className="col-span-3 lg:col-span-4 lg:border-l">
                <div className="h-full px-4 py-6 lg:px-8">
                  <Tabs defaultValue="catalog" className="w-[400px]">
                    <TabsList>
                      <TabsTrigger value="catalog">Catalog</TabsTrigger>
                      <TabsTrigger value="create">Create</TabsTrigger>
                    </TabsList>
                    <TabsContent value="catalog">
                      Make changes to your account here.
                    </TabsContent>
                    <TabsContent value="create">
                      Change your create here.
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default layout;
