import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { FC } from "react";
import NewRecipe from "./NewRecipe";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <Tabs defaultValue="catalog" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="catalog">Catalog</TabsTrigger>
        <TabsTrigger value="create">Create</TabsTrigger>
      </TabsList>
      <TabsContent value="catalog">Catalog</TabsContent>
      <TabsContent value="create">
        <NewRecipe />
      </TabsContent>
    </Tabs>
  );
};

export default page;
