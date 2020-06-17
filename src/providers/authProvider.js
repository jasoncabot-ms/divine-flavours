// authProvider.js
import { MsalAuthProvider } from 'react-aad-msal';

// Msal Configurations
const config = {
  auth: {
    clientId: `${process.env.REACT_APP_AUTH_APP_ID}`,
    authority: "https://login.microsoftonline.com/common",
    redirectUri: `${process.env.REACT_APP_AUTH_REDIRECT_URI}`,
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  }
};

// Authentication Parameters
const authenticationParameters = {
  scopes: ["User.Read"]
};

export const authProvider = new MsalAuthProvider(config, authenticationParameters);