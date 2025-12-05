import { Box, Typography, Button } from "@mui/material";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export default function CreativeAgencySection() {
  return (
    <Box
      sx={{
        width: "100%",
        px: { xs: 2, md: 10 },
        py: { xs: 6, md: 10 },
        background: "#CDDDEC",
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        alignItems: "center",
        gap: { xs: 4, md: 6 },
        borderRadius: 4,
      }}
    >
      {/* LEFT SIDE CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "2rem", md: "2.8rem" },
            lineHeight: 1.2,
            mb: 2,
          }}
        >
          Creative Digital <br /> Marketing Agency
        </Typography>

        <Typography
          sx={{
            color: "#333",
            width: { xs: "100%", md: "80%" },
            fontSize: "1rem",
            mb: 3,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur sadipscing elitr,
          sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet consectetur sadipscing elitr
        </Typography>

        {/* CONTACT ROW */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              gap: 2,
              mt: 2,
            }}
          >
            <Button
              component="a"
              href="mailto:sales@bluewavesmedia.in?subject=Inquiry%20from%20website&body=Hello%20Bluewaves%20Media,"
              sx={{
                backgroundColor: "#1D73EA",
                color: "#fff",
                px: 3,
                py: 1,
                borderRadius: 5,
                textTransform: "none",
                fontWeight: 600,
                "&:hover": { backgroundColor: "#1559b8" },
                textDecoration: "none",
              }}
            >
              Contact us
            </Button>

            <Typography sx={{ color: "#000", opacity: 0.7 }}>Or</Typography>

            <Typography
              component="a"
              href="tel:+918777247832"
              sx={{
                textDecoration: "none",
                color: "#000",
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontWeight: 600,
              }}
            >
              <Icon icon="mdi:phone" color="#1D73EA" width={20} />
              +91 8777247832
            </Typography>
          </Box>
        </motion.div>
      </motion.div>

      {/* RIGHT SIDE IMAGES — HIDDEN ON MOBILE */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-80px" }}
        style={{ width: "100%" }}
      >
        <Box
          sx={{
            position: "relative",
            display: { xs: "none", md: "block" },
          }}
        >
          {/* Background large image */}
          <motion.img
            src="/IVR/ivrmain.png"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: 8,
            }}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />

          {/* Small overlay image */}
          <motion.img
            src="/IVR/IVRNav.png"
            style={{
              position: "absolute",
              bottom: -20,
              right: -20,
              width: "45%",
              borderRadius: 12,
              boxShadow: "0px 5px 20px rgba(0,0,0,0.15)",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </Box>
      </motion.div>
    </Box>
  );
}
