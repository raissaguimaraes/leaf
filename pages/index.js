import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Form from '../components/molecules/form';
import { Box } from '@mui/material';
import Fade from '@mui/material/Fade';


export default function Home() {

  return (
    <Container component="main" maxWidth="xs" >
        <CssBaseline />
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Box sx={{ paddingTop:"15px"}}>
          {/*eslint-disable-next-line @next/next/no-img-element*/}
          <img src="/LeafMainLogoWhite.png" width="40px" height="100%" paddingtop="20px" alt="logo"/>
        </Box>
        
          <Form />
      </Grid>
    </Container>
  )
}
