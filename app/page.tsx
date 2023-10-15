'use client';
import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function Home() {
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");

  

  return (
    <main>
      <Box sx={{ ml: 3, mr:3 }}>
        <Typography variant="h4" sx={{ pb: 1 }}>Steampunk Invoice Generator</Typography>
        <Divider />
        <Box sx={{ pt: 3, pb: 3 }}>
          <TextField 
            id="customer-name" 
            label="Customer Name" 
            variant="outlined" 
            sx={{ pr: 3, width: "45%" }}
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            />
          <TextField 
            id="customer-email" 
            label="Customer Email" 
            variant="outlined" 
            sx={{ width: "45%" }} 
            value={customerEmail}
            onChange={(e) => setCustomerEmail(e.target.value)}
          />
        </Box>
        <Button 
          variant="contained" 
          size="large" 
        >Generate Invoice</Button>
      </Box>
    </main>
  )
}
