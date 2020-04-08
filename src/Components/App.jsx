import React from 'react';

import LogIn from './LogIn';
import Dashboard from './Dashboard';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/Menu';



class App extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      loggedIn: false
    }
  }

  onUserLoggedIn = (userName) => {
    this.setState({
      loggedIn: true,
      userName: userName
    });
  }

  render() {
    const { loggedIn } = this.state;
    let content = null;

    if (loggedIn) {
      content = <Dashboard />
    } else {
      content = <LogIn onUserLoggedIn={this.onUserLoggedIn}/>
    }

    return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            My Music App
          </Typography>
        </Toolbar>
      </AppBar>
      {content}
    </div>
    );
  }
}


export default App;
