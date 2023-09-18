import { router } from "../trpc";
import { productsRouter } from "./products";
import { usersRouter } from "./users";

export const appRouter = router({
  users: usersRouter,
  products: productsRouter,
});

export type AppRouter = typeof appRouter;
