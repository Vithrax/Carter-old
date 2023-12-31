import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const getUserAuth = async () => {
  const session = await getServerSession(authOptions);
  return { session };
};

export const checkAuth = async () => {
  const { session } = await getUserAuth();
  if (!session) return redirect("/sign-up");

  return session;
};
