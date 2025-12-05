import { useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Typography } from "@mui/material";
import heroImg from "../assets/whatsappHeroImg.png";
import articleImg from "../assets/whatsappArticle.png";
import whatsappAboutImg from "../assets/whatsappAbout.png";
import whatsappFooter from "../assets/whatsappFooter.png";
import footerImg from "../assets/smsLastImg.png";
import { Icon } from "@iconify/react";

export default function Whatsapp() {
  const [expanded, setExpanded] = useState<number | false>(false);

  return (
    <>
      <Box sx={{ px: { xs: 2, md: 10 } }}>

        {/* HERO SECTION */}
        <Box
          sx={{
            background: `url(${heroImg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            minHeight: { xs: "70vh", md: "75vh" },
            width: "100%",
            borderRadius: 5,
            px: { xs: 2, md: 10 },
            py: { xs: 4, md: 6 },
            mb: 4,
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            alignItems: "center",
            gap: { xs: 3, md: 5 },
          }}
        >
          {/* LEFT CONTENT */}
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box
              sx={{
                backgroundColor: "#fff",
                color: "#22A456",
                p: 1,
                display: "flex",
                alignItems: "center",
                gap: 1,
                borderRadius: 5,
                mb: 3,
                width: "fit-content",
              }}
            >
              <Icon icon={"fluent:comment-text-20-filled"} />
              <span style={{ fontSize: "1.1rem" }}>Our Team</span>
            </Box>

            <Typography
              variant="h1"
              sx={{
                width: { xs: "100%", md: "90%" },
                fontWeight: 500,
                color: "white",
                fontSize: { xs: "1.8rem", md: "3.5rem" },
                lineHeight: { xs: 1.2, md: 1.3 },
              }}
            >
              Get Verified with WhatsApp <span style={{ color: "#21A871" }}>Blue Tick</span>
            </Typography>

            <Typography
              variant="h6"
              sx={{
                width: { xs: "100%", md: "80%" },
                color: "#c7c7c7",
                fontSize: { xs: "1rem", md: "1.3rem" },
                mt: 1,
              }}
            >
              Boost your brand credibility and let your customers know it’s really you. Apply for the official WhatsApp Verified Badge today.
            </Typography>

            <Button
              variant="contained"
              size="medium"
              disableElevation
              sx={{
                bgcolor: "#ffffff6c",
                color: "#fff",
                borderRadius: "30px",
                fontSize: "1.2rem",
                fontWeight: 600,
                px: 2.5,
                mt: 3,
                width: "fit-content",
                "&:hover": { bgcolor: "#3575D9" },
              }}
              endIcon={
                <Box
                  sx={{
                    borderRadius: "50%",
                    width: 42,
                    height: 42,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: "-10px",
                    bgcolor: "#22A456",
                  }}
                >
                  <Icon icon="ri:arrow-right-up-line" style={{ fontSize: 18, color: "white" }} />
                </Box>
              }
            >
              Read More
            </Button>
          </Box>

          {/* RIGHT SIDE IMAGE */}
          <Box
            component="img"
            src={heroImg}
            alt="Hero Illustration"
            sx={{
              width: { xs: "80%", sm: "60%", md: "100%" },
              height: "auto",
              margin: "0 auto",
              display: { xs: "block", md: "block" },
              objectFit: "contain",
              borderRadius: 3,
            }}
          />
        </Box>

        {/* FEATURES SECTION */}
        <Box sx={{ width: "100%", display: "flex", alignItems: "center", flexDirection: "column", mt: 10 }}>
          <Typography variant="caption">LEARN HOW TO STARTED</Typography>
          <Typography variant="h2" sx={{ fontWeight: 500 }} gutterBottom>
            Powerful Features for Your Business
          </Typography>
          <Typography variant="body1" sx={{ color: "#777E90", textAlign: "center" }}>
            Everything you need to communicate effectively with your customers
          </Typography>

          <Box sx={{ width: "100%", display: "flex", justifyContent: "space-around", flexWrap: "wrap", mt: 3, gap: 2 }}>
            {[1, 2, 3].map((i) => (
              <Box
                key={i}
                sx={{
                  width: { xs: "100%", sm: "48%", md: "25%" },
                  borderRadius: 10,
                  overflow: "hidden",
                  border: "1px solid transparent",
                  p: 1,
                  transition: "0.3s",
                  cursor: "pointer",
                  "&:hover": { border: "1px solid #22A456" },
                }}
              >
                <Box component="img" src={articleImg} sx={{ width: "100%", borderRadius: 11 }} />

                <Box sx={{ px: 2, mt: 1 }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Typography variant="h6" fontWeight={600}>UX Review Presentation</Typography>
                    <Icon icon="mynaui:arrow-up-right" fontSize={20} />
                  </Box>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "#667085",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </Typography>

                  <Button
                    variant="contained"
                    size="small"
                    disableElevation
                    sx={{
                      bgcolor: "#22A456",
                      color: "#fff",
                      borderRadius: "25px",
                      fontSize: "0.8rem",
                      px: 1,
                      mt: 2,
                      "&:hover": { bgcolor: "#3575D9" },
                      width: "fit-content",
                    }}
                    endIcon={
                      <Box
                        sx={{
                          borderRadius: "50%",
                          width: 42,
                          height: 42,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mr: "-7px",
                          bgcolor: "#22A456",
                          border: "1px solid #fff",
                        }}
                      >
                        <Icon icon="ri:arrow-right-up-line" style={{ fontSize: 18, color: "white" }} />
                      </Box>
                    }
                  >
                    Read More
                  </Button>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* WHY CHOOSE SECTION */}
        <Typography variant="h2" sx={{ textAlign: "center", mt: 5, fontSize: { xs: "1.8rem", md: "2.5rem" } }}>
          Why Choose{" "}
          <span style={{ color: "white", padding: "8px 12px", backgroundColor: "#21A871", borderRadius: 20 }}>
            Whatsapp
          </span>{" "}
          Verified
        </Typography>

        <Typography variant="body1" sx={{ textAlign: "center", color: "#667085", mt: 6 }}>
          Your customers trust what they can verify — and a verified badge builds that trust instantly.
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "65% 35%" },
            gap: 3,
            width: "100%",
            mt: 4,
            px: { xs: 2, md: 10 },
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="h4">
              Our pool experts are committed to providing reliable, affordable services to every customer.
            </Typography>

            {/* UPDATED FAQ (AUTO CLOSE) */}
            <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 2 }}>
              {[1, 2, 3].map((item, index) => (
                <Box key={index}>
                  <Accordion
                    expanded={expanded === item}
                    onChange={() => setExpanded(expanded === item ? false : item)}
                    sx={{ borderRadius: 4, p: 2, boxShadow: "none" }}
                  >
                    <AccordionSummary expandIcon={<Icon icon="mdi:chevron-down" fontSize="2rem" />}>
                      <Typography>Why should I choose Bluewaves Media? {item}</Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </AccordionDetails>
                  </Accordion>

                  {index !== 2 && <hr style={{ width: "95%", marginTop: 10 }} />}
                </Box>
              ))}
            </Box>
          </Box>

          {/* ABOUT IMAGE */}
          <Box
            component="img"
            src={whatsappAboutImg}
            sx={{
              width: "100%",
              height: "480px",
              objectFit: "contain",
            }}
          />
        </Box>
      </Box>

      {/* FOOTER SECTION */}
      <Box
        sx={{
          background: `url('${whatsappFooter}')`,
          height: { xs: "auto", md: "52vh" },
          mt: 8,
          backgroundSize: "cover",
          p: { xs: 3, md: 5 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "50%" }, mb: { xs: 3, md: 0 } }}>
          <Typography variant="h2" sx={{ color: "white", fontWeight: 600 }}>
            Creative Digital Marketing Agency
          </Typography>

          <Typography variant="body1" sx={{ color: "#4E5156", mt: 1 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "center", md: "center" },
              justifyContent: "space-between",
              mt: 4,
              width: { xs: "100%", md: "70%" },
              gap: 2,
            }}
          >
            <Button
              variant="contained"
              component="a"
              href="mailto:sales@bluewavesmedia.in"
              sx={{
                borderRadius: 5,
                backgroundColor: "#2DCA72",
                color: "white",
                px: 3,
                py: 1,
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Contact Us
            </Button>

            <Typography
              sx={{
                color: "white",
                fontSize: "1rem",
                fontWeight: 500,
                textAlign: "center",
              }}
            >
              or
            </Typography>

            <Typography
              component="a"
              href="tel:+918777247832"
              sx={{
                color: "white",
                fontWeight: 500,
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Icon icon="ion:call-sharp" style={{ color: "#2DCA72", marginRight: 10 }} />
              +91 8777247832
            </Typography>
          </Box>
        </Box>

        {/* FOOTER IMAGE */}
        <Box
          component="img"
          src={footerImg}
          sx={{
            height: "80%",
            display: { xs: "none", md: "block" },
          }}
        />
      </Box>
    </>
  );
}
