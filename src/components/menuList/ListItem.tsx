import React, { useEffect } from 'react'
import '../../styles/homepage.css'
import useCollapse from 'react-collapsed';
import { selectGateways, setGatewayId, selectGatewayId, selectProjectId, selectProjects, selectReport } from '../../state-manager/report/reportSlice'
import { useAppSelector, useAppDispatch } from '../../state-manager/hooks';

interface IListItemProp {
    projectName: string;
    totalAmount: number;
    data: any;
}
const ListItem: React.FC<IListItemProp> = ({ projectName, totalAmount, data }) => {

    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    const report = useAppSelector(selectReport);
    return (
        <div className="collapsible">
            <div className="header" {...getToggleProps()}>
                <span>{projectName}</span>
                <span>Total: {totalAmount}</span>
            </div>
            <div {...getCollapseProps()}>
                <div className="content">
                    <table className='table'>
                        <tr className='tableRow'>
                            <th className='tableHeader'>Date</th>
                            <th className='tableHeader'>Gateway</th>
                            <th className='tableHeader'>Transaction ID</th>
                            <th className='tableHeader'>Amount</th>
                        </tr>

                        {data.map((value: any) => {
                            return <tr className='tableRow'>
                                <td className='tableData'>{value.created}</td>
                                <td className='tableData'>{value.gatewayName}</td>
                                <td className='tableData'>{value.paymentId}</td>
                                <td className='tableData'>{value.amount}</td>
                            </tr>
                        })}
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ListItem