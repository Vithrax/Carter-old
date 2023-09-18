import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { FC } from "react";
import NewProductForm from "./NewProductForm";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <Tabs defaultValue="catalog">
      <TabsList>
        <TabsTrigger value="catalog">Catalog</TabsTrigger>
        <TabsTrigger value="create">Create</TabsTrigger>
      </TabsList>
      <TabsContent value="catalog">Catalog</TabsContent>
      <TabsContent value="create">
        <NewProductForm />
      </TabsContent>
    </Tabs>
  );
};

export default page;
