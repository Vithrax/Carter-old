import z from "zod";
import { protectedProcedure, publicProcedure, router } from "../trpc";
import { db } from "@/lib/db";
import { ProductCreateValidator } from "@/lib/validators/product-create";
import { Unit } from "@prisma/client";

export const productsRouter = router({
  getProducts: protectedProcedure.query(async (opts) => {
    const user = opts.ctx.session.user;

    const products = await db.product.findMany({
      where: {
        userId: user.id,
      },
    });

    return products;
  }),

  createProduct: protectedProcedure
    .input(ProductCreateValidator)
    .mutation(async (opts) => {
      console.log("test");
      const { name, description, price, unit } = opts.input;
      const { id } = opts.ctx.session.user;

      // ! input validator is.. problaby incorrect
      try {
        const newProduct = await db.product.create({
          data: {
            name,
            description,
            price,
            unit,
            userId: id,
          },
        });
      } catch (err) {
        console.log(err);
      }
    }),
});
