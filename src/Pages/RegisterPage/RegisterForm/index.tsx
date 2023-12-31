import { SubmitHandler, useForm } from "react-hook-form";
import { registerFormSchema, TRegisterForm } from "../RegisterFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { Input } from "../../../Components/Input";
import { UserContext } from "../../../Providers/UserContexts/UserContexts";
import { StyledButton } from "../../../Styles/buttons";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterForm>({
    resolver: zodResolver(registerFormSchema),
  });

  const { userRegister } = useContext(UserContext);

  const submit: SubmitHandler<TRegisterForm> = (formData) => {
    userRegister(formData);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input
        type="text"
        placeholder="Nome"
        {...register("name")}
        error={errors.name}
      />
      <Input
        type="email"
        placeholder="E-mail"
        {...register("email")}
        error={errors.email}
      />
      <Input
        type="password"
        placeholder="Senha"
        {...register("password")}
        error={errors.password}
      />

      <Input
        type="password"
        placeholder="Confirmar senha"
        {...register("confirm")}
        error={errors.confirm}
      />
      <div className="submit__container">
        <StyledButton size="sm" type="submit">
          Cadastrar-se
        </StyledButton>
      </div>
    </form>
  );
};
