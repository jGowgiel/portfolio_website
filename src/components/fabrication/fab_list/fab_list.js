
import React from 'react';
import './fab_list.css';

import FabItem from './fab_item/fab_item.js';

import entryData from './fabrication_entries.json'

class FabList extends React.Component {


    render () {
        /* Go through the imported JSON file and render a FabItem for each one */
        var loaded = [];
        entryData.forEach(function(element, index) {
            loaded.push(
                <FabItem key={index} 
                        title={element["title"]} 
                        tag={element["tag"]} 
                        description={element["description"]} 
                        image_srcs={element["image_srcs"]} 
                        video_srcs={element["video_srcs"]}
                        index={index} />
            );
        });
        return loaded;
    }
}



export default FabList;
