import Link from "next/link";
import { Fragment, useState } from "react";
import classes from "./Layout.module.css";
import "bootstrap/dist/css/bootstrap.css";
import Animation from "./Animation";
const Layout = (props) => {
  const [activeLink, setActiveLink] = useState("");
  return (
    <Fragment>
      <div className={classes.nav}>
        <Link
          className={
            activeLink === "home" ? classes.activeNavItem : classes.navItem
          }
          onClick={() => {
            setActiveLink("home");
          }}
          href="/"
        >
          Home
        </Link>
        <Link
          className={
            activeLink === "news" ? classes.activeNavItem : classes.navItem
          }
          onClick={() => {
            setActiveLink("news");
          }}
          href="/news"
        >
          News
        </Link>
        <Link
          className={
            activeLink === "giveaways" ? classes.activeNavItem : classes.navItem
          }
          onClick={() => {
            setActiveLink("giveaways");
          }}
          href="/giveaways"
        >
          Giveaways
        </Link>
      </div>
      <br></br>
      <Animation></Animation>

      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
