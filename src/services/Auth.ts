import { UserForm } from "../pages/auth/sign-in";

export async function signIn(login: UserForm): Promise<boolean> {
    return fetch("http://localhost:7000/api/v1/auth/sign-in", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(login),
    })
        .then((res) => res.json())
        .then((res) => {
            if (res?.issue) {
                alert(res.issue);
                return false;
            }
            localStorage.setItem("devx-user", JSON.stringify(res.user));
            localStorage.setItem("devx-token", res.jwt);
            return true;
        })
        .catch((err) => {
            alert(err);
            return false;
        });
}

export async function signUp(login: UserForm): Promise<boolean> {
    return fetch("http://localhost:7000/api/v1/auth/sign-up", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(login),
    })
        .then((res) => res.json())
        .then((res) => {
            if (res?.issue) {
                alert(res.issue);
                return false;
            }
            return true;
        })
        .catch((err) => {
            alert(err);
            return false;
        });
}
