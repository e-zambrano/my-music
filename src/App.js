import AppBar from "@material-ui/core/AppBar";
import { withStyles } from "@material-ui/core/styles";
import { Component } from "react";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

const styles = (theme) => ({
  appBar: {
    padding: theme.spacing(1),
  },
  appContent: {
    marginTop: theme.spacing(10),
  },
});

class App extends Component {
  state = {
    isLoggedIn: false,
  };

  setLogin = (value) => {
    this.setState({ isLoggedIn: value });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar className={classes.appBar}>My Music App</AppBar>
        <div className={classes.appContent}>
          {this.state.isLoggedIn ? (
            <Dashboard />
          ) : (
            <Login onLogin={this.setLogin} />
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);
