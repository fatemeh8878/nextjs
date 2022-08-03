import React from "react";
import { Grid, Card, Typography, Button } from "@mui/material";
import SliderCart from "../Slider/SliderCart";
import ActiveLastBreadcrumb from "../Breadcrumbs/Breadcrumbs ";
import styles from "./Cart.module.scss";
import Image from "next/image";
import cartError from "../../assets/images/cart-error.jpg";
function valuetext(value) {
  return `${value}°C`;
}
const Cart = () => {
  return (
    <div>
      <div className={styles.nav}>
        <Grid container>
          <Grid item xs={6}>
            <ActiveLastBreadcrumb />
          </Grid>
          <Grid item xs={6} className={styles.grid}>
            <SliderCart />
          </Grid>
        </Grid>
      </div>
      <div className={styles.cardDiv}>
        <Card className={styles.card}>
          <div style={{ textAlign: "center" }}>
            <Image src={cartError} alt="error" />
            <div style={{ marginTop: -5 }}>
              <Typography style={{ fontSize: 20 }}>
                پرداخت شما <span style={{ color: "#bb1a1a" }}>نا موفق</span> بود
              </Typography>
              <Typography style={{ color: "#b2b2b2", fontSize: 15 }}>
                کد رهگیری:<span>2154000515412</span>
              </Typography>
              <Button
                style={{
                  border: "2px solid #e8ebf1",
                  borderRadius: 10,
                  color: "#aeaeae",
                  marginTop: 15,
                  width: 185,
                }}
              >
                امتحان مجدد
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Cart;
