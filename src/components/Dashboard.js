import { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Switch from "@material-ui/core/Switch";
import Slider from "@material-ui/core/Slider";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

export default class Dashboard extends Component {
  state = {
    isOnline: true,
    volume: 30, //from 1 to 100
    quality: "2",
  };

  onlineChange = (event) => {
    this.setState({ isOnline: event.target.checked });
  };

  volumeChange = (_, newValue) => {
    this.setState({ volume: newValue });
  };

  qualityChange = (event) => {
    this.setState({ quality: event.target.value });
  };

  render() {
    return (
      <>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Card>
              <CardContent>
                <h3>Online Mode</h3>
                <p>Is this application connected to the internet?</p>
                <Switch
                  checked={this.state.isOnline}
                  onChange={this.onlineChange}
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card>
              <CardContent>
                <h3>Master Volume</h3>
                <p>Overrides all other sound settings in this application</p>
                <Slider
                  value={this.state.volume}
                  step={10}
                  marks
                  min={10}
                  max={100}
                  onChange={this.volumeChange}
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card>
              <CardContent>
                <h3>Sound Quality</h3>
                <p>
                  Manually control the music quality in the event of poor
                  connection
                </p>
                <Select
                  value={this.state.quality}
                  onChange={this.qualityChange}
                  autoWidth
                >
                  <MenuItem value={"1"}>Low</MenuItem>
                  <MenuItem value={"2"}>Normal</MenuItem>
                  <MenuItem value={"3"}>High</MenuItem>
                </Select>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <h2>System Notifications:</h2>
            {!this.state.isOnline && (
              <div>
                Your application is offline. You won't be able to share or
                stream music to other devices.
              </div>
            )}
            {this.state.volume > 80 && (
              <div>
                Listening to music at a high volume could cause long-term
                hearing loss.
              </div>
            )}
            {this.state.quality === "1" && (
              <div>
                Music quality is degraded. Increase quality if your connection
                allows it.
              </div>
            )}
          </Grid>
        </Grid>
      </>
    );
  }
}
