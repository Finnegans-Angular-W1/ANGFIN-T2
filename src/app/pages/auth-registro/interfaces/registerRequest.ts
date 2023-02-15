export interface RegisterRequest {
    last_name: string;
    first_name: string;
    email: string;
    password: string;
    roleID?:number;
    points?:number;
}