import withLayoutBasic from "@/libs/commponents/layout/LayoutBasic";
import Filter from "@/libs/commponents/property/Filter";
import PropertyCard from "@/libs/commponents/property/PropertyCard";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { Box, Button, Pagination, Stack, Typography } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";

const PropertyList: NextPage = () => {
  const [properties, setProperties] = useState<number[]>([1, 2, 3, 4, 5, 6]);
  return (
    <div id='property-list-page' style={{ position: "relative" }}>
      <Stack className='container'>
        <Box className='right'>
          <span>Sort by</span>
          <div>
            <Button endIcon={<KeyboardArrowDownRoundedIcon />}>New</Button>
          </div>
        </Box>
        <Stack className='property-page'>
          <Stack className='filter-config'>
            {" "}
            <Filter />{" "}
          </Stack>
          <Stack className='main-config' mb={"76px"}>
            <Stack className='list-config'>
              {properties.map((properyt, index) => {
                return <PropertyCard key={index} />;
              })}
            </Stack>
            <Stack className='pagination-config'>
              <Stack className='pagination-box'>
                <Pagination page={1} count={5} shape='circular' color='primary' />
              </Stack>
              <Stack className='total-result'>
                <Typography>Total 6 properties available</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default withLayoutBasic(PropertyList);