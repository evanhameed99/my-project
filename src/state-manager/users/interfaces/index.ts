
export interface userData {
userId : string;
firstName : string;
lastName : string;
email : string;
}
export interface usersResponse {
    code: number;
    data: userData[],
    error: any
}
