"use client";
import { capitalize } from "@/lib/utils";
import { usePathname } from "next/navigation";

const PageTitle = () => {
  const lastSegment = usePathname().split("/").slice(-1)[0];
  const name = lastSegment === "a" ? "Overview" : capitalize(lastSegment);

  return <h1 className="pb-6 text-4xl font-medium tracking-tight">{name}</h1>;
};

export default PageTitle;
