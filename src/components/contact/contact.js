
import React from 'react';
import './contact.css';


class Contact extends React.Component {


    componentDidMount () {
        document.title = 'Contact';
    }

    render () {
        return (
            <div className='around-nav'>
                <div class="container-fluid p-4">
                    <div class="h5 font-weight-normal">
                        <p>Find me on <a href="https://www.linkedin.com/in/jarod-gowgiel-2819a5119/" target="_blank">LinkedIn</a>!</p>
                        <p>Shoot me an e-mail:</p>
                    </div>
                    <div class="row">
                        <div class="col-1"></div>
                        <div class="col">
                            <p class="h5 font-weight-normal"><a href="mailto:jarod.gowgiel@tufts.edu" target="_blank">jarod.gowgiel@tufts.edu</a></p>
                        </div>
                    </div>

                    <div class="h5 text-center pt-5">
                        <p>Thanks for reaching out! I'll be in touch shortly.</p>
                    </div>
                </div>
            </div>
        );
    }
}


export default Contact;
