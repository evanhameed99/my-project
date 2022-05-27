export interface IProject {
    name: string;
    projectId: string;
    description: string;
    image: string;
    rule: string;
}


export interface IGateway {
    name: string;
    gatewayId: string;
    description: string;
    type: string;
}

export interface IReportProp {
    projectId: string;
    gatewayId: string;
    from: string;
    to: string;
}


export interface reportData {
    amount: number;
    created: string;
    gatewayId: string;
    modified: string;
    projectId: string;
    paymentId: string;
    userIds:  string[];
}
export interface reportResponse {
    code: number;
    data: reportData[],
    error: any
}
