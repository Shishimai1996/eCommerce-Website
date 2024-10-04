"use client";

import { Box, MenuItem, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { TCountry, countries } from "@/countryData";

export const OrderForm = () => {
  const [selectedCountry, setSelectedCountry] = useState<TCountry | null>(null);
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
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);

  const handleChangeFirstName = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event?.target.value;
    setFirstName(value);
    if (value.trim() === "") {
      setFirstNameError(true);
    } else {
      setFirstNameError(false);
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
          <TextField
            variant="outlined"
            required
            error={firstNameError}
            onChange={handleChangeFirstName}
            value={firstName}
            helperText={firstNameError ? "First name is required." : ""}
          />
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
          value={selectedCountry ? selectedCountry.countryName : ""}
          onChange={handleCountryChange}
        >
          {countries.length > 0 ? (
            countries.map((country) => (
              <MenuItem key={country.countryName} value={country.countryName}>
                {country.countryName}
              </MenuItem>
            ))
          ) : (
            <MenuItem disabled>No countries available</MenuItem>
          )}
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
          onChange={(e) => setSelectedProvince(e.target.value)}
          disabled={!selectedCountry}
          value={selectedProvince || ""}
          helperText={
            !selectedCountry
              ? "Please select your country."
              : selectedCountry.province.length === 0
              ? "No provinces available for the selected country"
              : ""
          }
        >
          {selectedCountry && selectedCountry.province.length > 0 ? (
            selectedCountry.province.map((prov) => (
              <MenuItem key={prov} value={prov}>
                {prov}
              </MenuItem>
            ))
          ) : (
            <MenuItem disabled>
              {selectedCountry ? "No provinces available" : "Select a country"}
            </MenuItem>
          )}
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
