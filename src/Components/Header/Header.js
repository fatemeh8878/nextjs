import React from "react";
import styles from "./Header.module.scss";
import {
  Paper,
  Card,
  Grid,
  Container,
  TextField,
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Typography,
  Badge,
} from "@mui/material";
import {
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiPhoneCall,
  FiMail,
  FiGrid,
} from "react-icons/fi";
import { Button } from "@mui/material";
import MenuHeader from "../MenuList/MenuHeader"
import logo from "../../assets/images/logo.png";
import Image from "next/image";

const Header = () => {
  return (
    <div className={styles.root}>
      <div>
        <div style={{ height: 60 }} className={styles.nav}>
          <Grid container>
            <Grid item xs={6}>
              <FormControl className={styles.formSearch} variant="outlined">
                <OutlinedInput
                  className={styles.input}
                  placeholder="نام محصول مورد نظر خود را جستجو کنید..."
                  inputProps={{
                    sx: {
                      "&::placeholder": {
                        opacity: 1,
                        fontSize: 13,

                        color: "#fff",
                      },
                    },
                  }}
                  id="outlined-adornment-password"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton className={styles.iconSearch}>
                        <FiSearch />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <div className={styles.emailForm}>
                <Typography className={styles.email}>
                  <span>info</span>
                  @website.com
                  <FiMail />
                </Typography>
                <span></span>
                <Typography className={styles.phone}>
                  <span>021</span>
                  8889330
                  <FiPhoneCall />
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className={styles.shadow}></div>
        <div className={styles.header}>
          <div className={styles.menuHeader}>
            <Grid container>
              <Grid item xs={3}>
                <div className={styles.imagediv}>
                  <Image src={logo} alt="logo" />
                </div>
              </Grid>
              <Grid item xs={6}>
                <MenuHeader />
              </Grid>
              <Grid item xs={3} className={styles.buttonGroup}>
                <div className={styles.groupButton}>
                  <Button>
                    دسته بندی
                    <FiGrid />
                  </Button>
                </div>
                <div className={styles.buttonLogin}>
                  <Button>
                    <FiUser />
                    عضویت / ورود
                  </Button>
                </div>
                <div className={styles.buttonCart}>
                  <Button>
                    <FiShoppingCart />
                  </Button>
                </div>
              </Grid>
            </Grid>
          </div>
          <div className={styles.curvedcornertopright}></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
