import withLayoutBasic from "@/libs/commponents/layout/LayoutBasic";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";


const CS: NextPage = () => {
    console.log("COMMUNITY COMPONENT - PAGES ROUTER");
    const [title, setTitle] = useState<String>("hello");
    return (
        <div style={{margin: "20px 0"}}>
        <Stack>CS</Stack>
      </div>
      )  
};

export default withLayoutBasic( CS );