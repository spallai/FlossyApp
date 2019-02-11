class LoginControl extends React.Component {
    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleSignUpClick = this.handleSignUpClick.bind(this);
      this.state = {form: false};
    }
  
    handleLoginClick() {
      this.setState({form: "login"});
    }
  
    handleSignUpClick() {
      this.setState({form: "signup"});
    }
  
    render() {
      const form = this.state.form;
      let button;
  
      if (form === "login") {
        button = <LogoutButton onClick={this.handleSignUpClick} />;
      } else {
        button = <LoginButton onClick={this.handleLoginClick} />;
      }
  
      return (
        <div>
          <Greeting form={form} />
          {button}
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <LoginControl />,
    document.getElementById('root')
  );