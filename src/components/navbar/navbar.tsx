import { AppBar, Box, Button, Toolbar } from "@mui/material";
import logo from '../../assets/logo.png'
import { NavLink, useNavigate } from "react-router-dom";
import { Icon } from '@iconify/react';
import { useEffect, useState } from "react";


export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            // Show blurred background if user scrolls more than 20px
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (<>
        <AppBar position="fixed" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
            <Toolbar sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                py: 1,
                m: 3,
                borderRadius: 10,
                transition: "all 0.3s ease-in-out",
                backgroundColor: scrolled ? "rgba(255, 255, 255, 0.4)" : "transparent",
                backdropFilter: scrolled ? "blur(8px)" : "none",
                boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.1)" : "none",
            }}>
                <Box component={'img'} src={logo} alt="logo" width={100} ></Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 5,
                        width: "auto",
                        py: 2,
                        px: 3,
                        borderRadius: 4,
                        border: '1px solid #EBF8FF',
                        backgroundColor: 'rgba(255, 255, 255, 0.4)',    // very transparent
                        backdropFilter: "blur(15px)",                   // blur the background behind it
                        boxShadow: "16.44px 17.09px 65.75px 0px rgba(41, 95, 131, 0.08)",
                        fontFamily: 'Outfit, sans-serif',
                    }}
                >
                    <NavLink to={'/'} className={({ isActive }) => isActive ? 'navLink active' : 'navLink'}>Home</NavLink >
                    <NavLink to={'/about'} className={({ isActive }) => isActive ? 'navLink active' : 'navLink'}>About Us</NavLink >
                    <NavLink to={'/services'} className={({ isActive }) => isActive ? 'navLink active' : 'navLink'}>Services</NavLink >
                    <NavLink to={'/blog'} className={({ isActive }) => isActive ? 'navLink active' : 'navLink'}>Blogs</NavLink >
                </Box>
                <Button
                    variant="contained"
                    size="large"
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
                    onClick={() => navigate('/contact')}

                >
                    Contact Us
                </Button>
            </Toolbar>
        </AppBar>
    </>);
}