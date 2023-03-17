export class AuthResponse{
    id: number;
    userName: String;
    email: String;
    password: String;
    name: String;
}

export class authResponseSuccess{
    results: AuthResponse[]
}
