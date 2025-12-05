import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function IVRApplications() {
  const items = [
    {
      img: "/IVR/support.png",
      title: "Customer Support",
      desc: "Work in any region without worry with Cloudshoppe’s IVR Number.",
    },
    {
      img: "/IVR/route.png",
      title: "Route calls with ease",
      desc: "Press keys to get directed to your desired channel.",
    },
    {
      img: "/IVR/report.png",
      title: "Reports and analytics",
      desc: "Real-time agent-wise reporting and call analytics.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Box
        sx={{
          width: "100%",
          py: { xs: 8, md: 10 },
          px: { xs: 2, md: 6 },
          background:
            "linear-gradient(135deg, #96C9D1 0%, #96C9D1 60%, #E8FCFF 100%)",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          textAlign: "center",
        }}
      >
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              mb: 4,
            }}
          >
            {/* TITLE */}
            <Box sx={{ display: "inline-flex", alignItems: "center" }}>
              <Typography
                sx={{
                  fontSize: { xs: "2rem", md: "2.8rem" },
                  fontWeight: 600,
                  color: "#444",
                }}
              >
                IVR{" "}
              </Typography>

              <Box
                sx={{
                  background: "#000",
                  px: { xs: 2, md: 3 },
                  py: 1,
                  borderRadius: 3,
                  transform: "skew(-8deg)",
                  ml: 1,
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "2rem", md: "2.8rem" },
                    fontWeight: 600,
                    color: "white",
                    transform: "skew(8deg)",
                  }}
                >
                  Applications
                </Typography>
              </Box>
            </Box>

            {/* SUBTITLE */}
            <Typography
              sx={{
                mt: 2,
                fontSize: { xs: "1rem", md: "1.2rem" },
                color: "#333",
                fontWeight: 500,
              }}
            >
              Discover how IVR can transform your <br />
              business operations
            </Typography>
          </Box>
        </motion.div>

        {/* ================= FEATURES GRID ================= */}
        <Box
          sx={{
            mt: 4,
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr 1fr" },
            gap: { xs: 6, md: 4 },
            justifyItems: "center",
          }}
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: i * 0.2 }}
              viewport={{ once: true }}
              style={{ textAlign: "center", maxWidth: 260 }}
            >
              {/* ICON */}
              <motion.img
                src={item.img}
                alt={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                style={{
                  width: "100px",
                  maxWidth: "100%",
                  margin: "0 auto",
                  marginBottom: "12px",
                }}
              />

              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  color: "#222",
                  mt: 1,
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  mt: 1,
                  fontSize: ".9rem",
                  color: "#444",
                }}
              >
                {item.desc}
              </Typography>
            </motion.div>
          ))}
        </Box>
      </Box>
    </motion.div>
  );
}
