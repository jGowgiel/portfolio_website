
import React from 'react';
import './contact.css';


class Contact extends React.Component {


    componentDidMount () {
        document.title = 'Contact';
    }

    render () {
        return (
            <div className='around-nav'>
                <div className="container-fluid p-4">
                    <div className="h5 font-weight-normal">
                        <p>Find me on <a href="https://www.linkedin.com/in/jarod-gowgiel-2819a5119/" target="_blank" rel="noopener noreferrer">LinkedIn</a>!</p>
                        <p>Shoot me an e-mail:</p>
                    </div>
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col">
                            <p className="h5 font-weight-normal"><a href="mailto:jarod.gowgiel@gmail.com" target="_blank" rel="noopener noreferrer">jarod.gowgiel@tufts.edu</a></p>
                        </div>
                    </div>

                    <div className="h5 text-center pt-5">
                        <p>Thanks for reaching out! I'll be in touch shortly.</p>
                    </div>
                </div>
            </div>
        );
    }
}


export default Contact;
