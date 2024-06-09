import withLayoutBasic from "@/libs/commponents/layout/LayoutBasic";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";


const AgentList: NextPage = () => {
    console.log("COMMUNITY COMPONENT - PAGES ROUTER");
    const [title, setTitle] = useState<String>("hello");
    return (
        <div style={{margin: "20px 0"}}>
        <Stack>AgentList</Stack>
      </div>
      )  
};

export default withLayoutBasic( AgentList);