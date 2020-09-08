import React from 'react';

export default React.createContext({
    userId: null,
    login: (token, userId, tokenExpiration, firstName, lastName) => {},
    logout: () => {}
})