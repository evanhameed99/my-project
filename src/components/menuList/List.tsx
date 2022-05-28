import React, { useEffect } from 'react'
import { selectGateways, setGatewayId, selectGatewayId, selectProjectId, selectProjects, selectReport } from '../../state-manager/report/reportSlice'
import { useAppSelector, useAppDispatch } from '../../state-manager/hooks';
import _ from 'lodash'
import '../../styles/homepage.css'
import ListItem from './ListItem';
const List: React.FC = () => {

    const gatewayId = useAppSelector(selectGatewayId);
    const AllprojectsList = useAppSelector(selectProjects);
    const projectId = useAppSelector(selectProjectId);
    const gateways = useAppSelector(selectGateways);
    const report = useAppSelector(selectReport);

    const [meuns, setmenus] = React.useState<any[]>([]);

    useEffect(() => {

        const result: any = _.map(report.data, (value, key) => {
            const project = AllprojectsList.find(project => project.projectId === value.projectId);
            const gateway = gateways.find(gateway => gateway.gatewayId === value.gatewayId);
            if (project && gateway) {
                return { ...value, projectName: project.name, gatewayName: gateway.name }

            }
        });
        const groupedBy = _.groupBy(result, 'projectName');
        const groupedByProject = _.map(groupedBy, (value, key) => {
            return { projectName: key, data: value , totalAmount: _.sumBy(value, 'amount')}
        })

        setmenus(groupedByProject)
    }, [projectId, AllprojectsList, report])

    return (
        <div className='listWrapper'>

            {meuns && meuns.map((menu: any) => {
                return <ListItem projectName={menu.projectName} totalAmount={menu.totalAmount} data={menu.data} />
            })
            }
        </div>
    )
}

export default List