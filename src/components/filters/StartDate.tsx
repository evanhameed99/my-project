import React from 'react'
import { DatePicker, Form, Space } from 'antd';
import type { DatePickerProps } from 'antd';
import { setStartDate } from '../../state-manager/report/reportSlice'
import { useAppDispatch } from '../../state-manager/hooks';
const StartDateFilter: React.FC = () => {

    const { Item } = Form
    const dispatch = useAppDispatch();

    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
        dispatch(setStartDate(dateString))
    };

    return (
        <div>
            <Item rules={[{ required: true } ]} name='from'>
                <DatePicker onChange={onChange} placeholder='Start Date' />
            </Item>
        </div>
    )
}

export default StartDateFilter