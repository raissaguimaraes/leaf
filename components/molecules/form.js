import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import router from 'next/router';

const LoginForm = () => {

  const margin = { margin: '8px 0' };

  const initialValues = {
        username: '',
        password: '',
        remember: false
    }

  const validationSchema = Yup.object().shape({
        username: Yup.string().email('please enter valid email').required("Required"),
        password: Yup.string().required("Required")
    })


    return(
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: "#FFFFFF",
            width: "455px",
            borderRadius: "15px"
          }}
        >
          <Box component="form" sx={{ mt: 1, padding: "40px"}}>
          <Typography component="h1" variant="h5" align='center'>
            Login
          </Typography>
            <Formik initialValues={initialValues} validationSchema={validationSchema}>
              {(props) => (
                  <Form>
                      <Field as={TextField} label='Username' name="username" style={margin}
                          placeholder='Enter username' fullWidth required
                          helperText={<ErrorMessage name="username" />}
                      />
                      <Field as={TextField} label='Password' name="password" style={margin}
                          placeholder='Enter password' type='password' fullWidth required
                          helperText={<ErrorMessage name="password" />} />
                      <Field as={FormControlLabel}
                          name='remember'
                          control={
                              <Checkbox
                                  color="primary"
                              />
                          }
                          label="Remember me"
                      />
                      <Button type='submit' color='primary' variant="contained" href="/dashboard"
                        style={margin} fullWidth>Login</Button>

                  </Form>
              )}
            </Formik>

            <Grid container sx={{marginTop: '8px'}}>
              <Grid item xs>
                <Link href="/esqueciSenha" variant="body2">
                  Esqueci a senha?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/cadastro" variant="body2">
                  {"Cadastre-se"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
    )
}

export default LoginForm;