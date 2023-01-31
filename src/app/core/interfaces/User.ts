//User Info Response (AuthMe endopoint)
export interface User {
    first_name: string;
    last_name: string;
    email: string;
// password: string; por seguridad no tipamos el password, por mas que se reciba
    points: number;
    roleId: number;
}