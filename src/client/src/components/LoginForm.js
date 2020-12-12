import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import { AppContext } from "../context/AppContext";

const LoginForm = () => {
  const { login } = useContext(AppContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    login({ username, password });
  };

  return (
    <form onSubmit={onSubmit} className="loginForm">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                size="small"
                variant="outlined"
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                name="password"
                size="small"
                type="password"
                variant="outlined"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Button color="secondary" fullWidth type="submit" variant="contained">
            Log in
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginForm;
