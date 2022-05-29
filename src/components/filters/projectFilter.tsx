import { Form, Select } from 'antd'
import React from 'react'
import { selectProjects, setProjectId } from '../../state-manager/report/reportSlice'
import { useAppSelector, useAppDispatch } from '../../state-manager/hooks';
import '../../styles/homepage.css'

const ProjectFilter = () => {


    const projects = useAppSelector(selectProjects);
    const dispatch = useAppDispatch();

    const { Option } = Select;
    const { Item } = Form;

    const onFilterChange = (value: any) => {
        dispatch(setProjectId(value))
    }

    return (
        <div>
            <Item rules={[{ required: true}]} name='projectId'>
                <Select placeholder='Select Project' style={{ width: 160 }} onChange={onFilterChange}  >
                    <Option value='  '>All Projects</Option>
                    {
                        projects &&
                        projects.length > 0 &&
                        projects.map(project => {
                            return <Option value={project.projectId}>{project.name}</Option>
                        })

                    }
                </Select>
            </Item>
        </div>
    )
}

export default ProjectFilter