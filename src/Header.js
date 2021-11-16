import React from 'react'   //importing react
import './Header.css'   //importing css file
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import MyNetworkIcon from '@material-ui/icons/People';


function Header() {
    return (
        <div className='header'>            

            <div className="header__left">
                <img 
                    src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg" 
                    alt="" 
                />
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" name="" id="" />
                    
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title='Home'/>
                <HeaderOption Icon={MyNetworkIcon} title='My Network'/>
            </div>
          
                                    
        </div>
    )
}

export default Header


