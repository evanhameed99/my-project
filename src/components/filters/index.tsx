import React, { useEffect } from 'react'
import { useAppDispatch } from '../../state-manager/hooks'
import { getProjectsAsync, getGatewaysAsync, generateReportAsync } from '../../state-manager/report/reportSlice'
import DateFilter from './StartDate'
import GatewayFilter from './gatewayFilter'
import ProjectFilter from './projectFilter'
import './styles.css'
import EndDateFilter from './EndDate'
import GenerateButton from './GenerateButton'
import { Button, Form } from 'antd'
const Filters = () => {
    const dispatch = useAppDispatch();

    const { Item } = Form;
    useEffect(() => {
        dispatch(getProjectsAsync());
        dispatch(getGatewaysAsync());
    }, [])

    const onFinish = (values: any) => {
        values.from = values.from.format('YYYY-MM-DD');
        values.to = values.to.format('YYYY-MM-DD');

        dispatch(generateReportAsync(values));
    };

    const onFinishFailed = (errorInfo: any) => {
    };


    return (
        <Form
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <div className="filter">
                <ProjectFilter />
                <GatewayFilter />
                <DateFilter />
                <EndDateFilter />
                <GenerateButton />
            </div>
        </Form>
    )
}

export default Filters