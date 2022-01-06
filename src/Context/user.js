import React from 'react';

const UserContext = React.createContext({});

const UserProviderContext = UserContext.Provider;

export const { UserContext, UserProviderContext }