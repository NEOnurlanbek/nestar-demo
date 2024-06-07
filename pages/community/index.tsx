import withLayoutBasic from "@/libs/commponents/layout/LayoutBasic";
import { NextPage } from "next";
import { useState } from "react";


const Community: NextPage = () => {
    console.log("COMMUNITY COMPONENT - PAGES ROUTER");
    const [title, setTitle] = useState<String>("hello");
    return (
    <div>
        Comunity {" "} 
        <button onClick={()=> alert("Hello MIT")} style={{ margin: "15px"
    }}>PressMe</button></div>) 
    
};

export default withLayoutBasic( Community);