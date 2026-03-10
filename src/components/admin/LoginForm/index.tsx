"use client";

import { Button } from "@/components/Button";
import { InputText } from "@/components/InputText";
import { LogInIcon } from "lucide-react";
import clsx from "clsx";
import { loginAction } from "@/actions/login/login-action";
import { useActionState, useEffect } from "react";
import { toast } from "react-toastify";
import Link from "next/link";

export function LoginForm() {
  const initialState = {
    email: "",
    errors: [],
  };
  const [state, action, isPending] = useActionState(loginAction, initialState);

  useEffect(() => {
    if (state.errors.length > 0) {
      toast.dismiss();
      state.errors.forEach((error) => toast.error(error));
    }
  }, [state]);

  return (
    <div
      className={clsx(
        "flex items-center justify-center",
        "text-center max-w-sm mt-16 mb-32 mx-auto",
      )}
    >
      <form action={action} className="flex flex-col flex-1 gap-6">
        <InputText
          type="email"
          name="email"
          labelText="E-mail"
          placeholder="Seu e-mail"
          disabled={isPending}
          defaultValue={state.email}
          required
        />

        <InputText
          type="password"
          name="password"
          labelText="Senha"
          placeholder="Sua senha"
          disabled={isPending}
          required
        />

        <Button disabled={isPending} type="submit" className="mt-4">
          <LogInIcon />
          Entrar
        </Button>

        <p className="text-sm/tight">
          <Link href="/user/new">Criar minha conta</Link>
        </p>
      </form>
    </div>
  );
}
