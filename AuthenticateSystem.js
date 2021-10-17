
export class AuthenticateSystem {
    static login(authenticatable, password) {
        if (AuthenticateSystem.Authenticatable(authenticatable)) {
            return authenticatable.authenticate(password);
        }
        return false;
    }

    static Authenticatable(authenticatable) {
        return "authenticate" in authenticatable &&
        authenticatable.authenticate instanceof Function
    }
}
