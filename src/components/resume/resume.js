
import React from 'react';
import './resume.css';


class Resume extends React.Component {


    componentDidMount () {
        document.title = 'Resume';
    }

    render () {
        return (
            <div className='around-nav'>
                <div className="embed-responsive embed-responsive-4by3">
                    <object data="images/JPGresume.pdf" width="100%" type='application/pdf'>
                        <div className="container-fluid p-5">It looks like this isn't loading on your device.<br/>
                                                            Not to worry! You can still <a href="images/JPGresume.pdf" download>download a copy of this resume</a></div>
                    </object>
                </div>
            </div>
        );
    }
}


export default Resume;
