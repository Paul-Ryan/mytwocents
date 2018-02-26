import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Modal from 'react-modal';
import loginStyles from './login_form_styles';
import signupStyles from './signup_form_styles';

class NavBar extends React.Component {

  constructor(props){
    super(props);
    this.currentUser = this.props.currentUser;
    this.logout = this.props.logout;
    this.state = {
     username: '',
     password: '',
     email: '',
   };
   this.openModal = this.openModal.bind(this);
   this.closeModal = this.closeModal.bind(this);
   this.handleLogin = this.handleLogin.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
   this.demoLogin = this.demoLogin.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({[type]: e.target.value});
    };
  }

  handleLogin(e) {
    e.preventDefault();
    const user = this.state;
    console.log(JSON.stringify({user}));
    this.props.login(user);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {username: this.state.username, 
                  email: this.state.email, 
                  password: this.state.password};
    console.log(user);
    this.props.createNewUser(user);
    // this.props.createNewUser(this.state);
  }

  componentWillReceiveProps(nextProps) {
   if (nextProps.currentUser) {
     this.setState({modalIsOpen: false});
   } else {
     this.setState({errors: this.props.errors});
   }
 }

 demoLogin(e) {
   e.preventDefault();
   this.setState({username:'alexey'});
   this.setState({password: 'secret'});
   setTimeout(()=> {
     document.getElementById('login').click();
   },100);
 }

 renderErrors() {
   return (
     <ul className='error'>
       {
         this.props.errors.map((error,i)=>(
         <li key={`error=${i}`}>
           {error}
         </li>
       ))}
     </ul>
   );
 }

  openModal(action) {
    return (e) => {
      this.setState({modalIsOpen: true, action: action});
    };
  }

  closeModal() {
     this.setState({modalIsOpen: false});
     this.props.clearErrors();
  }


  LoginWindow(){
    return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={loginStyles}
          contentLabel="Login Window"
          ariaHideApp={false} >
          <span onClick={this.closeModal} className="modal-close">&times;</span>
          <form className="modal-form">
            <h1>Please Log in to continue</h1> <div className='hr'></div>
            <div className='input'>
              {this.renderErrors()}
              <input id='uname' placeholder='username'
                type="text"
                value={this.state.username}
                onChange={this.handleInput('username')} />
            <input type="password" id='passw' placeholder='password'
              value={this.state.password}
              onChange={this.handleInput('password')} />
            </div>
            <div className='submit'>
              <button onClick={this.demoLogin}>Demo</button>
              <button onClick={this.handleLogin} id='login'>Log In</button>
            </div>
          </form>
        </Modal>
      </div>
    );
  }

  SignUpWindow() {
  return (
    <Modal
      isOpen={this.state.modalIsOpen}
      onAfterOpen={this.afterOpenModal}
      onRequestClose={this.closeModal}
      style={signupStyles}
      contentLabel="Signup Window"
      ariaHideApp={false} >
      <span onClick={this.closeModal} className="modal-close">&times;</span>


      <form className="modal-form">
        <h1>Please Sign Up</h1> <div className='hr'></div>
        <div className='input'>
          {this.renderErrors()}
        <input id='uname' placeholder='username'
            type="text"
            value={this.state.username}
            onChange={this.handleInput('username')} />

          <input id='email' type='text' value={this.state.email}
          onChange={this.handleInput('email')} placeholder='email'/>

        <input type="password" id='passw' placeholder='password'
          value={this.state.password}
          onChange={this.handleInput('password')} />

        </div>
        <div className='submit'>
          <button onClick={this.handleSubmit} id='signup'>Sign Up</button>
        </div>
      </form>
    </Modal>
  );
}


  render() {
    const display = this.props.currentUser ? (
      <div className="menu-text">
       <NavLink activeClassName='menu-item-active' className="menu-item" to="/dashboard">Dashboard</NavLink>
       <button onClick={this.logout}>Logout</button>
      </div>
    ) : (
    <div className='menu-text menu-text-short'>
      <button onClick={this.openModal('signup')}
        >Sign Up</button>
      <button onClick={this.openModal('login')}>
        Log In</button>
    </div>
  );
  const formType = this.state.action === 'login' ?
  this.LoginWindow() : this.SignUpWindow();

  return (
    <header>
      { formType }
      <div className='row'>
        <div className="title">
          <img src='http://res.cloudinary.com/dgent8r3s/image/upload/v1519607068/my2cents-logo.svg'></img>
          <h1>My 2¢ - support the creators you care about</h1>
            {display}
        </div>
      </div>
    </header>
  );
  }
}

export default NavBar;

// <div className='container-menu'>
// 
// </div>
