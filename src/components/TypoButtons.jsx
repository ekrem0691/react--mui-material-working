import { Box, Button, Container, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete"


const TypoButtons = () => {
  return (
    <div>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          component="h6"
          align="center"
          color="error"
          sx={{ background: "#bbbb", mt: 4, border: "1px solid black " }}
        >
          Typograph, Button, Container
        </Typography>
        <Typography variant="body2" align="justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
          illo perspiciatis quam! Atque, ducimus animi. Culpa quam, minima quia
          reprehenderit dicta perspiciatis officiis odio doloribus natus libero
          qui praesentium quo!{" "}
        </Typography>
        <Typography
          variant="button"
          align="justify"
          color="secondary"
          sx={{ display: "inline-block", mt: 4 }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
          illo perspiciatis quam! Atque, ducimus animi. Culpa quam, minima quia
          reprehenderit dicta perspiciatis officiis odio doloribus natus libero
          qui praesentium quo!{" "}
        </Typography>
      </Container>
      <Container maxWidth="md">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
            // alignItems: "center",
          }}
        >
          <Button variant="contained" color="secondary">
            Clıck
          </Button>
          <Button variant="outlined" color="success" startIcon= {<SendIcon/>} >
            Send
          </Button>
          <Button variant="contained" color="error" endIcon= {<DeleteIcon/>} >
            Delete
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default TypoButtons;
