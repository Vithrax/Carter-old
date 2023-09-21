import { protectedProcedure, router } from "../trpc";
import { db } from "@/lib/db";
import { ProductCreateValidator } from "@/lib/validators/product-create";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { TRPCError } from "@trpc/server";

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
      const { name, description, price, unit } = opts.input;
      const { id } = opts.ctx.session.user;

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

        return newProduct;
      } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
          if (error.code === "P2002") {
            throw new TRPCError({
              code: "BAD_REQUEST",
              message: "Name is already taken! please choose different one.",
            });
          }
        }

        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Something went wrong. Please try again later.",
        });
      }
    }),
});
