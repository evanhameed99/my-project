import React from 'react'
import { Select } from 'antd';
const DateFilter = () => {
    const { Option } = Select;
    return (
        <div>
            <Select placeholder='Select Date' style={{ width: 160 }}>
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
            </Select>
        </div>
    )
}

export default DateFilter