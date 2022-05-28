import { Button, Form } from 'antd'
import React from 'react'

const GenerateButton = () => {

    const { Item } = Form;

    return (

        <Item >
            <Button htmlType='submit' className='generateBtn'>Generate report</Button>
        </Item>
    )
}

export default GenerateButton   