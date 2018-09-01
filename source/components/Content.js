import React from 'react';

import Profile from './Profile';
import Images from './Images';
import Stories from './Stories';

export default class Content  extends React.Component {

    render () {
        return (
           <div className = 'content'>
           <Profile />
           <div className="profile" ><Stories /> </div>
           <Images />
           </div>
        )
    }
};

