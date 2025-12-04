
import Hero from "../components/partner/Hero";
import Benefits from "../components/partner/Benefits";
import Sliders from "../components/partner/Sliders";
import Goals from "../components/partner/Goals";
import Contact from "../components/partner/Contact";
import { Box } from "@mui/material";

export default function PartnerPage() {
  return (
    <Box component="section" sx={{ width: "100%", overflow: "hidden", background: "white" }}>
      <Hero />
      <Box sx={{ width: "100%" }}>
        <Benefits />
      </Box>
      <Sliders />
      <Goals />
      <Contact />
    </Box>
  );
}
