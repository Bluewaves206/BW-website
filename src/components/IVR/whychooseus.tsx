import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function WhyChooseIVR() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* ⭐ FIXED WRAPPER: NOW MARGIN APPLIES PROPERLY */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "1400px",    // ⭐ Forces proper left & right margin
          mx: "auto",            // ⭐ Centers content (fixes right side issue)

          py: { xs: 6, md: 10 },
          m: { xs: 2, md: 6 },
          px: { xs: 2, md: 4 },

          background: "linear-gradient(to right, #A9D6D9 30%, #E4EFFA 30%)",
          borderRadius: 4,
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "70% 30%" },
            gap: 4,
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              position: "relative",
              height: 600,
              width: "100%",
            }}
          >
            {/* CARD 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                position: "absolute",
                top: "0%",
                left: "10%",
              }}
            >
              <Box
                sx={{
                  width: 420,
                  background: "#FFF",
                  borderRadius: 3,
                  p: 3,
                  boxShadow: "0px 12px 25px rgba(0,0,0,0.1)",
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  Reduce Call Center Costs by up to 40%
                </Typography>
                <Typography sx={{ color: "#777", mt: 1 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </Box>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                position: "absolute",
                top: "34%",
                left: "5%",
              }}
            >
              <Box
                sx={{
                  width: 420,
                  background: "#A45CF5",
                  borderRadius: 3,
                  p: 3,
                  color: "white",
                  boxShadow: "0px 16px 35px rgba(0,0,0,0.15)",
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  CRM Integration Available
                </Typography>
                <Typography sx={{ mt: 1, opacity: 0.9 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </Box>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                position: "absolute",
                top: "68%",
                left: "15%",
              }}
            >
              <Box
                sx={{
                  width: 420,
                  background: "linear-gradient(to right, #CDDDEC, #C9DBEB)",
                  borderRadius: 3,
                  p: 3,
                  color: "#333",
                  boxShadow: "0px 12px 25px rgba(0,0,0,0.1)",
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  CRM Integration Available
                </Typography>
                <Typography sx={{ mt: 1 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </Box>
            </motion.div>
          </Box>

          {/* RIGHT SIDE CONTENT */}
          <Box sx={{ ml: { xs: 0, md: "-55px" } }}>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Box
                sx={{
                  background: "#000",
                  display: "inline-block",
                  px: 4,
                  py: 1.2,
                  borderRadius: 3,
                  transform: "skew(-10deg)",
                  mb: 1,
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontWeight: 700,
                    fontSize: "2rem",
                    transform: "skew(10deg)",
                  }}
                >
                  Why Choose Our
                </Typography>
              </Box>

              <Typography
                sx={{
                  fontSize: "2.7rem",
                  fontWeight: 700,
                  mt: 1,
                  color: "#2F74FF",
                }}
              >
                IVR System?
              </Typography>

              <Typography
                sx={{
                  color: "#444",
                  mt: 2,
                  maxWidth: 350,
                  fontSize: "1rem",
                  lineHeight: "1.6rem",
                }}
              >
                Our IVR solution combines advanced technology with ease of use,
                helping you deliver better customer experiences while reducing
                operational costs.
              </Typography>
            </motion.div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
