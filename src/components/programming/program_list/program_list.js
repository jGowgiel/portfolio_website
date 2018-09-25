
import React from 'react';
import './program_list.css';

import ProgramItem from './program_item/program_item.js';

import entryData from './programming_entries.json'

class ProgramList extends React.Component {

    render () {
        /* Go through the imported JSON file and render a ProgramItem for each one */
        var loaded = [];
        entryData.forEach(function(element, index) {
            loaded.push(
                <ProgramItem key={index} 
                            title={element["title"]} 
                            tag={element["tag"]} 
                            description={element["description"]} 
                            download_link={element["download_link"]} 
                            index={index} 
                            link_text={element["link_text"]} />
            );
        });   
        return loaded;
    }
}


export default ProgramList;
