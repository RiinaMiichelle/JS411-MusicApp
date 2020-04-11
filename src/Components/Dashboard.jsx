import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Slider from '@material-ui/core/Slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { flexbox } from '@material-ui/system';
import Box from '@material-ui/core/Box';

class Dashboard extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      online: true,
      volume: 20,
      quality: 3,
      notifications: []
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { volume, quality, online } = this.state;

    if ( prevState.volume !== volume || prevState.quality !== quality || prevState.online !== online) {
      // one of these changed ... update system notifications

      const notifications = [];

      if (volume >= 80) {
        notifications.push("Listening to music at a high volume could cause long-term hearing loss.");
      }

      if (!online) {
        notifications.push("Your application is offline. You won't be able to share or stream music to other devices.");
      }

      if (quality === 1) {
        notifications.push("Music quality is degraded. Increase quality if your connection allows it.");
      }

      this.setState({ notifications });
    }
  }

  toggleOnline = () => {
    this.setState({online: !this.state.online})
  };

  slideVolume = (event, newValue) => {
    this.setState({volume: newValue})
  }

  chooseQuality = (event) => {
    this.setState({
      quality: event.target.value
    });
  }
  


  render() {
    const { online, volume, quality } = this.state;
    const onlineSwitchLabel = online ? 'Online' : 'Offline'

    return (
      <div>
        <header id="header">Welcome User!</header>
        <Box display="flex" justifyContent="space-around">
          <Card>
            <CardContent>
              <div>Online Mode</div>
              <br></br>
              <div>Is this application connected to the internet?</div>
            </CardContent>
            <CardActions>
              <FormControlLabel 
                control={<Switch checked={online} onClick={this.toggleOnline}/>}
                label={onlineSwitchLabel}
              />
            </CardActions>
          </Card>
          <Card>
            <CardContent>
              <div>Master Volume</div>
              <br></br>
              <div>Overrides all other sound settings in this application</div>
            </CardContent>
            <CardActions>
              <Slider
                value={volume}
                onChange={this.slideVolume}
                aria-labelledby="input-slider"
                step={10}
                marks
                min={0}
                max={100}
              />
            </CardActions>
          </Card>
          <Card>
            <CardContent>
              <div>Sound Quality</div>
              <br></br>
              <div>Manually control the music quality in event of poor connection</div>
            </CardContent>
            <CardActions>
              <FormControl>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={quality}
                  onChange={this.chooseQuality}
                >
                  <MenuItem value={1}>Low</MenuItem>
                  <MenuItem value={2}>Medium</MenuItem>
                  <MenuItem value={3}>High</MenuItem>
                </Select>
              </FormControl>
            </CardActions>
          </Card>
        </Box>
        <div>
          <div id="notificationsHeader">System Notifications:</div>
          {this.state.notifications.map(notification => <div id="notifications">{notification}</div>)}
        </div>
      </div>
    );
  }
}

export default Dashboard;