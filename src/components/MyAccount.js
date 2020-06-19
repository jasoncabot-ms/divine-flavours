import React from 'react';

import { authProvider } from '../providers/authProvider';
import { AzureAD } from 'react-aad-msal';

function MyAccount() {
    return (
        <AzureAD provider={authProvider} forceLogin={false}>
            {
                ({ authenticationState, accountInfo }) => {
                    switch (authenticationState) {
                        default:
                            return (
                                <div className="container-fluid mt-5">
                                    <h1>My Account</h1>
                                    <h2>{accountInfo ? accountInfo.account.name : ''}</h2>
                                </div>
                            );
                    }
                }
            }
        </AzureAD>
    );
};

export default MyAccount;