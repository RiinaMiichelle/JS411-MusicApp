componentDidUpdate(prevProps) {
  // Typical usage (don't forget to compare props):
  if (this.props.userID !== prevProps.userID) {
    this.fetchData(this.props.userID);
  }
}

class SystemNotifications extends React.Component {
  constructor() {
    super() 
    this.state = {
      
    }
  }
  render ()
  return (
    
  )
}