import { Select, Form } from 'antd'
import React from 'react'
import { selectGateways, setGatewayId } from '../../state-manager/report/reportSlice'
import { useAppSelector, useAppDispatch } from '../../state-manager/hooks';
const GatewayFilter = () => {

    const getways = useAppSelector(selectGateways);
    console.log('the getways are', getways);
    const dispatch = useAppDispatch();
    const { Option } = Select;
    const { Item } = Form;


    const onFilterChange = (value: any) => {
        dispatch(setGatewayId(value))
    }

    return (
        <div>
            <Item  rules={[{ required: true}]} name='gatewayId'>
                <Select placeholder='Select Project' style={{ width: 160 }} onChange={onFilterChange}>
                    <Option value=' '>All Gateways</Option>
                    {
                        getways &&
                        getways.length > 0 &&
                        getways.map(gateway => {
                            return <Option value={gateway.gatewayId}>{gateway.name}</Option>
                        })

                    }
                </Select>
            </Item>
        </div>
    )
}

export default GatewayFilter