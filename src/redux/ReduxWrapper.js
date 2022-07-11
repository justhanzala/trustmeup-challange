import React from 'react';
import { Provider } from 'react-redux';
import store from './index';

const ReduxWrapper = ({ element }) => (
    <Provider store={store}>{element}</Provider>
);

export default ReduxWrapper;