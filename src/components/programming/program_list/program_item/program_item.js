
import React from 'react';
import './program_item.css';

import PropTypes from 'prop-types';

class ProgramItem extends React.Component {

    render () {

        var styles = {
            "background": {background:'transparent'},
            "top_button": "btn btn-primary btn-lg",
            "download_button": "btn btn-outline-primary"
        }
        if (this.props.index % 2 == 1) {
            styles["background"] = {background:'#cceeff'};
            styles["top_button"] = "btn btn-dark btn-lg"
            styles["download_button"] = "btn btn-outline-dark"
        }
        return (
        <div className="container-fluid">
            <div className="row">
                <div style={styles["background"]} className="jumbotron pb-4">
                    <div className="row">
                        <div className="col-md-10">
                            <h1 className="display-4">{this.props.title}</h1>
                        </div>
                        <div className="col-md-2">
                            {this.props.index != 0 && <a className={styles["top_button"]} href="programming#" role="button">Top</a>}
                        </div>
                    </div>
                        <p className="lead">{this.props.tag}</p>
                    <hr className="my-4" />
                        <p>{this.props.description}</p>

                    <p><a className={styles["download_button"]} href={this.props.download_link} target="_blank" role="button" download>{this.props.link_text}</a></p>
                </div>
            </div>
        </div>
        );
    }
}

ProgramItem.propTypes = {

    title: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    download_link: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    link_text: PropTypes.string.isRequired

}


export default ProgramItem;
