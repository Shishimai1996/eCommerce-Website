"use client";

import { TProduct } from "@/productData";
import { Box, Divider, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export const ProductDescription: React.FC<{ product: TProduct }> = ({
  product,
}) => {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.BaseSyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Divider />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="disabled tabs"
          sx={{ justifyContent: "center" }}
        >
          <Tab label="Description" {...a11yProps(0)} />
          <Tab label="Additional Information" {...a11yProps(1)} />
          <Tab label={`Reviews[${product?.review.length}]`} {...a11yProps(2)} />
        </Tabs>
        <CustomTabPanel value={value} index={0}>
          <Typography variant="body3" color="primary.light">
            {product?.description}
          </Typography>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Typography variant="body3" color="primary.light">
            {product?.info}
          </Typography>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          {product?.review.map((item, index) => (
            <Typography variant="body3" color="primary.light" key={index}>
              {item}
              <br />
            </Typography>
          ))}
        </CustomTabPanel>
      </Box>
    </>
  );
};
