
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
                    <embed src="images/JPGresume.pdf" width="100%" type='application/pdf' />

                </div>
                <div className="container-fluid p-5">
                    Feel free to <a href="images/JPGresume.pdf" download>download a copy</a> if this page isn't loading properly, or just for safe keeping.
                </div>
            </div>
        );
    }
}


export default Resume;
