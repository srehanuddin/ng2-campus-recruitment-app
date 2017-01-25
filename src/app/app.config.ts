import { AuthProviders, AuthMethods } from 'angularfire2';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyCBTFYIlEJkGIkE-iks1AGX6ePDoxMDZ5w',
  authDomain: 'ng2campusrecruitmentapp.firebaseio.com',
  databaseURL: 'https://ng2campusrecruitmentapp.firebaseio.com/',
  storageBucket: '<your-storage-bucket>',
  messagingSenderId: '<your-messaging-sender-id>'
};

export const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};