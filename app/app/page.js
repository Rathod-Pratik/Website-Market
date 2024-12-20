"use client";
import HeroSection from "./_components/Hero section";  // Adjusted component name
import ProductSection from "./_components/ProductSection";
import Review from "./_components/Review";
import Services from "./_components/Services";
import Team from "./_components/Team";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Services/>
      <ProductSection />
      <Team/>
      <Review/>
    </div>
  );
}
