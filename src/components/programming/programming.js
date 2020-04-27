
import React from 'react';
import './programming.css';

import ProgramList from './program_list/program_list.js';

class Programming extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.title = 'Programming';
    }

    render () {
        return (
            <div className="around-nav">
                <ProgramList />
            </div>
        );
    }
}


export default Programming;
