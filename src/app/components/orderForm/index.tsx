"use client";

import { Box, MenuItem, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { TCountry, countries } from "@/countryData";

export const OrderForm = () => {
  const [selectedCountry, setSelectedCountry] = useState<TCountry>(
    countries[0]
  );
  const [selectedProvince, setSelectedProvince] = useState("");
  const handleCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const countrySelect = countries.find(
      (country) => country.countryName === event.target.value
    );
    if (countrySelect) {
      setSelectedCountry(countrySelect);
      setSelectedProvince("");
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3, m: "10%" }}>
      <Typography color="primary.main" variant="h3">
        Billing Details
      </Typography>
      <Box sx={{ display: "flex", gap: 1 }}>
        <Box sx={{ display: "flex", flexDirection: "column", width: "50%" }}>
          <Typography color="primary.main">First Name</Typography>
          <TextField variant="outlined" required />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", width: "50%" }}>
          <Typography color="primary.main">Last Name</Typography>
          <TextField variant="outlined" required />
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Typography color="primary.main">Company Name(Optional)</Typography>
        <TextField variant="outlined" />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Typography color="primary.main">Country / Region</Typography>
        <TextField
          id="outlined-select-currency"
          select
          defaultValue={selectedCountry}
          onChange={handleCountryChange}
          //   helperText="Please select your currency"
        >
          {countries.map((country) => (
            <MenuItem key={country.countryName} value={country.countryName}>
              {country.countryName}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Typography color="primary.main">Street address</Typography>
        <TextField variant="outlined" />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Typography color="primary.main">Town / City</Typography>
        <TextField variant="outlined" />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Typography color="primary.main">Province</Typography>
        <TextField
          id="outlined-select-currency"
          select
          defaultValue={selectedProvince}
          onChange={(e) => setSelectedProvince(e.target.value)}
          //   helperText="Please select your currency"
        >
          {selectedCountry.province.map((prov) => (
            <MenuItem key={prov} value={prov}>
              {prov}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Typography color="primary.main">ZIP code</Typography>
        <TextField variant="outlined" />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Typography color="primary.main">Phone</Typography>
        <TextField variant="outlined" />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Typography color="primary.main">Email address</Typography>
        <TextField variant="outlined" />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <TextField variant="outlined" label="Additional information" />
      </Box>
    </Box>
  );
};
