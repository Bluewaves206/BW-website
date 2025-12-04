// components/partner/Contact.tsx
import { Avatar, Box, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

export default function Contact() {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      sx={{
        backgroundColor: "#F4F9FD",
        width: "100%",
        p: { xs: 5, sm: 10, md: 12 }
      }}
    >
      {/* TOP HEADING */}
      <MotionTypography
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        variant="subtitle1"
        sx={{
          color: "#4E5156",
          fontWeight: 600,
          letterSpacing: 2,
          display: "flex",
          alignItems: "center",
          gap: 2
        }}
      >
        <Icon icon={"streamline:star-2-solid"} style={{ color: "#3F8CFF" }} />
        Partners & Sponsors
      </MotionTypography>

      <MotionTypography
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        variant="h2"
        sx={{ color: "#3F8CFF", fontWeight: 600, mt: 1 }}
        gutterBottom
      >
        Have Questions About Partnership?
      </MotionTypography>

      {/* MAIN CONTENT CARD */}
      <Box
        sx={{
          backgroundColor: "rgba(255,255,255,0.3)",
          boxShadow: "16.44px 17.09px 65.75px rgba(41, 95, 131, 0.08)",
          borderRadius: 10,
          p: { xs: 3, sm: 4 },
          mt: 4,
          backdropFilter: "blur(10px)",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 4, md: 6 },
        }}
      >
        {/* LEFT SIDE BLOCK */}
        <Box
          sx={{
            flex: 1,
            textAlign: { xs: "center", md: "left" },
            pr: { md: 4 },
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" }
          }}
        >
          <MotionTypography
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            variant="h4"
            sx={{ fontWeight: 600, color: "#2C313F" }}
          >
            Get In Touch With Us
          </MotionTypography>

          <MotionTypography
  initial={{ opacity: 0, y: 12 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  variant="h6"
  sx={{
    color: "#4E5156",
    mt: 1,
    fontWeight: 400,
    maxWidth: { xs: "100%", md: "420px" }, 
    textAlign: { xs: "center", md: "left" },
    lineHeight: 1.5
  }}
>
  Our dedicated team is ready to support you <br />
  with any partnership inquiries.
</MotionTypography>

          <MotionBox
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            sx={{
              mt: 3,
              width: "100%",
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <img
              src="/partnercontact.png"
              alt="Contact Illustration"
              style={{
                width: "100%",
                maxWidth: "320px",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </MotionBox>
        </Box>

        {/* RIGHT SIDE INFORMATION CARDS */}
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2.5 }}>
          {/* ADDRESS CARD */}
          <MotionBox
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              borderRadius: "12px",
              p: 2.5,
              backgroundColor: "white",
              boxShadow: "0 4px 20px rgba(0,0,0,0.06)"
            }}
          >
            <Avatar sx={{ bgcolor: "#E8F1FF", color: "#2E77FF", width: 48, height: 48, mr: 2 }}>
              <Icon icon="mdi:location" />
            </Avatar>
            <Box>
              <Typography sx={{ color: "#9AA0A6", fontSize: "0.85rem" }}>Address</Typography>
              <Typography sx={{ fontWeight: 600, color: "#000" }}>Mahendra Tower</Typography>
              <Typography sx={{ color: "#4E5156" }}>43A, Tollygunge Circular Road</Typography>
              <Typography sx={{ color: "#4E5156" }}>Suit No. 3B, 3rd Floor, Kolkata - 53</Typography>
            </Box>
          </MotionBox>

          {/* PHONE CARD */}
          <MotionBox
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              borderRadius: "12px",
              p: 2.5,
              backgroundColor: "white",
              boxShadow: "0 4px 20px rgba(0,0,0,0.06)"
            }}
          >
            <Avatar sx={{ bgcolor: "#E8F1FF", color: "#2E77FF", width: 48, height: 48, mr: 2 }}>
              <Icon icon="material-symbols:call" />
            </Avatar>
            <Box>
              <Typography sx={{ color: "#9AA0A6", fontSize: "0.85rem" }}>Contact Phone</Typography>
              <Typography sx={{ color: "#4E5156" }}>+91 8777247832</Typography>
              <Typography sx={{ color: "#4E5156" }}>+91 8276882339</Typography>
            </Box>
          </MotionBox>

          {/* EMAIL CARD */}
          <MotionBox
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.18 }}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              borderRadius: "12px",
              p: 2.5,
              backgroundColor: "white",
              boxShadow: "0 4px 20px rgba(0,0,0,0.06)"
            }}
          >
            <Avatar sx={{ bgcolor: "#E8F1FF", color: "#2E77FF", width: 48, height: 48, mr: 2 }}>
              <Icon icon="ic:outline-email" />
            </Avatar>
            <Box>
              <Typography sx={{ color: "#9AA0A6", fontSize: "0.85rem" }}>Email</Typography>
              <Typography sx={{ color: "#4E5156" }}>support@bluewavesmedia.com</Typography>
            </Box>
          </MotionBox>
        </Box>
      </Box>
    </MotionBox>
  );
}
