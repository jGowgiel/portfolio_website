
import React from 'react';
import './home.css';


class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            /* Insert any state variables here */
        }
    }

    componentDidMount () {
        document.title = 'Home';
    }

    render () {
        return (
            <div className='around-nav'>
                <img src="images/OverwatchBanner.jpg" className="img-fluid" alt="Overwatch Image" />

                <div className="container-fluid py-3 text-center">
                    <div className="h4 py-3">Hi there!</div>
                    <div className="h4 font-weight-normal">
                        <p>My name's Jarod - I'm an aspiring software developer and a current computer science student at Tufts University with a strong background in fabrication and 3D design.</p>
                        <p>The bulk of my programming experience is in C/C++, Swift, and Javascript.</p>
                        <p>Please, feel free to explore around using the links at the top, and get in touch through the contact section if you're interested in talking with me about my work, my projects, or my job experience</p>
                    </div>

                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-5"></div>
                        <div className="col-2">
                            <img src="images/jarod_g.jpg" className="img-fluid rounded" alt="Self Image" />
                        </div>
                        <div className="col-5"></div>
                    </div>
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    /*

    <prop_name>: PropTypes.<type>.isRequired,       (required)
    <second_name>: PropTypes.<type>                 (optional)

    */
}


export default Home;
