import React from 'react'
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

import {
    PieChartOutlined,
    DesktopOutlined,
} from '@ant-design/icons';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Reports', 'counterpage', <PieChartOutlined />),
    getItem('Users', 'notfound', <DesktopOutlined />),
];



interface NavigationProps {
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({ collapsed }) => {

    const navigate = useNavigate();
    return (
        <div >
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="light"
                inlineCollapsed={collapsed}
                items={items}
                onClick={({ key, keyPath, }) => navigate(`/${key}`)}
            />
        </div>
    );
};

export default Navigation;