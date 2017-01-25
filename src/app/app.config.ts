import { AuthProviders, AuthMethods } from 'angularfire2';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyATzRfPVgQ_08m2g4s1KRSwIPfA1dHYvFw',
  authDomain: 'ng2-material-classified.firebaseapp.com',
  databaseURL: 'https://ng2-material-classified.firebaseio.com/',
  storageBucket: '<your-storage-bucket>',
  messagingSenderId: '<your-messaging-sender-id>'
};

export const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};