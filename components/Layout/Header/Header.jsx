import Link from "next/link";
import classes from "./header.module.css";

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <Link href={"/"}>
                    <a>Dj Events</a>
                </Link>
            </div>

            <nav>
                <ul>
                    <li><Link href={"/events"}>Events</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;