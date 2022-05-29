import { IReportProp, reportResponse } from './interfaces/index';

const url = process.env.REACT_APP_API_BASE_URL

export const getProjects = async () => {
    const response = await fetch(`${url}/projects`);
    const data = await response.json();
    return data;
}
export const getGateways = async () => {
    const response = await fetch(`${url}/gateways`);
    const data = await response.json();
    return data;
}

export const generateReport = async (body: IReportProp) => {
    const response = await fetch(`${url}/report`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    const content: reportResponse = await response.json();
    return content;
}