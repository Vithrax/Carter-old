import z from "zod";
import { Unit } from "@prisma/client";

const unitTypes = Object.keys(Unit) as [Unit, ...Unit[]];

export const ProductCreateValidator = z.object({
  name: z
    .string()
    .min(3, { message: "Product name must have at least 3 characters" }),
  unit: z.enum(unitTypes),
  description: z.string().optional(),
  price: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z.number().positive().max(100),
  ),
});

export type ProductCreateRequest = z.infer<typeof ProductCreateValidator>;
