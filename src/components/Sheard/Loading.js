import React from 'react';
import logo from '../../asset/logo 2.png';

const Loading = () => {
    return (
        <div className="h-screen flex items-center justify-center">
            <img className="w-28 animate-pulse" src={logo} alt="" />
        </div>
    );
};

export default Loading;