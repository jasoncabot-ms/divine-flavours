import React from 'react';

import { AzureAD, AuthenticationState } from 'react-aad-msal';
import { authProvider } from '../providers/authProvider';

function HeaderAuth() {
    return (<AzureAD provider={authProvider} forceLogin={false}>
        {
            ({ login, logout, authenticationState, error, accountInfo }) => {
                switch (authenticationState) {
                    case AuthenticationState.Authenticated:
                        return (
                            <p>
                                <span>{accountInfo.account.name}</span>&nbsp;<button className="btn navbar-btn line_btn" onClick={logout}>Logout</button>
                            </p>
                        );
                    case AuthenticationState.Unauthenticated:
                        return (
                            <div>
                                {error && <p><span>An error occurred during authentication, please try again!</span></p>}
                                <button className="btn navbar-btn line_btn" onClick={login} >Login</button>
                            </div>
                        );
                    case AuthenticationState.InProgress:
                        return (<p>Authenticating...</p>);
                    default:
                        break;
                }
            }
        }
    </AzureAD>);
}

export default HeaderAuth;

