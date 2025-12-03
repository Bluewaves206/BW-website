import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import CallToActionSection from "../components/home/CallToActionSection";
import WhoWeAre from "../components/home/WhoWeAre";
import StatsSection from "../components/home/StatsSection";
import ArticlesSection from "../components/home/ArticlesSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import FaqSection from "../components/home/FaqSection";   
import NewsletterSection from "../components/home/NewsletterSection";

export default function Home() {
    return (
        <>
            <HeroSection />
            <WhoWeAre />
            <ServicesSection />
            <CallToActionSection />
            <StatsSection />
            <ArticlesSection />
            <TestimonialsSection />
            <FaqSection />   

            <NewsletterSection />
        </>
    );
}
