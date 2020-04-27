
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
                <div className='container-fluid'>
                    <img src="images/OverwatchBanner.jpg" className="img-fluid" alt="3D Modeled Seasons" />
                    <div className="row">
                        <div className="container-fluid py-3 m-3 text-center col-md-8">
                            <div className="h4 py-3">Hi there!</div>
                            <div className="h4 font-weight-normal">
                                <p>My name's Jarod - I'm a software engineer at <a href="https://www.golucid.co">Lucid Software</a>, and I graduated from Tufts University with a Bachelor's in Computer Science in 2019. While I've recently been working in SaaS and full-stack web development, I have a strong background in 3D printing and fabrication.</p>
                                <p>The bulk of my programming experience is in frontend languages (Typescript/Javascript/HTML/CSS), as well as Python, Swift and C/C++.</p>
                                <p>Please, feel free to explore around using the links at the top, and get in touch through the contact section if you're interested in talking with me about my work, my projects, or my job experience</p>
                            </div>

                        </div>

                        <div className="container-fluid col-md py-5 px-3">
                            <div className="py-5 px-3">
                                <img src="images/jarod_g.jpg" className="img-fluid rounded" alt="Jarod Gowgiel" />
                            </div>
                        </div>
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
