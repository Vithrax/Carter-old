import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import NewProductForm from "./NewProductForm";
import { DataTable } from "@/components/data-table";
import { columns } from "./columns";
import { db } from "@/lib/db";

const page = async () => {
  const data = await db.product.findMany();

  return (
    <Tabs defaultValue="catalog">
      <TabsList>
        <TabsTrigger value="catalog">Catalog</TabsTrigger>
        <TabsTrigger value="create">Create</TabsTrigger>
      </TabsList>
      <TabsContent value="catalog" className="pt-8">
        <DataTable columns={columns} data={data} filterTarget={"products"} />
      </TabsContent>
      <TabsContent value="create">
        <NewProductForm />
      </TabsContent>
    </Tabs>
  );
};

export default page;
