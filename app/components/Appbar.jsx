"use client";
import * as React from 'react';

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';


export default function appbar()
{
    
    return(
        <>
                <Box className="container" sx={{padding:{md:"1% 5%"}}}>

        
<Box sx={{padding:"7px",display:"flex",justifyContent:"space-between",backgroundColor:"black",borderRadius:"50px"}} >

     <Box component={Button} sx={{padding:"0px",height:{xs:"20px",sm:"50px",md:"50px"},width:{xs:"15px",sm:"80px",md:"120px"},borderRadius:"60px",color:"white",'&:hover': { backgroundColor: "#FD853A"}}} ><Typography sx={{fontSize:{xs:"10px",sm:"12px",md:"16px"}}} >HOME</Typography></Box>
     <Box component={Button} sx={{display:{xs:"inline-block",sm:"none"},padding:"0px",borderRadius:"100px",color:"white",backgroundColor:"#FD853A"}}> <Typography sx={{fontSize:{xs:"10px",sm:"12px",md:"16px"}}}>MH</Typography></Box>
     <Box component={Button} sx={{padding:"0px",height:{xs:"20px",sm:"50px",md:"50px"},width:{xs:"15px",sm:"80px",md:"120px"},borderRadius:"60px",color:"white",'&:hover': { backgroundColor: "#FD853A"}}}> <Typography sx={{fontSize:{xs:"10px",sm:"12px",md:"16px"}}}>ABOUT</Typography></Box>

    

     <Box component={Button} sx={{display:{xs:"none",sm:"inline-block"},height:{xs:"20px",sm:"50px",md:"50px"},width:{xs:"15px",sm:"80px",md:"120px"},marginRight:"0px",borderRadius:"60px",color:"white",'&:hover': { backgroundColor: "#FD853A"}}}> <Typography sx={{fontSize:{xs:"5px",sm:"12px",md:"16px"}}}>SERVICE</Typography></Box>
   
     
     <Box component={Button} sx={{display:{xs:"none",sm:"inline-block"},height:{xs:"20px",sm:"50px",md:"50px"},width:{xs:"15px",sm:"80px",md:"120px"},padding:"0px",borderRadius:"100px",color:"white",backgroundColor:"#FD853A"}}> <Typography sx={{fontSize:{xs:"5px",sm:"12px",md:"16px"}}}>MH</Typography></Box>

     <Box component={Button} sx={{display:{xs:"none",sm:"inline-block"},height:{xs:"20px",sm:"50px",md:"50px"},width:{xs:"15px",sm:"80px",md:"120px"},marginLeft:"0px",borderRadius:"60px",color:"white",'&:hover': { backgroundColor: "#FD853A"}}}><Typography sx={{fontSize:{xs:"5px",sm:"12px",md:"16px"}}}>RESUME</Typography></Box>
     <Box component={Button} sx={{display:{xs:"none",sm:"inline-block"},height:{xs:"20px",sm:"50px",md:"50px"},width:{xs:"15px",sm:"80px",md:"120px"},padding:"0px",borderRadius:"60px",color:"white",'&:hover': { backgroundColor: "#FD853A"}}}> <Typography sx={{fontSize:{xs:"5px",sm:"12px",md:"16px"}}}>PROJECT</Typography></Box>
     <Box component={Button} sx={{display:{xs:"none",sm:"inline-block"},height:{xs:"20px",sm:"50px",md:"50px"},width:{xs:"15px",sm:"80px",md:"120px"},padding:"0px",borderRadius:"60px",color:"white",'&:hover': { backgroundColor: "#FD853A"}}}> <Typography sx={{fontSize:{xs:"5px",sm:"12px",md:"16px"}}}>CONTACT</Typography></Box>
   </Box>
   </Box>

       
        </>
    );


}