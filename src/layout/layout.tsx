import Navbar from "../components/navbar/navbar";
import NavMini from "../components/navbar/nav-mini";
import Footer from "../components/footer/footer";
import { Outlet } from "react-router-dom";
import { Box, useMediaQuery } from "@mui/material";
import { useState } from "react";
import DrawerMini from "../components/drawer-mini";


export default function Layout() {
    const [open, setOpen] = useState(false);

    const isMobile = useMediaQuery('(max-width:768px)'); // breakpoint for mobile

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    return (
        <>
            <Box sx={{ width: '100%', overflowX: 'hidden' }}>
                {isMobile ? <NavMini sOpen={setOpen} /> : <Navbar />}
                <Box sx={{ width: '100%', mt: "8rem" }}>
                    <Outlet />
                    <DrawerMini open={open} togglerDrawer={toggleDrawer} />
                </Box>
                <Footer />
            </Box>

        </>
    );
}
