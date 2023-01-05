import React from "react";
import styles from "./Header.module.scss";
import {
  Badge,
  Box,
  Card,
  Container,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
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
import MenuHeader from "../MenuList/MenuHeader";
import newLogo from "../../assets/images/newLogo.png";
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
          <Box className={styles.menuHeader} sx={{ paddingInline: 5 }}>
            <Grid container className={styles.menuHeaderGrid}>
              <div className={styles.imagediv}>
                <Image src={newLogo} alt="logo" />
              </div>

              <MenuHeader />

              <div className={styles.actionButtons}>
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
              </div>
            </Grid>
          </Box>
          <div className={styles.curvedcornertopright}></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
