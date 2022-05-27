import { IReportProp, reportResponse } from './interfaces/index';
export const getProjects = async () => {
    const response = await fetch('http://178.63.13.157:8090/mock-api/api/projects');
    const data = await response.json();
    return data;
}
export const getGateways = async () => {
    const response = await fetch('http://178.63.13.157:8090/mock-api/api/gateways');
    const data = await response.json();
    return data;
}

export const generateReport = async (body: IReportProp) => {
    const response = await fetch('http://178.63.13.157:8090/mock-api/api/report', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    const content: reportResponse = await response.json();
    return content;
    console.log('conetent: ', content);
}