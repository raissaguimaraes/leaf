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
import PublishUserCNChart from '../components/molecules/publishUserCNChart';
import PublishUserJOChart from '../components/molecules/publishUserJOChart';
import PublishUserTrimbleChart from '../components/molecules/publishUserTrimbleChart';
import PublishUserCFVChart from '../components/molecules/publishUserCFVChart';
import NumberOfNotifications from '../components/molecules/numberOfNotifications';
import OperationsProcessingMemoryChart from '../components/molecules/operationsProcessingMemoryChart';
import OperationsProcessingCPU from '../components/molecules/operationsProcessingCPU';


function Dashboard({data}){

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
                {/*eslint-disable-next-line @next/next/no-img-element*/}
                <img src="/LeafMainLogo.png" width="40px" alt="logo" />
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
                    height: 300,
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
                    <PublishUserCNChart />
                </Card>
              </Grid>
            
              <Grid item xs={12} md={4} lg={3}>
                <Card
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      height: 300,
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
                  <PublishUserJOChart />
                </Card>
              </Grid>

              <Grid item xs={12} md={4} lg={3}>
                <Card
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      height: 300,
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
                  <PublishUserTrimbleChart />
                </Card>
              </Grid>

              <Grid item xs={12} md={4} lg={3}>
                <Card
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      height: 300,
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
                  <PublishUserCFVChart />
                </Card>
              </Grid>

              <Grid item xs={12} md={4} lg={3}>
                <Card
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      height: 300,
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
                 <OperationsProcessingCPU />
                </Card>
              </Grid>
            
            
              <Grid item xs={12} md={4} lg={3}>
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: 300,
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
                  <OperationsProcessingMemoryChart />
                </Card>
              </Grid>

              <Grid item xs={12} md={4} lg={6}>
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: 300,
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
                    <NumberOfNotifications />
                </Card>
              </Grid>

            </Grid>
            
          </Container>
        </Box>
      </Box>
    )
}


export default Dashboard;