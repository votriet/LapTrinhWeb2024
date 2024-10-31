import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';
//import { handleLoginApi } from '../../services/userService';
//import e from 'cors';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isShowPassword: false,
      //errMessage: ''
    }
  }

  handleOnChangeUsername = (event) => {
    this.setState({ username: event.target.value })
  }

  handleOnChangePassword = (event) => {
    this.setState({ password: event.target.value })
  }

  handleLogin = async () => {
    console.log('username:', this.state.username, 'password:', this.state.password)
    console.log('all state', this.state)
    // this.setState({
    //   errMessage: ''
    // })

  }

  //   try {
  //     let data = await handleLoginApi(this.state.username, this.state.password);
  //     if (data && data.errCode !== 0) {
  //       this.setState({
  //         errMessage: data.message
  //       })
  //     }
  //     if (data && data.errCode === 0) {
  //       this.props.userLoginSuccess(data.user);
  //       console.log('login succeeds');
  //     }
  //   } catch (error) {
  //     if (error.response) {
  //       if (error.response.data) {
  //         this.setState({
  //           errMessage: error.response.data.message
  //         })
  //       }
  //     }
  //     console.log('test', error.response);



  //   }
  // }


  handleShowHidePassword = () => {
    this.setState({
      isShowPassword: !this.state.isShowPassword
    })
  }

  // handleKeyDown = (event) => {
  //   if (event.key === 'Enter') {
  //     this.handleLogin();
  //   }
  // }

  render() {
    return (
      <div className="login-background">
        <div className="login-container">
          <div className="login-content row">
            <div className="col-12 text-login">Login</div>
            <div className="col-12 form-group login-input">
              <label>Username</label>
              <input type="text" className="form-control"
                placeholder="Enter your username"
                value={this.state.username}
                onChange={(event) => this.handleOnChangeUsername(event)}
              />
            </div>

            <div className="col-12 form-group login-input">
              <label>Password</label>
              <div className="custom-input-password">
                <input className="form-control"
                   type={this.state.isShowPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  onChange={(event) => this.handleOnChangePassword(event)}
                  //onKeyDown={(event) => this.handleKeyDown(event)}

                />
                <span onClick={() => { this.handleShowHidePassword() }} >
                  <i className={this.state.isShowPassword ? 'far fa-eye' : 'far fa-eye-slash'}></i>
                </span>

              </div>

            </div>
            <div className='col-12' style={{ color: 'red' }}>
              {/* {this.state.errMessage} */}
            </div>

            <div className="col-12 ">
              <button className="btn-login" onClick={() => { this.handleLogin() }}>Login</button>
            </div>
            <div className="col-12">
              <span className="forgot-password" >Forgot your password</span>
            </div>
            <div className="col-12 text-center mt-3" >
              <span className="text-other-login">Or Login with:</span>
            </div>
            <div className="col-12 social-login" >
              <i className="fab fa-google-plus-g google"></i>
              <i className="fab fa-facebook-f facebook"></i>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    language: state.app.language
  };
};

const mapDispatchToProps = dispatch => {
  return {
    navigate: (path) => dispatch(push(path)),
    //userLoginSuccess: (userInfor) => dispatch(actions.userLoginSuccess(userInfor))
    adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
    adminLoginFail: () => dispatch(actions.adminLoginFail()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);