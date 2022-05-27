import React, { useEffect } from 'react'
import { useAppDispatch } from '../../state-manager/hooks'
import { getProjectsAsync , getGatewaysAsync } from '../../state-manager/report/reportSlice'
import DateFilter from './dateFilter'
import GatewayFilter from './gatewayFilter'
import ProjectFilter from './projectFilter'
import './styles.css'
const Filters = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getProjectsAsync());
        dispatch(getGatewaysAsync());
    }, [])

    return (
        <div className='filter'>
            <ProjectFilter />
            <GatewayFilter />
            <DateFilter />
        </div>
    )
}

export default Filters