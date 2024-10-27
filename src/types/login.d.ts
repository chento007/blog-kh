export type LoginResponse = {
    token: string;
    user: {
        id: string;
        name: string;
        phone: string;
        role: string;
        picture: string;
    };
};