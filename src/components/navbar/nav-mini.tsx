import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { Icon } from '@iconify/react';
import { useEffect, useState } from "react";




export default function NavMini({ sOpen }: { sOpen: (a: (b: boolean) => boolean) => void }) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show blurred background if user scrolls more than 20px
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <>
            <AppBar position="fixed" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                <Toolbar sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    py: 1,
                    my: 2,
                    mx: 1,
                    borderRadius: 2,
                    transition: "all 0.3s ease-in-out",
                    backgroundColor: scrolled ? "rgba(255, 255, 255, 0.4)" : "transparent",
                    backdropFilter: scrolled ? "blur(8px)" : "none",
                    boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.1)" : "none",
                }}>
                    <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                        <Button
                            variant="contained"
                            size="small"
                            sx={{
                                backgroundColor: "rgba(255, 255, 255, 0.6)",
                                color: "black",
                                borderRadius: "30%",
                                width: 45, // adjust size as needed
                                height: 45,
                                minWidth: 0, // prevent MUI from forcing default button width
                                fontFamily: 'Outfit, sans-serif',
                                textTransform: "none",
                                fontSize: "1.6rem",
                                boxShadow: "none",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                            onClick={() => sOpen((p) => !p)}
                        >
                            <Icon icon="iconamoon:menu-burger-horizontal-bold" />
                        </Button>
                    </Box>
                    <Button
                        variant="contained"
                        size="small"
                        sx={{
                            backgroundColor: "#3F8CFF",
                            color: "white",
                            borderRadius: 6,
                            fontFamily: 'Outfit, sans-serif',
                            textTransform: "none", // <-- add this
                            fontSize: "1.2rem",
                            boxShadow: "none",
                        }}
                        endIcon={
                            <Box
                                sx={{
                                    backgroundColor: "white",
                                    borderRadius: "50%",
                                    width: 30,
                                    height: 30,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Icon
                                    icon="formkit:arrowright"
                                    style={{ fontSize: "0.9rem", color: "black" }}
                                />
                            </Box>
                        }
                    >
                        Contact
                    </Button>
                </Toolbar>
            </AppBar>
        </>
    );
}