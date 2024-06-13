
import withLayoutMain from "@/libs/commponents/layout/LayoutHome";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TrandProperties from "@/libs/commponents/homepage/TrendProperties";
import PopularProperties from "@/libs/commponents/homepage/PopularProperties";
import Advertisement from "@/libs/commponents/homepage/Advertisement";
import TopAgents from "@/libs/commponents/homepage/TopAgents";
import TopProperties from "@/libs/commponents/homepage/TopProperties";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";

const Home: NextPage = () => {
  const device = useDeviceDetect();

  if(device === "mobile") {
    return <Stack>HOMEPAGE MOBILE</Stack>
  } else {
    return (
      <Stack className={"home-page"}>
        <TrandProperties/>
        <PopularProperties/> 
        <Advertisement/>
        <TopProperties/>
        <TopAgents/>
      </Stack>
  );
  }
  
};

export default withLayoutMain(Home);
