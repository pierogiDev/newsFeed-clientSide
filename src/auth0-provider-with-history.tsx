import { Auth0Provider } from "@auth0/auth0-react";
import React, {FC} from "react";
import { useHistory } from "react-router-dom";

type Props = {children: React.ReactNode}

export const Auth0ProviderWithHistory: FC<Props> = ({children}) => {
  const history = useHistory();

  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const redirectUri = process.env.REACT_APP_AUTH0_CALLBACK_URL;
  const audience = process.env.REACT_APP_AUTH0_AUDIENCE;

  //MEMO Regarding type of appState, refer to https://codesandbox.io/s/auth0-typescript-react-3g9qx
  const onRedirectCallback = (appState?: any) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  if (!(domain && clientId && audience)) {
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={redirectUri}
      onRedirectCallback={onRedirectCallback}
      audience={audience}
    >
      {children}
    </Auth0Provider>
  );
};
