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
        <header>Welcome User!</header>
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
        <br></br>
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
        <br></br>
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
        <div>
          System Notifications:
        </div>
      </div>
    );
  }
}

export default Dashboard;