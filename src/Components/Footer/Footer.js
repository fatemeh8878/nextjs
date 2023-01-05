import React from "react";
import {
  Grid,
  Typography,
  Divider,
  List,
  ListItem,
  TextField,
  OutlinedInput,
  InputAdornment,
  Button,
} from "@mui/material";
import styles from "./Footer.module.scss";
import Image from "next/image";
import etemad from "../../assets/images/etemad.png";
import elect from "../../assets/images/elect.png";
import work from "../../assets/images/work.png";
import blog from "../../assets/images/blog.png";
import footerTopIcon from "../../assets/images/footerTopIcon.png";
import { FiCheck } from "react-icons/fi";
const Footer = () => {
  return (
    <div className={styles.root}>
      <div className={styles.curveLogoContainer}>
        <div className={styles.curveLogo}>
          <div className={styles.shape}>
            <Image src={footerTopIcon} layout="fill" />
          </div>
        </div>
        <div className={styles.curverLeft}></div>
      </div>
      <Grid container className={styles.container}>
        <Grid item xs={10}>
          <Grid container className={styles.footerList}>
            <Grid item xs={8}>
              <Grid container>
                <Grid item xs={4}>
                  <span className={styles.line}></span>
                  <Typography className={styles.listTitle}>
                    پیوند <span style={{ fontSize: 20 }}>سریع</span>
                  </Typography>
                  <div>
                    <List className={styles.list}>
                      <ListItem>
                        <a href="#">لینک مورد نظر برای نمایش</a>
                      </ListItem>
                      <ListItem>
                        <a href="#">لینک مورد نظر برای نمایش</a>
                      </ListItem>
                      <ListItem>
                        <a href="#">لینک مورد نظر برای نمایش</a>
                      </ListItem>
                      <ListItem>
                        <a href="#">لینک مورد نظر برای نمایش</a>
                      </ListItem>
                    </List>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <span className={styles.line}></span>

                  <Typography className={styles.listTitle}>
                    نقشه <span style={{ fontSize: 20 }}>سایت</span>
                  </Typography>
                  <div>
                    <List className={styles.list}>
                      <ListItem>
                        <a href="#">لینک مورد نظر برای نمایش</a>
                      </ListItem>
                      <ListItem>
                        <a href="#">لینک مورد نظر برای نمایش</a>
                      </ListItem>
                      <ListItem>
                        <a href="#">لینک مورد نظر برای نمایش</a>
                      </ListItem>
                      <ListItem>
                        <a href="#">لینک مورد نظر برای نمایش</a>
                      </ListItem>
                    </List>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <span className={styles.line}></span>

                  <Typography className={styles.listTitle}>
                    آخرین <span style={{ fontSize: 20 }}>وبلاگ</span>
                  </Typography>
                  <div>
                    <List className={styles.list}>
                      <ListItem>
                        <a href="#">لینک مورد نظر برای نمایش</a>
                      </ListItem>
                      <ListItem>
                        <a href="#">لینک مورد نظر برای نمایش</a>
                      </ListItem>
                      <ListItem>
                        <a href="#">لینک مورد نظر برای نمایش</a>
                      </ListItem>
                      <ListItem>
                        <a href="#">لینک مورد نظر برای نمایش</a>
                      </ListItem>
                    </List>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item style={{ marginRight: "-9%" }} xs={4}>
              <div className={styles.blog}>
                <Grid container>
                  <Grid item xs={4} style={{ marginTop: "30px" }}>
                    <Image src={blog} width="80px" height="80px" />
                  </Grid>
                  <Grid item xs={8}>
                    <Grid
                      container
                      style={{ marginRight: "-15%", marginTop: "5%" }}
                    >
                      <Grid item xs={6}>
                        <Typography style={{ color: "#fff" }}>
                          خبرنامه{" "}
                          <span style={{ fontSize: 20 }}>آگاه باشیم </span>
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <div
                          style={{
                            background: "#f4c63d",
                            marginTop: "5%",
                            marginRight: "25% !important",
                            borderRadius: 5,
                            width: 120,
                            padding: 5,
                            textAlign: "center",
                            borderTopRightRadius: "unset !important",
                          }}
                        >
                          <Typography>
                            212,000 <span>عضو</span>
                          </Typography>
                        </div>
                        <div className={styles.curvedcornertopleft}></div>
                      </Grid>
                      <Grid item xs={12} className={styles.inputForm}>
                        <OutlinedInput
                          className={styles.input}
                          placeholder="ایمیل خود را وارد کنید"
                          inputProps={{
                            sx: {
                              "&::placeholder": {
                                fontSize: 13,

                                color: "#fff",
                              },
                            },
                          }}
                          id="outlined-adornment-password"
                          endAdornment={
                            <InputAdornment position="end">
                              <Button className={styles.iconSearch}>
                                <FiCheck />
                              </Button>
                            </InputAdornment>
                          }
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid item xs={12}>
              <Divider className={styles.divider} />
              <Typography style={{ color: "#fff", fontSize: 10 }}>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2} className={styles.permissions}>
          <Grid container className={styles.imageGroup}>
            <Grid item xs={12}>
              <Typography className={styles.title}>
                مجوز<span style={{ fontSize: 20 }}>ها</span>
              </Typography>
            </Grid>
            <Grid item xs={12} className={styles.images}>
              <div className={styles.image1}>
                <div>
                  <Image src={etemad} alt="etemad" />
                  <div className={styles.curvedcornertopright}></div>
                </div>
              </div>
              <div className={styles.image2}>
                <Image src={work} alt="work" />
              </div>
              <div className={styles.image3}>
                <Image src={elect} alt="elect" />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div className={styles.footer}>2</div>
    </div>
  );
};

export default Footer;
