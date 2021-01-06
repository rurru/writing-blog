import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Layout from '../containers/Layout';
import SocialButtonList from './SocialButtonList';
import { auth } from '../firebase';

import './Dashboard.css';

class Dashboard extends Component {
  static propTypes = {
    providerData: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  static defaultProps = {
    providerData: []
  };

  state = {
    buttonList: {
      facebook: {
        visible: true,
        provider: () => auth.facebookOAuth(),
        label: 'Logout'
      }
    },
    providerData: this.props.providerData
  };

  componentDidMount() {
    this.updateProviders(this.state.providerData);
  }

  handleCurrentProviders = providerData => {
    this.updateProviders(providerData);
  };

  updateProviders = providerData => {
    let buttonList = { ...this.state.buttonList };

    providerData.forEach(provider => {
      const providerName = provider.providerId.split('.')[0];
      buttonList = this.updateButtonList(buttonList, providerName, false);
    });

    this.setState({ buttonList, providerData });
  };

  handleUnliknedProvider = (providerName, providerData) => {
    if (providerData.length < 1) {
      auth
        .getAuth()
        .currentUser.delete()
        .then(() => console.log('User Deleted'))
        .catch(() => console.error('Error deleting user'));
    }

    let buttonList = { ...this.state.buttonList };
    buttonList = this.updateButtonList(buttonList, providerName, true);

    this.setState({ buttonList, providerData });
  };

  updateButtonList = (buttonList, providerName, visible) => ({
    ...buttonList,
    [providerName]: {
      ...buttonList[providerName],
      visible
    }
  });

  render() {
    return (
      <Layout>
        <SocialButtonList
          buttonList={this.state.buttonList}
          auth={auth.getAuth}
          currentProviders={this.handleCurrentProviders}
        />
      </Layout>
    );
  }
}

export default Dashboard;