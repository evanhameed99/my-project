import React, { useEffect } from 'react'
import { selectGateways, setGatewayId, selectGatewayId, selectProjectId, selectProjects, selectReport } from '../../state-manager/report/reportSlice'
import { useAppSelector, useAppDispatch } from '../../state-manager/hooks';
import _ from 'lodash'
import '../../styles/homepage.css'
import ListItem from './ListItem';


interface IListProp {
    menus: any;
}
const List: React.FC<IListProp> = ({ menus }) => {


    return (
        <div className='listWrapper'>

            {menus && menus.map((menu: any) => {
                console.log('menu' , menu)
                const name = menu.projectName && menu.projectName.length > 2 ? menu.projectName : menu.gatewayName;
                console.log('name', name)
                return <ListItem name={name} totalAmount={menu.totalAmount} data={menu.data} />
            })
            }
        </div>
    )
}

export default List