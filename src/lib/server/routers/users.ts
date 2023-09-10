import z from "zod";
import { publicProcedure, router } from "../trpc";
import { db } from "@/lib/db";

export const usersRouter = router({
  getUsers: publicProcedure.query(async () => {
    const users = await db.user.findMany();
    return users;
  }),

  getUserById: publicProcedure.input(z.string()).query(async (opts) => {
    const user = await db.user.findFirst({
      where: {
        id: opts.input,
      },
    });

    return user;
  }),
});
