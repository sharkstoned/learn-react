'use strict';

import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
    render () {
        return <p>jopa!</p>;
    }
}

render(<App/>, document.querySelector('#content'));