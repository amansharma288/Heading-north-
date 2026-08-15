import { db } from "@/db";
import { brands } from "@/db/schema";
import { asc } from "drizzle-orm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomeClient from "@/components/HomeClient";

export const dynamic = "force-dynamic";

export default async function Home() {
  const allBrands = await db
    .select()
    .from(brands)
    .orderBy(asc(brands.sortOrder));

  return (
    <>
      <Navbar />
      <HomeClient brands={allBrands} />
      <Footer />
    </>
  );
}
