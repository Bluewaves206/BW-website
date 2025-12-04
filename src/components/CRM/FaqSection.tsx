import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Icon } from "@iconify/react";

const faqData = [
  {
    question: "What is Bluewavesmedia?",
    answer:
      "Bluewavesmedia is a home care platform that connects homeowners with professional service providers offering a wide range of services, including repairs, maintenance, cleaning, and more.",
  },
   {
    question: "What is Bluewavesmedia?",
    answer:
      "Bluewavesmedia is a home care platform that connects homeowners with professional service providers offering a wide range of services, including repairs, maintenance, cleaning, and more.",
  },
   {
    question: "What is Bluewavesmedia?",
    answer:
      "Bluewavesmedia is a home care platform that connects homeowners with professional service providers offering a wide range of services, including repairs, maintenance, cleaning, and more.",
  },
   {
    question: "What is Bluewavesmedia?",
    answer:
      "Bluewavesmedia is a home care platform that connects homeowners with professional service providers offering a wide range of services, including repairs, maintenance, cleaning, and more.",
  },
];

export default function FaqSection() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <Box
      sx={{
        width: "100%",
        background: "#D0E7F4",
        py: 10,
        px: { xs: 3, md: 10 },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1.2fr 2fr" },
          gap: 6,
          width: "100%",
          maxWidth: "1400px",
        }}
      >
        <Box>
          <Typography
            variant="h3"
            sx={{ fontWeight: 700, mb: 1, color: "#1a1a1a" }}
          >
            Frequently Asked Questions
          </Typography>

          <Typography sx={{ color: "#3F4B5A", mt: 1 }}>
            Still need help?
            <span
              style={{
                color: "#15B2F5",
                fontWeight: 600,
                marginLeft: "6px",
                cursor: "pointer",
              }}
            >
              Get Help Now
            </span>
          </Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {faqData.map((item, index) => {
            const isOpen = expanded === index;

            return (
              <Box
                key={index}
                sx={{
                  backgroundColor: isOpen ? "#FFFFFF" : "#F4F8FB",
                  borderRadius: "14px",
                  padding: 2.5,
                  transition: "0.3s ease",
                  cursor: "pointer",
                  boxShadow: isOpen
                    ? "0 6px 20px rgba(0,0,0,0.08)"
                    : "0 2px 10px rgba(0,0,0,0.04)",
                }}
                onClick={() => setExpanded(isOpen ? null : index)}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "1.1rem",
                      color: "#1a1a1a",
                    }}
                  >
                    {item.question}
                  </Typography>

                  <Icon
                    icon="mdi:chevron-down"
                    width="24"
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                      color: "#4A5568",
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    maxHeight: isOpen ? "250px" : "0px",
                    opacity: isOpen ? 1 : 0,
                    overflow: "hidden",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    color: "#5F6C7B",
                    mt: isOpen ? 2 : 0,
                    transform: isOpen ? "translateY(0px)" : "translateY(-6px)",
                    lineHeight: 1.5,
                  }}
                >
                  {item.answer}
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
