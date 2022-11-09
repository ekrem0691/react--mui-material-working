import { Container, TextField, Box, Typography, Button } from "@mui/material";
import React from "react";

const TextFieldComp = () => {
  let error = false;
  return (
    <>
      <Container maxWidth="xs">
        <Typography variant="h4" align="center" mt={10} color="error" >
          Texfield
        </Typography>
        <Box
          sx={{
            mt:4,
            textAlign: "center"
          }}
        >
          <TextField
            margin="normal"
            id="email"
            label="Email"
            type="email"
            placeholder="Enter your Email"
            fullWidth
            error={error}
            helperText={error && "Incorrect Email Format"}
          />
          <TextField
            margin="normal"
            id="password"
            label="Password"
            type="password"
            placeholder="Enter your Password"
            fullWidth
            error={error}
            helperText={error && "Incorrect Password Format"}
          />
          <Button type="submit"  variant="contained" sx={{mt:4}}  >Submit</Button>
        </Box>
      </Container>
    </>
  );
};

export default TextFieldComp;
