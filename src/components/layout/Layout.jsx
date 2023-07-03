import { useEffect, useState } from "react"
import Header1 from "../header/Header1"
import DataBg from "./DataBg"


const Layout = ({ headerStyle, footerStyle, headTitle, breadcrumbTitle, children, mainCls }) => {
    const [scroll, setScroll] = useState(0)
    // Moblile Menu
    const [isMobileMenu, setMobileMenu] = useState(false)
    const handleMobileMenu = () => {
        setMobileMenu(!isMobileMenu)
        !isMobileMenu ? document.body.classList.add("mobile-menu-visible") : document.body.classList.remove("mobile-menu-visible")
    }
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
        const WOW = require('wowjs')
        window.wow = new WOW.WOW({
            live: false
        })
        window.wow.init()
    }, [])
    return (
        <>

            {!headerStyle && <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />}
            {headerStyle == 1 ? <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} /> : null}
          
            <DataBg />

            <main className={mainCls ? mainCls : "main-content"}>
                <div className="noise-bg" data-background="/assets/img/bg/noise_bg.png" />
                <div className="main-shape" data-background="/assets/img/images/main_shape.png" />

                {children}
            </main>
        </>
    )
}
export default Layout