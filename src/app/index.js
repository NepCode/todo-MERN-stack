import React,{Component} from 'react';
import {render} from 'react-dom';

import App from './App';



render(<App/>, document.getElementById('app'));


/* 

*viejo
$ npm i babel-core babel-loader babel-preset-react babel-preset-env -D

{
    "presets": [
        "@babel/env",
        "@babel/react"
    ]
}

    "babel-core": "^6.26.0",
    "babel-loader": "^7.1.4",
    "babel-preset-env": "^1.6.1",
    "babel-preset-react": "^6.24.1",


    *nuevo
    Para el core: 
    npm install --save-dev @babel/core 
    npm i @babel/preset-react -D 
    npm i @babel/preset-env -D

*/