import { Box, Typography } from "@mui/material";
import states from "../../assets/homeStates image.png";

export default function StatsSection() {
    return (
        <Box
            sx={{
                backgroundColor: "#d4dff0",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                py: 6,
            }}
        >
            <Box
                sx={{
                    backgroundImage: `url(${states})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    width: "80%",
                    height: "500px",
                    borderRadius: 5,
                    display: "flex",
                    justifyContent: "flex-end",
                    flexDirection: "column",
                }}
            >
                {/* Stats Box */}
                <Box
                    sx={{
                        backgroundColor: "#4E5156",
                        py: 5,
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,

                        display: "grid",
                        gridTemplateColumns: {
                            xs: "repeat(2, 1fr)",   // MOBILE 2x2
                            sm: "repeat(4, 1fr)",   // DESKTOP 4 in row
                        },
                        textAlign: "center",
                    }}
                >
                    {[
                        {
                            value: (
                                <>
                                    13<span style={{ color: "#3F8CFF" }}>+</span>
                                </>
                            ),
                            label: "Years of Experience",
                        },
                        {
                            value: "2010",
                            label: "Funded",
                        },
                        {
                            value: (
                                <>
                                    7K<span style={{ color: "#3F8CFF" }}>+</span>
                                </>
                            ),
                            label: "Satisfied Clients",
                        },
                        {
                            value: (
                                <>
                                    15<span style={{ color: "#3F8CFF" }}>+</span>
                                </>
                            ),
                            label: "Team Members",
                        },
                    ].map((stat, index) => (
                        <Box
                            key={index}
                            sx={{
                                py: 2,
                                color: "white",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: 1,

                                //  Mobile bottom border → only for first row
                                borderBottom: {
                                    xs: index < 2 ? "1px solid white" : "none",
                                    sm: "none",
                                },

                                //  Border right (merged for mobile + desktop)
                                borderRight: {
                                    xs: index % 2 === 0 ? "1px solid white" : "none", // LEFT column items
                                    sm: index !== 3 ? "1px solid white" : "none",      // All except last on desktop
                                },
                            }}
                        >
                            <Typography variant="h3">{stat.value}</Typography>
                            <Typography variant="body2">{stat.label}</Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}
