import React, {Component} from 'react';
import '../styles/App.css';
import { data } from './../data';

import Panel from './panel/index';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appName: 'FX Trading App',
            panelData: data,
            loaded: false
        }
    }

    render() {
        return (
            <div id='app'>
                <h1>{this.state.appName}</h1>
                <div className='panels'>
                    {this.state.panelData.map((element, index) => {
                        return (
                            <Panel key={index} data={element}/>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default App;