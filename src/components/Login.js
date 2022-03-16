import { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: 300,
    margin: "0 auto",
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
});

class Login extends Component {
  render() {
    const { classes, onLogin } = this.props;
    return (
      <div className={classes.root}>
        <TextField className={classes.textField} label="Username" />
        <TextField
          className={classes.textField}
          label="Password"
          type="password"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => onLogin(true)}
        >
          Login
        </Button>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Login);
