interface UserLogin{
    id: number;
    nome: string;
    usuario: string;
    email: string;
    foto: string;
    senha: string;
    token?: string | null;
}

export default UserLogin;