import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CareersClient from "@/components/CareersClient";

export const metadata = {
  title: "Careers | Heading North",
  description: "Join the team at Heading North and help build the brands of tomorrow.",
};

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <CareersClient />
      <Footer />
    </>
  );
}
