import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import initHeaderBar from 'd2-ui/lib/app-header';
import MainComponent from './components/MainComponent';
injectTapEventPlugin();

initHeaderBar(document.getElementById('header-bar'), "https://hispvn.org/grd/api")
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
