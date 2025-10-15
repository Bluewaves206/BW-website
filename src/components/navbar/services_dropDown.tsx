import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import CRMImg from "../../assets/CRMNav.png";
import WPImg from "../../assets/WhatsAppNav.png";
import BmImg from "../../assets/BMail.png";
import VMIMG from "../../assets/VmsgNav.png";
import SMSImg from "../../assets/smsNav.png";
import WebDevImg from "../../assets/webdevImg.png";
import IVRImg from "../../assets/IVRNav.png";


export default function ServicesDropDown() {
    const [hoverItem, setHoverItem] = useState<number>(0);
    const Services = [
        {
            name: "WhatsApp Verified",
            link: "/whatsapp",
            about: {
                head: `“WhatsApp Verified”`,
                body: "Manage clients, track sales, and grow your business — all in one powerful platform.",
                foot: "All-in-one CRM with powerful features made simple and affordable. Try it today and unlock exclusive offers!"
            },
            img: WPImg
        },
        {
            name: "Voice Message",
            link: "/Vmsg",
            about: {
                head: `“Voice Messaging”`,
                body: "Manage clients, track sales, and grow your business — all in one powerful platform.",
                foot: "All-in-one CRM with powerful features made simple and affordable. Try it today and unlock exclusive offers!"
            },
            img: VMIMG
        },
        {
            name: "Voice Mail",
            link: "/Vmail",
            about: {
                head: `“Voice Mail”`,
                body: "Manage clients, track sales, and grow your business — all in one powerful platform.",
                foot: "All-in-one CRM with powerful features made simple and affordable. Try it today and unlock exclusive offers!"
            },
            img: BmImg
        },
        {
            name: "Bulk Mail",
            link: "/Bmail",
            about: {
                head: `“Bulk Mail”`,
                body: "Manage clients, track sales, and grow your business — all in one powerful platform.",
                foot: "All-in-one CRM with powerful features made simple and affordable. Try it today and unlock exclusive offers!"
            },
            img: BmImg
        },
        {
            name: "Website Development",
            link: "/webDev",
            about: {
                head: `“Web Dev”`,
                body: "Manage clients, track sales, and grow your business — all in one powerful platform.",
                foot: "All-in-one CRM with powerful features made simple and affordable. Try it today and unlock exclusive offers!"
            },
            img: WebDevImg
        },
        {
            name: "CRM",
            link: "/crm",
            about: {
                head: `“CRM”`,
                body: "Manage clients, track sales, and grow your business — all in one powerful platform.",
                foot: "All-in-one CRM with powerful features made simple and affordable. Try it today and unlock exclusive offers!"
            },
            img: CRMImg
        },
        {
            name: "IVR",
            link: "/whatsapp",
            about: {
                head: `“IVR”`,
                body: "Manage clients, track sales, and grow your business — all in one powerful platform.",
                foot: "All-in-one CRM with powerful features made simple and affordable. Try it today and unlock exclusive offers!"
            },
            img: IVRImg
        },
        {
            name: "SMS",
            link: "/sms",
            about: {
                head: `SMS`,
                body: "Manage clients, track sales, and grow your business — all in one powerful platform.",
                foot: "All-in-one CRM with powerful features made simple and affordable. Try it today and unlock exclusive offers!"
            },
            img: SMSImg
        },
    ]
    return (
        <Box sx={{ height: "450px", backgroundColor: 'white', width: "100%", position: "fixed", zIndex: 2, borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}

        >
            <Box sx={{
                mt: "8rem", px: 4,
                py: 2,
                display: "grid",
                gridTemplateColumns: "35% 65%;", /* First smaller, second larger */
                gap: "20px",
                height: "70%"
            }}>

                <Box sx={{
                    height: "100%", p: 2,
                    display: "grid",
                    gridTemplateRows: "repeat(auto-fill, minmax(40px, 1fr))", // each item height
                    gridAutoFlow: "column", // fill column first
                    rowGap: 1,
                    borderRight: "3px solid #c2c2c2"

                }}>
                    {Services.map((item, index) => (
                        <NavLink key={index} to={item.link} className={({ isActive }) => isActive ? 'dropDown-navLink active' : 'dropDown-navLink'} onMouseEnter={() => setHoverItem(index)}>{item.name}</NavLink >
                    ))}

                </Box>
                <Box sx={{
                    height: "100%",
                    display: "grid",
                    p: 2,
                    gridTemplateColumns: "60% 40%;",
                    gap: "10px",
                }}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography sx={{ fontWeight: 600, fontSize: "2.67rem" }}>{Services[hoverItem].about.head}</Typography>
                        <Typography variant="h6" sx={{ fontWeight: 100, color: "#404040" }}>{Services[hoverItem].about.body}</Typography>
                        <Typography sx={{ mt: "auto", color: "#404040" }}>{Services[hoverItem].about.foot}</Typography>
                    </Box>
                    <Box component={'img'} src={Services[hoverItem].img} width={'100%'} height={'250px'} sx={{ objectFit: "cover", borderRadius: 5 }} alt="service"></Box>
                </Box>

            </Box>
        </Box >
    )
}