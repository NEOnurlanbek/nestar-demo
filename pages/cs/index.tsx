import withLayoutBasic from "@/libs/commponents/layout/LayoutBasic";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";


const CS: NextPage = () => {
    console.log("COMMUNITY COMPONENT - PAGES ROUTER");
    const [title, setTitle] = useState<String>("hello");
    const device = useDeviceDetect();

    if(device === "mobile") {
      return <Stack>CS MOBILE</Stack>
    } else {
    return (
        <div style={{margin: "20px 0"}}>
        <Stack>CS</Stack>
      </div>
      )
    }  
};

export default withLayoutBasic( CS );