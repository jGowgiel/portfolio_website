
import React from 'react';
import './fab_item.css';

import PropTypes from 'prop-types';

class FabItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render () {
        var shown_carousel_screens = [];
        var carousel_indicators = [];
        var carousel_id = "carousel_" + String(this.props.index)
        var num_images = this.props.image_srcs ? this.props.image_srcs.length : 0;
        for (let i = 0; i < num_images; i++) {
            if (i === 0) {
                shown_carousel_screens.push(
                    <div className="carousel-item active" key={i}>
                        <img className="d-block w-100" src={this.props.image_srcs[i]} />
                    </div>
                );

                carousel_indicators.push(
                    <li data-target={"#" + carousel_id} data-slide-to={i} key={i} className="active"></li>
                );
            }
            else {
                shown_carousel_screens.push(
                    <div className="carousel-item" key={i}>
                        <img className="d-block w-100" src={this.props.image_srcs[i]} />
                    </div>
                );

                carousel_indicators.push(
                    <li data-target={"#" + carousel_id} data-slide-to={i} key={i}></li>
                );
            }
        }

        var num_videos = this.props.video_srcs ? this.props.video_srcs.length : 0;
        for (let j = 0; j < num_videos; j++) {
            shown_carousel_screens.push(
                <div className="carousel-item" key={num_images + j}>
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src={this.props.video_srcs[j]} allowFullScreen></iframe>
                    </div>
                </div>
            );

            carousel_indicators.push(
                    <li data-target={"#" + carousel_id} data-slide-to={j} key={num_images + j}></li>
            );

        }

        var styles = {
            "background": {background:'transparent'},
            "top_button": "btn btn-primary btn-lg"
        }
        if (this.props.index % 2 == 1) {
            styles["background"] = {background:'#cceeff'};
            styles["top_button"] = "btn btn-dark btn-lg";
        }

        return (
            <div className="container">
                <div className="row">
                    <div style={styles["background"]} className="jumbotron pb-0">
                        <div className="row">
                            <div className="col-10">
                                <h1 className="display-4">{this.props.title}</h1>
                            </div>
                            <div className="col-2">
                                <a className={styles["top_button"]} href="fabrication#" role="button">Top</a>
                            </div>
                        </div>
                            <p className="lead">{this.props.tag}</p>
                        <hr className="my-4" />
                            <p>{this.props.description}</p>
                    </div>
                </div>

                <div className="row justify-content-md-center pb-3">
                    <div className="col-md-6">
                        <div id={carousel_id} className="carousel slide" data-ride="carousel" data-interval="false">
                            <ol className="carousel-indicators">
                                {carousel_indicators}
                            </ol>
                            <div className="carousel-inner">
                                {shown_carousel_screens}
                            </div>
                            <a className="carousel-control-prev" href={"#" + carousel_id} role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href={"#" + carousel_id} role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

FabItem.propTypes = {
    title: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image_srcs: PropTypes.array.isRequired,
    video_srcs: PropTypes.array,
    index: PropTypes.number.isRequired
}


export default FabItem;
