import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {MicIcon} from '../../assets/icons/MicIcon'
import Price from "../share/price";
import bookPic from '../../assets/images/book.png' ;
import {Divider, Rating} from "@mui/material";
import {BuyIcon} from "../../assets/icons/Buy";

const DiscountedCard = () => {
    return (
        <Box sx={{backgroundColor: '#fff', borderRadius: 6, width: '100%', display: 'flex' , p : 3}}>
            <Box sx={{width: '80%' , px : 2}}>
                <Typography>AirPods Pro هدفون بی‌ سیم اپل مدل</Typography>
                <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} gap={1} sx={{my: 3}}>
                    <Box sx={{
                        p: .5,
                        borderRadius: 4,
                        backgroundColor: '#FF435D',
                        width: 60,
                        height: 27,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Typography variant={'caption'} color={'white'} fontWeight={'bold'}>
                            20%
                        </Typography>
                    </Box>
                    <Rating name="read-only" value={3} readOnly/>
                </Box>
                <Divider sx={{my: 2}}/>
                <Box display={'flex'} justifyContent={'space-between'}>
                    <Box>
                        <Typography variant={'body1'} fontWeight={'bold'}
                                    color={'primary.main'}>17,000,123,222</Typography>
                        <Typography variant={'caption'} fontWeight={'bold'} color={'primary.main'}>Rial</Typography>
                    </Box>
                    <Box>
                        <Typography sx={{textDecoration: 'line-through'}} variant={'body1'} fontWeight={'bold'}
                                    color={'primary.light'}>17,000,123,222</Typography>
                        <Typography variant={'caption'} fontWeight={'bold'} color={'primary.light'}>Rial</Typography>
                    </Box>
                    <Box sx={{width : 50 , height : 50 , display : 'flex',  alignItems : 'center' , justifyContent : 'center' , borderRadius : 4 , backgroundColor : 'primary.main' , cursor : 'pointer'}}>
                        <BuyIcon/>
                    </Box>
                </Box>
                <Box>

                </Box>
            </Box>
            <Box sx={{width: '20%', py: 2}}>
                <img style={{width: '100%'}} src={bookPic.src} alt=""/>
            </Box>
        </Box>
    )
}
export default DiscountedCard;