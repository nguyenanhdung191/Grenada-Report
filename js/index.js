import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import initHeaderBar from 'd2-ui/lib/app-header';
import MainComponent from './components/MainComponent';
import config from './model/config.json'
injectTapEventPlugin();

initHeaderBar(document.getElementById('header-bar'), config.baseUrl + "/api")
    .catch(err => {
        console.warn(err);
    });

const App = () => (
    <MuiThemeProvider>
        <MainComponent/>
    </MuiThemeProvider>
);

const app = document.getElementById("app");
ReactDOM.render(<App />, app);
