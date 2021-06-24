import Header from "./Header/Header";
import classes from "./layout.module.css";
import Footer from "./Footer/Footer";
import Hero from "../Hero/Hero";
import {useRouter} from "next/router";

const Layout = ({children}) => {
    const router = useRouter();
    console.log(router)
    return (
        <>
            <Header />
            {router.pathname === "/" && <Hero/>}
            <main className={classes.container}>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;