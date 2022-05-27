import React from 'react'
import { DatePicker, Form, Space } from 'antd';
import type { DatePickerProps } from 'antd';
import { setEndDate } from '../../state-manager/report/reportSlice'
import { useAppDispatch } from '../../state-manager/hooks';
const EndDateFilter: React.FC = () => {

    const dispatch = useAppDispatch();

    const { Item } = Form;

    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
        dispatch(setEndDate(dateString));
    };

    return (
        <div>
            <Item rules={[{ required: true } ]} name='to'>
                <DatePicker onChange={onChange} placeholder='End Date' />
            </Item>
        </div>
    )
}

export default EndDateFilter