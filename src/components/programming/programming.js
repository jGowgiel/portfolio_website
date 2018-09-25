
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
            <div>
                <div className="container-fluid">
                    <div className="row pt-4 pb-0 mb-0">
                        <div style={{ background:'transparent' }} className="jumbotron pb-0 mb-0">
                            <p className="lead">
                                Most of the projects represented below were produced for the 
                                COMP40 course at Tufts, which focuses on machine structure and 
                                improving general programming skill. Much of this work is collaborative, 
                                and each partner has been credited in the relevant source files for every project.
                            </p>
                        </div>
                    </div>
                </div>

                <ProgramList />

            </div>
        );
    }
}


export default Programming;
