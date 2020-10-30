import React from 'react';
import renderer from 'react-test-renderer';
import SearchBar from '../components/SearchBar/SearchBar';
import createContext from '../mobx/store';



it('renders SearchBar correctly ', () => {
        const tree = renderer.create(<SearchBar />).toJSON();
        expect(tree).toMatchSnapshot();
});

