import { LoginForm } from "../pages/auth/sign-in";

export async function login(login: LoginForm): Promise<boolean> {
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
            localStorage.setItem("devx-user-token", res);
            return true;
        })
        .catch((err) => {
            alert(err);
            return false;
        });
}
