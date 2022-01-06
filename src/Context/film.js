import React from 'react';

const FilmContext = React.createContext({});
const FilmProviderContext = FilmContext.Provider;

export default { FilmContext, FilmProviderContext };
