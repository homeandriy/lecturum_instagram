import React from 'react';

import avatar from '../theme/assets/avatars/nasa.jpg';


export default class Profile  extends React.Component {

    render () {
        return (
           <div className = 'profile'>
                <img  className='avatar' src={ avatar } />
                <div className = 'main'>
                    <span className='nickname'>Nasa</span>
                    <div className='stats'>
                    <div>
                        <span>2.43&nbsp;</span>posts
                    </div>
                    <div>
                        <span>34.9m&nbsp;</span>followers
                    </div>
                    <div>
                        <span>70&nbsp;</span>following
                    </div>                   
                </div>
                <span className='name'>NASA</span>
                </div>
           </div>
        )
    }
};
