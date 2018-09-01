import React from 'react';


import stories from '../theme/assets/stories';
import Story from './Story';

export default class Stories  extends React.Component {

    render () {
        const storiesList = stories.map((storyData) => {
            return <Story key={storyData.id} storyData = { storyData } />
        });

        return <div className='stories'>{storiesList}</div>
    }

};

