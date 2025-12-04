import HeroSection from "../components/CRM/HeroSection";
import AutoScrollCategories from "../components/CRM/AutoScrollCategories";
import CRMFeatures from "../components/CRM/CRMFeatures";
import VideoFeature from "../components/CRM/VideoFeature";
import SuccessSteps from "../components/CRM/SuccessSteps";
import Testimonials from "../components/CRM/Testimonials";
import FaqSection from "../components/CRM/FaqSection";
import NewsletterSection from "../components/home/NewsletterSection";


export default function CRMPage() {
    return (
        <>
            <HeroSection />
            <AutoScrollCategories />
            <CRMFeatures />
            <VideoFeature />
            <SuccessSteps />
            <Testimonials/>
            <FaqSection />
            <NewsletterSection />

            
        </>
    );
}
