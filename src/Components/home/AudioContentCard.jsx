import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {MicIcon} from '../../assets/icons/MicIcon'
import Price from "../share/price";
import bookPic from '../../assets/images/book.png' ;
const AudioContentCard = ()=>{
    return(
        <Box sx={{backgroundColor : '#fff',  borderRadius : 6 , width : '100%' , display : 'flex'}}>
           <Box sx={{width : '80%' , p : 4 }}>
               <Box display={'flex'} alignItems={'center'} gap={1} sx={{mb : 2}}>
                   <MicIcon/>
                   <Box>
                       <Typography variant={'body1'}>نام محتوا صوتی</Typography>
                       <Typography variant={'subtitle2'} sx={{color : '#aaa'}}>علیرضا قاسمی</Typography>
                   </Box>
               </Box>
               <Box display={'flex'} alignItems={'center'} gap={1}>
                   <Box sx={{p : .5 , borderRadius : 4 , backgroundColor : '#B6BDC7' , width : 60 , height : 27 ,  display : 'flex' , justifyContent : 'center' , alignItems : 'center'}}>
                       <Typography variant={'caption'} color={'white'} fontWeight={'bold'}>
                           10:20
                       </Typography>
                   </Box>
                   <Box sx={{p : .5 , borderRadius : 4 , backgroundColor : '#FF435D' , width : 60 , height : 27 ,  display : 'flex' , justifyContent : 'center', alignItems : 'center'}}>
                       <Typography variant={'caption'} color={'white'} fontWeight={'bold'}>
                           20%
                       </Typography>
                   </Box>
                   <Box sx={{ml : 2}}>
                       <Price/>
                   </Box>
               </Box>
           </Box>
            <Box sx={{width : '20%' , py : 2}}>
                <img style={{width : '100%'}} src={bookPic.src} alt=""/>
            </Box>
        </Box>
    )
}
export default AudioContentCard