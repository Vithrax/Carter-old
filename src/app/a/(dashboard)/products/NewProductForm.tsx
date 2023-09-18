"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import {
  ProductCreateRequest,
  ProductCreateValidator,
} from "@/lib/validators/product-create";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";
import { trpc } from "@/lib/trpc/client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { Unit } from "@prisma/client";

const unitTypes = Object.keys(Unit);

interface NewProductFormProps {}

const NewProductForm: FC<NewProductFormProps> = ({}) => {
  const form = useForm<ProductCreateRequest>({
    resolver: zodResolver(ProductCreateValidator),
  });

  const {
    mutate: createProduct,
    data,
    isLoading,
    isError,
    isSuccess,
    error,
  } = trpc.products.createProduct.useMutation();

  console.log(data);
  console.log(isLoading);
  console.log(isError);
  console.log(isSuccess);
  console.log(error);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((e) => createProduct(e))}
        className="w-fit max-w-lg space-y-8"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>
                This value will be used as a general display ie. in lists or
                catalog.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="unit"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Measure unit</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a proper unit for measuring product" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {unitTypes.map((unit) => (
                    <SelectItem key={unit} value={unit}>
                      {unit}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>
                This is a unit that you will use to provide the product amount
                to use or add.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product description (optional)</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>
                Product description is your private notes, you can put here
                anything you want!
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product price(optional)</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormDescription>
                Price is optional, however, this value will be used in our
                analytics service aswell as in shopping lists value calculation.
                Recommended.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Create Product</Button>
      </form>
    </Form>
  );
};

export default NewProductForm;
