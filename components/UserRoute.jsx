import React from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LodingToRedirect from './LodingToRedirect';

const UserRoute = ({ children, ...rest }) => {
    const { currentUser } = useSelector(state => state.user);
    return currentUser ? <Route {...rest} /> : <LodingToRedirect />
}

export default UserRoute