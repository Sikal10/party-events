import classes from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <p>Copyright &copy; Party Events 2021</p>
            <p className={classes.about}><Link href={"/about"}>About this project</Link></p>
        </footer>
    );
};

export default Footer;