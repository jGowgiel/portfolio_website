
import React from 'react';
import './template.css';


class Template extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            /* Insert any state variables here */
        }
    }

    render () {
        return (
            <div>This should be replaced with real text</div>
        );
    }
}

Template.propTypes = {
    /*

    <prop_name>: PropTypes.<type>.isRequired,       (required)
    <second_name>: PropTypes.<type>                 (optional)

    */
}


export default Template;
