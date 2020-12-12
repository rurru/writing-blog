import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Layout from '../containers/Layout';
import SocialButtonList from './SocialButtonList';
import { auth } from '../firebase';

const buttonList = {
  facebook: {
    visible: true,
    provider: () => auth.facebookOAuth()
  }
};

class Login extends Component {
  componentDidMount() {
    auth.getAuth().onAuthStateChanged(user => {
      if (user) {
        this.props.history.push('/dashboard');
      }
    });
  }

  render() {
    return (
      <Layout contentCenter={true}>
        <SocialButtonList buttonList={buttonList} auth={auth.getAuth} />

      </Layout>
    );
  }
}

export default Login;