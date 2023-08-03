import React from "react";
import Box from "@mui/material/Box";
import {Button, Container, Grid} from "@mui/material";
import headerBanner from '../src/assets/images/headerBanner.png' ;
import phoneImage from '../src/assets/images/phone.png' ;
import Typography from "@mui/material/Typography";
import AudioContentCard from "../src/Components/home/AudioContentCard";
import {PlayIcon} from "../src/assets/icons/PlayIcon";
import DiscountedCard from "../src/Components/home/DiscountedCard";

const specialDataDummy = [phoneImage, phoneImage, phoneImage, phoneImage]
const index = () => {
    return (
        <Container maxWidth={'xl'} sx={{width: '100%', backgroundColor: '#fff', mt: 10}}>
            <Box sx={{py: 5}}>
                <img style={{width: '100%'}} src={headerBanner.src} alt=""/>
            </Box>
            <Box sx={{mb: 10, display: "flex", justifyContent: 'space-between'}}>
                <Box>
                    <Typography component={'span'}><Typography component={'span'}
                                                               fontWeight={'bold'}>محصولات</Typography> تخفیف
                        ویژه</Typography>
                    <Typography sx={{color: '#aaa', mt: 1}}>special products</Typography>
                </Box>
                <Box sx={{
                    cursor: 'pointer',
                    border: '2px solid #eee',
                    borderRadius: 4,
                    display: 'flex',
                    alignItems: 'center',
                    px: 2
                }}><Typography sx={{color: '#aaa'}}>مشاهده بیشتر</Typography></Box>
            </Box>
            <Grid sx={{mb: 2}} container justifyContent={'space-between'}>
                <Grid sx={{boxShadow: '0 8px 50px rgba(0,0,0,5%)'}} item xs={4}>
                    <DiscountedCard />
                </Grid>
                {
                    specialDataDummy.map((item) => {
                        return (
                            <Grid sx={{boxShadow: '0 8px 50px rgba(0,0,0,5%)'}} item xs={1.9}>
                                <img style={{width : '100%'}} src={item.src} alt=""/>
                            </Grid>
                        )
                    })
                }
            </Grid>
            <Grid sx={{backgroundColor : '#EDF4F7' , borderRadius : 4 , my : 10 , justifyContent : 'space-between ' , position : 'relative',  py : 12 , px : 2}} rowGap={5} container>
            <Box sx={{position : 'absolute' , left : 20 , top : '-35px'}}>
                <Typography sx={{p : 2 , width : 300,backgroundColor : '#fff' , display : 'flex' , alignItems : 'center' , justifyContent : 'center' , gap : .5}} variant={'h6'} borderRadius={20} textAlign={'center'}><PlayIcon/> آخرین محتوای صوتی</Typography>
            </Box>
                <Grid xs={3.8} sx={{boxShadow: '0 8px 50px rgba(0,0,0,5%)'}}>
                    <AudioContentCard/>
                </Grid>
                <Grid xs={3.8} sx={{boxShadow: '0 8px 50px rgba(0,0,0,5%)'}}>
                    <AudioContentCard/>
                </Grid>
                <Grid xs={3.8} sx={{boxShadow: '0 8px 50px rgba(0,0,0,5%)'}}>
                    <AudioContentCard/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default index;
