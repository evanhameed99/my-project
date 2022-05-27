import React from 'react'
import './header.css'
import logo from '../../assets/logo.png';
import hamburger from '../../assets/Group.svg'
import { Avatar, Button } from 'antd'
import { UserOutlined } from '@ant-design/icons';


interface HeaderProps {
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void;
}


const Header: React.FC<HeaderProps> = ({collapsed , setCollapsed}) => {
    return (
        <div className='header'>
            <div className='header_logo'>
                <img alt='app logo' src={logo} />
                <button  className='collapase_btn' onClick={() => setCollapsed(!collapsed)} style={{ marginBottom: 16 }}>
                    <img alt='app logo' src={hamburger} />

                </button>
            </div>

            <div className='user_section'>
                <Avatar shape="square" size={40} icon={<UserOutlined />} />
                <p className='username'>Evan </p>
            </div>
        </div>
    )
}

export default Header