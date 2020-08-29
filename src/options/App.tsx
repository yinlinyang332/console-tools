import { hot } from 'react-hot-loader/root';
import React from 'react';
import './App.scss';
import Layout from './Layout';
import { IProps } from './types';

const App = ({ children }: IProps) => {
    return <Layout>{children}</Layout>;
};


export default hot(App);
