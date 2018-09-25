
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
            </div>
        );
    }
}


export default Resume;
