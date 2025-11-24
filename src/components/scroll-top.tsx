import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const root = document.querySelector<HTMLElement>("#root");
        const body: HTMLElement = document.body;
        const html = document.documentElement;
        if (!(body && root && html)) return;


        if (pathname === "/blogview") {
            console.log("Pathname changed:", pathname);
            root.style.setProperty("background-color", "white", "important");
            body.style.setProperty("background-color", "white", "important");
            html.style.setProperty("background-color", "white", "important");
        }
        else if (pathname === "/Bmail") {
            root.style.setProperty("background-color", "white", "important");
            body.style.setProperty("background-color", "white", "important");
            html.style.setProperty("background-color", "white", "important");
        }
        else if (pathname === "/sms") {
            root.style.setProperty("background-color", "white", "important");
            body.style.setProperty("background-color", "white", "important");
            html.style.setProperty("background-color", "white", "important");
        }
        else if (pathname === "/") {
            root.style.setProperty("background-color", "white", "important");
            body.style.setProperty("background-color", "white", "important");
            html.style.setProperty("background-color", "white", "important");
        }
        else {
            root.style.setProperty("background-color", "#d4dff0", "important");
            body.style.setProperty("background-color", "#d4dff0", "important");
            html.style.setProperty("background-color", "#d4dff0", "important");
        }
    }, [pathname]);

    return null;
}

export default ScrollToTop;
