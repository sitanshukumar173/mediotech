import AboutSection from "../../components/Sections/HomePage/AboutSection"
import ContactCTA from "../../components/Sections/HomePage/ContactCTA"
import Facility from "../../components/Sections/HomePage/Facility"
import { HomeHero } from "../../components/Sections/HomePage/HomeHero"
import ICUVentilators from "../../components/Sections/HomePage/ICUVentilators"
import MadeInIndia from "../../components/Sections/HomePage/MadeInIndia"
import ProductPortfolio from "../../components/Sections/HomePage/ProductPortfolio"
import ProvenScale from "../../components/Sections/HomePage/ProvenScale"
import Resources from "../../components/Sections/HomePage/Resources"
import StatsBanner from "../../components/Sections/HomePage/StatsBanner"
import { TrustedInstitutes } from "../../components/Sections/HomePage/TrustedInstitutes"
import WeAre from "../../components/Sections/HomePage/WeAre"
import WhyChoose from "../../components/Sections/HomePage/WhyChoose"

function HomePage() {
  return (
   <div className="bg-white">
    <HomeHero/>
    <ICUVentilators/>
    <MadeInIndia/>
    <ProvenScale/>
    <WhyChoose/>
    <ProductPortfolio/>
    <TrustedInstitutes/>
    <StatsBanner/>
    <WeAre/>
    <Resources/>
    <AboutSection/>
    <ContactCTA/>
    <Facility/>
   </div>
  )
}

export default HomePage
