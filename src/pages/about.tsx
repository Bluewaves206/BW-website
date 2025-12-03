import { Box } from "@mui/material";

// IMPORT ALL COMPONENTS
import AboutHeroSection from "../components/about/AboutHeroSection";
import BulkServicesSection from "../components/about/BulkServicesSection";
import TeamSection from "../components/about/TeamSection";
import FeaturesSection from "../components/about/FeaturesSection";
import DemoVideoSection from "../components/about/DemoVideoSection";
import WhoWeAreSection from "../components/about/WhoWeAreSection";
import ContactSection from "../components/about/ContactSection";

export default function About() {
    return (
        <Box sx={{ width: "100%", overflow: "hidden" }}>
            
            {/* 1️⃣ TOP HERO SECTION */}
            <AboutHeroSection />

            {/* 2️⃣ BULK SERVICES SECTION */}
            <BulkServicesSection />

            {/* 3️⃣ TEAM MEMBERS SECTION */}
            <TeamSection />

            {/* 4️⃣ FEATURES SECTION */}
            <FeaturesSection />

            {/* 5️⃣ DEMO VIDEO SECTION */}
            <DemoVideoSection />

            {/* 6️⃣ WHO WE ARE SECTION */}
            <WhoWeAreSection />

            {/* 7️⃣ CONTACT FORM + FOOTER IMAGE */}
            <ContactSection />

        </Box>
    );
}
