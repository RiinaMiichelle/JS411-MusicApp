import React from 'react';  

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class LogIn extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      userName: '',
      userPassWord: ''
    }
  }

  onLogin = () => {
    // const onUserLoggedIn = this.props.onUserLoggedIn;
    const { onUserLoggedIn } = this.props;
    onUserLoggedIn(this.state.userName)
  }

  render() {
    return (
      <div>
        <form noValidate autoComplete="off">
          <TextField  label="Username *" />
          <br></br>
          <TextField  label="Password *"/>
          <br></br>
          <Button onClick={this.onLogin} variant='outlined' id='logInButton'>LOGIN</Button>
        </form>
      </div>
    );
  }
}

export default LogIn;
