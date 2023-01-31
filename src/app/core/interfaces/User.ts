//User Info Response (AuthMe endopoint)
export interface User {
    id:number;
    first_name: string;
    last_name: string;
    email: string;
    points: number;
    roleId: number;
    createdAt: string;//Creation date
    updatedAt: string;
}