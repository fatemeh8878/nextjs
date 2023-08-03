import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {BuyIcon} from "../../assets/icons/Buy";

const Price = ()=>{
    return (
        <Box sx={{display : 'flex' , alignItems : 'center' , gap : 3}}>
            <Box>
                <Typography textAlign={'end'} variant={'body2'}>: price</Typography>
                <Typography variant={'h5'} fontWeight={'bold'} color={'primary.main'}>17,000</Typography>
                <Typography variant={'caption'} fontWeight={'bold'} color={'primary.main'}>Rial</Typography>
            </Box>
            <Box sx={{width : 50 , height : 50 , display : 'flex',  alignItems : 'center' , justifyContent : 'center' , borderRadius : 4 , backgroundColor : 'primary.main' , cursor : 'pointer'}}>
                <BuyIcon/>
            </Box>
        </Box>
    )
}
export default Price ;