import firebase from './firebase';
import { queryAllByText } from '@testing-library/react';

export const getAuth = () => {
  return firebase.auth();
};

export const facebookOAuth = () => {
  return new firebase.firebase_.auth.FacebookAuthProvider();
};