import React from 'react';


import images from '../theme/assets/images';
import Image from './Image';

export default class Images  extends React.Component {

    render () {
        const imageJSX = images.map((image) => {
            return <Image key={image.id} public = { image.public } datasend={image}/>
        });

        return <div className='images'>{imageJSX}</div>
    }

};

