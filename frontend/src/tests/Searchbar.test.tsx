import React from 'react';
import { render } from '@testing-library/react' // ES6
import SearchBar from '../components/SearchBar/SearchBar';
import App from "../App";
import createContext from '../mobx/store';



it("renders SearchBar correctly", () => {
        const { container } = render(<SearchBar/>);
        expect(container).toMatchSnapshot();
});

