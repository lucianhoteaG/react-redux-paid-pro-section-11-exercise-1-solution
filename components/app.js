import React from 'react';
import SearchForm from './search-form/search-form';

export default () => (
    <SearchForm onSearchSubmitted={(term) => console.log(term)} />
);