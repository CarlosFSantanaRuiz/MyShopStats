export interface User {
    success: boolean;
    token: String;
    msg: String;
    user: {
        _id: String;
        email: String;
        role: String;
    }
}
