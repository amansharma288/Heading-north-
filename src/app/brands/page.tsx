import { db } from "@/db";
import { brands } from "@/db/schema";
import { asc } from "drizzle-orm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BrandsListClient from "@/components/BrandsListClient";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Our Brands | Heading North",
  description: "Explore the portfolio of innovative brands under the Heading North umbrella.",
};

export default async function BrandsPage() {
  const allBrands = await db.select().from(brands).orderBy(asc(brands.sortOrder));

  return (
    <>
      <Navbar />
      <BrandsListClient brands={allBrands} />
      <Footer />
    </>
  );
}
