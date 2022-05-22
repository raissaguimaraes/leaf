import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CardHeader from '@mui/material/CardHeader';
import Card from '@mui/material/Card'
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';


function Dashboard(){

    return(
    <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute">
          <Toolbar
            sx={{
              height: "70px",
              backgroundColor: "#FFFFFF"
            }}
          >
            <Link href="/">
                <img src="/LeafMainLogo.png" width="40px" />
            </Link>
          </Toolbar>
        </AppBar>
        
        <Box
          component="main"
          sx={{
            backgroundColor: "#F5F5F5",
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>

              <Grid item xs={12} md={4} lg={3}>
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                    fontSize: '16px'
                  }}
                >
                <CardHeader
                    action={
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title="Publish User CN"
                    disableTypography={true}
                />
                 {/* <PublishUserCN />*/}
                </Card>
              </Grid>
            
              <Grid item xs={12} md={4} lg={3}>
                <Card
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      height: 240,
                      fontSize: '16px'
                    }}
                  >
                <CardHeader
                    action={
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title="Publish User - Jo"
                    disableTypography={true}
                />
                  {/*<PublishUserJO />*/}
                </Card>
              </Grid>

              <Grid item xs={12} md={4} lg={3}>
                <Card
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      height: 240,
                      fontSize: '16px'
                    }}
                >
                <CardHeader
                    action={
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title="Publish User - Trimble - Error count and success"
                    disableTypography={true}
                />
                  {/*<PublishUserTrimble />*/}
                </Card>
              </Grid>

              <Grid item xs={12} md={4} lg={3}>
                <Card
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      height: 240,
                      fontSize: '16px'
                    }}
                  >
                <CardHeader
                    action={
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title="Publish User - CFV - Error count and success"
                    disableTypography={true}
                />
                  {/*<PublishUserJO />*/}
                </Card>
              </Grid>

              <Grid item xs={12} md={4} lg={3}>
                <Card
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      height: 240,
                      fontSize: '16px'
                    }}
                  >
                <CardHeader
                    action={
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title="Operations Processing - CPUUtilization"
                    disableTypography={true}
                />
                 {/* <OperationProcessingCPU /> */}
                </Card>
              </Grid>
            
            
              <Grid item xs={12} md={4} lg={3}>
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                    fontSize: '16px',
                    alignItems: 'center'
                  }}
                >
                <CardHeader
                    action={
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title="Operations Processing - MemoryUtilization"
                    disableTypography={true}
                />
                 {/*<OperationsProcessingMemory />*/}
                </Card>
              </Grid>

              <Grid item xs={12} md={4} lg={6}>
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                    fontSize: '16px'
                  }}
                >
                <CardHeader
                    action={
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title="Number of Notifications Delivered Sum"
                    disableTypography={true}
                />
                 {/* <NumberOfNotifications />*/}
                </Card>
              </Grid>

            </Grid>
            
          </Container>
        </Box>
      </Box>
    )
}

export default Dashboard;