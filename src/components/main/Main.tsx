import React, { useEffect } from 'react'
import List from '../menuList/List'
import { selectReport } from '../../state-manager/report/reportSlice'
import { useAppSelector, useAppDispatch } from '../../state-manager/hooks';
import Noreport from './Noreport';

const Main: React.FC = () => {
    const report = useAppSelector(selectReport);

    useEffect(() => {
        if (report && report.data && report.data.length > 0) {
            console.log('there is report')
        } else {
            console.log('there is no report')
        }
    }, [report])
    return (
        <div>
            {
                report && report.data && report.data.length > 0 ? <List /> : <Noreport />

            }
        </div>
    )
}

export default Main