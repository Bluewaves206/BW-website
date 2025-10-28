import Navbar from "../components/navbar/navbar";
import NavMini from "../components/navbar/nav-mini";
import Footer from "../components/footer/footer";
import { Outlet } from "react-router-dom";
import { Box, useMediaQuery } from "@mui/material";
import { useRef, useState } from "react";
import DrawerMini from "../components/drawer-mini";
import ServicesDropDown from "../components/navbar/services_dropDown";


export default function Layout() {
    const [open, setOpen] = useState(false);
    const [serviceDrop, setServiceDrop] = useState<boolean>(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const showDropdown = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setServiceDrop(true);
    };
    const hideDropdown = () => {
        timeoutRef.current = setTimeout(() => setServiceDrop(false), 200);
    };


    const isMobile = useMediaQuery('(max-width:1000px)'); // breakpoint for mobile

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    return (
        <>
            <Box sx={{ width: '100%', overflowX: 'hidden' }}>
                {isMobile ? <NavMini sOpen={setOpen} /> : <Navbar showDropdown={showDropdown} hideDropdown={hideDropdown} serviceDrop={serviceDrop} />}
                {serviceDrop &&
                    <Box onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                        <ServicesDropDown />
                    </Box>
                }
                <Box sx={{ width: '100%', mt: "7rem" }}>
                    <Outlet />
                    <DrawerMini open={open} togglerDrawer={toggleDrawer} setOpen={setOpen} />
                </Box>
                <Footer />
            </Box>

        </>
    );
}
