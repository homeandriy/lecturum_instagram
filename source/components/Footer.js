import React from 'react';

import listMenu from '../theme/assets/links'
import MenuLink from './MenuLink';


export default class Footer  extends React.Component {

    render () {
        const menuList = listMenu.map( (link) => {
                   return <MenuLink key = { link.id } link = { link.message } />
               });
        return (            
           <div className = 'footer'>          
               <ul> { menuList } </ul>
               <span>© 2018 INSTAGRAM</span>
           </div>
        )
    }
};

