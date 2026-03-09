"use server";

import { createLoginSession, verifyPassword } from "@/lib/login/manage-login";
import { asyncDelay } from "@/utils/async-delay";
import { redirect } from "next/navigation";

type LoginActionState = {
    username: string;
    error: string;
};

export async function loginAction(state: LoginActionState, formDate: FormData) {
    const allowLogin = Boolean(Number(process.env.ALLOW_LOGIN));

    if (!allowLogin) {
        return {
            username: "",
            error: "Login not allowed",
        };
    }

    await asyncDelay(5000);

    if (!(formDate instanceof FormData)) {
        return {
            username: "",
            error: "Dados inválidos",
        };
    }

    // Dados que o usuário digitou no form
    const username = formDate.get("username")?.toString().trim() || "";
    const password = formDate.get("password")?.toString().trim() || "";

    if (!username || !password) {
        return {
            username: username,
            error: "Digite o usuário e senha",
        };
    }

    // Aqui eu checaria se o usuário existe na base de dados
    const isUsernameValid = username === process.env.LOGIN_USER;
    const isPasswordValid = await verifyPassword(
        password,
        process.env.LOGIN_PASS || "",
    );

    if (!isUsernameValid || !isPasswordValid) {
        return {
            username,
            error: "Usuário ou senho inválidos",
        };
    }

    await createLoginSession(username);
    redirect("/admin/post");
}
