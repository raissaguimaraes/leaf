import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function Form() {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
    }

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
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, padding: "40px"}}>
          <Typography component="h1" variant="h5" align='center'>
            Login
          </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="senha"
              label="Senha"
              type="senha"
              id="senha"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              href="/dashboard"
              sx={{ mt: 3, mb: 2 }}
            >
              Entrar
            </Button>
            <Grid container>
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