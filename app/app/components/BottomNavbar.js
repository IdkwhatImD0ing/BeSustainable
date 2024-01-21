import Link from "next/link";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { AccountCircle, PhotoCamera } from "@mui/icons-material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import styles from "./BottomNavbar.module.css";

const BottomNav = () => {
  return (
    <BottomNavigation
      // showLabels
      // value={value}
      // onChange={(event, newValue) => {
      //   setValue(newValue);
      // }}
      sx={{}}
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        marginBottom: "4%",
      }}
      color="rgba(96, 143, 69, 1)"
    >
      <Link href="/">
        <BottomNavigationAction
          style={{ margin: "0 20px" }}
          label="Home"
          icon={<HomeIcon style={{ color: "rgba(96, 143, 69, 1)" }} />}
        />
      </Link>
      <Link href="/camera">
        <BottomNavigationAction
          style={{ margin: "0 20px" }}
          label="Camera"
          icon={<PhotoCamera style={{ color: "rgba(96, 143, 69, 1)" }} />}
        />
      </Link>
      <Link href="/profile">
        <BottomNavigationAction
          style={{ margin: "0 20px" }}
          label="Profile"
          icon={<AccountCircleIcon style={{ color: "rgba(96, 143, 69, 1)" }} />}
        />
      </Link>
    </BottomNavigation>

    // <BottomNavigation
    //   // showLabels
    //   //value={value}
    //   // onChange={(event, newValue) => {
    //   //   setValue(newValue);
    //   // }}
    //   style={{ position: "fixed", bottom: 0, width: "100%" }}
    // >
    //   <nav className={styles.navbar}>
    //     <Link href="/">
    //       <BottomNavigationAction icon={<HomeIcon />} />
    //     </Link>
    //     <Link href="/camera">
    //       <BottomNavigationAction icon={<PhotoCamera />} />
    //     </Link>
    //     <Link href="/profile">
    //       {" "}
    //       <BottomNavigationAction icon={<AccountCircleIcon />} />
    //     </Link>
    //   </nav>
    // </BottomNavigation>
  );
};

export default BottomNav;
