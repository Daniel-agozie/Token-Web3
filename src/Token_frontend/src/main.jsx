import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import ContentProvider from './Context/ContextProvider';
import {AuthClient} from "@dfinity/auth-client"

const init = async () => {
  const authClient = await AuthClient.create();

  if (await authClient.isAuthenticated()) {
    handleAuthenticated(authClient)
  } else {
    await authClient.login({
      identityProvider: "https://identity.ic0.app/",
      onSuccess: () => {
         handleAuthenticated(authClient)
      }
    })
  }

}

async function handleAuthenticated(authClient) {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <ContentProvider>
      <App />
      </ContentProvider>
    </React.StrictMode>,
  );
}

init();

