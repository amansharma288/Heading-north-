import { db } from "@/db";
import { brands } from "@/db/schema";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BrandDetailClient from "@/components/BrandDetailClient";

export const dynamic = "force-dynamic";

export default async function BrandPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [brand] = await db.select().from(brands).where(eq(brands.slug, slug));

  if (!brand) notFound();

  return (
    <>
      <Navbar />
      <BrandDetailClient brand={brand} />
      <Footer />
    </>
  );
}
