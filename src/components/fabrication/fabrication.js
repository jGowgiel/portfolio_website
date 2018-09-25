
import React from 'react';
import './fabrication.css';

import FabList from './fab_list/fab_list.js';

class Fabrication extends React.Component {

    componentDidMount () {
        document.title = 'Fabrication';
    }

    render () {
        return (
            <div className="around-nav">
                <FabList />
            </div>
        );
    }
}




export default Fabrication;
