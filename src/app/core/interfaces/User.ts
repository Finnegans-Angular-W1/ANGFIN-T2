//User Info Response (AuthMe endopoint)
export interface User {
    id:number;
    first_name: string;
    last_name: string;
    email: string;
// password: string; Encrypted password
    points: number;
    roleId: number;
    createdAt: string;//Creation date
    updatedAt: string;
}