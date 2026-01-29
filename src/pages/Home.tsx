import { TrustedPartners } from "../components/EightSection";
import { FifthSection } from "../components/FifthSection";
import { FirstSection } from "../components/FirstSection";
import { FounderNote } from "../components/FounderNote";
import { FourthSection } from "../components/FourthSection";
import { SecondSection } from "../components/SecondSection";
import { TestimonialsSection } from "../components/SeventhSection";
import { SixthSection } from "../components/SixthSection";
import { ThirdSection } from "../components/ThirdSection";
import Footer from "./Footer";
import FloatingHeader from "./Header";


export const Home = () => {
  return (
      <div>
        <FloatingHeader/>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixthSection />
        <FounderNote />
        
        <TestimonialsSection />
        <TrustedPartners />
        <Footer />
      </div>
  )
};