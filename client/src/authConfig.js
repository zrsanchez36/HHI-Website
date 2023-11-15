import { PublicClientApplication } from "@azure/msal-browser";

export const msalConfig = {
  auth: {
    clientId: "dc201989-ee16-4e4c-a8b0-754484979ded", // Application (client) ID from Azure portal
    authority: "https://login.microsoftonline.com/2a1907c3-592c-40cb-8a88-7f2d40bd937a", // Tenant ID from Azure portal
    redirectUri: "http://localhost:3000/auth/callback" // Redirect URI set in Azure portal
  },
  cache: {
    cacheLocation: "localStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to true if you are having issues on IE11 or Edge
  }
};

export const msalInstance = new PublicClientApplication(msalConfig);
