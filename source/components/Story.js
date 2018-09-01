import React from 'react';
import Image from './Image';

export default ( props  ) => {
    return (
        <div className="story">
            <div>
                <Image public = 'true' datasend =  { props.storyData } /> 
            </div>
            <span>{ props.storyData.message }</span>
        </div>
    );
}