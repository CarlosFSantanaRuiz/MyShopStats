export interface User {
    success: boolean;
    token: String;
    msg: String;
    user: {
        _id: String;
        firstName: String;
        lastName: String;
        email: String;
        role: String;
    }
}
