import React, { useEffect } from 'react'
import List from '../menuList/List'
import { selectGatewayId, selectGateways, selectProjectId, selectProjects, selectReport } from '../../state-manager/report/reportSlice'
import { useAppSelector, useAppDispatch } from '../../state-manager/hooks';
import Noreport from './Noreport';
import Graph from '../graph/graph';
import _ from 'lodash';

const Main: React.FC = () => {


    const gateway = useAppSelector(selectGatewayId);
    const AllprojectsList = useAppSelector(selectProjects);
    const project = useAppSelector(selectProjectId);
    const gateways = useAppSelector(selectGateways);
    const report = useAppSelector(selectReport);

    const [menus, setmenus] = React.useState<any[]>([]);

    useEffect(() => {
        const result: any = _.map(report.data, (value, key) => {
            const projectFound = AllprojectsList.find(project => project.projectId === value.projectId);
            const gatewayFound = gateways.find(gateway => gateway.gatewayId === value.gatewayId);
            if (projectFound && gatewayFound) {
                return { ...value, projectName: projectFound.name, gatewayName: gatewayFound.name }
            }
        });

        let groupedBy;
        let identifier = 'projectName';
        if (gateway === '  ' && project !== '  ') {
            groupedBy = _.groupBy(result, 'gatewayName');
            identifier = 'gatewayName';
        } else {
            groupedBy = _.groupBy(result, 'projectName');
        }

        const groupedByProject = _.map(groupedBy, (value, key) => {
            return { [identifier]: key, data: value, totalAmount: _.sumBy(value, 'amount') }
        })
   
        setmenus(groupedByProject)
    }, [project, AllprojectsList, report, gateway])
    return (
        <div>
            {
                report && report.data && report.data.length > 0 ?

                    ((project == '  ' || gateway == '  ')) ?
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'start',
                        }}>
                            <List menus={menus} />
                            <Graph menus={menus} />
                        </div>
                        : <List menus={menus} />
                    : <Noreport />

            }
        </div>
    )
}

export default Main