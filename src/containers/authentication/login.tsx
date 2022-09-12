import React from "react";
import { Navigate } from "react-router-dom";
import { TextInput, Button, H1, Link, Form } from "../../components";
import { useAuth } from "../../context/auth";

export const Login = () => {
  const { login, isLoggedIn } = useAuth();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target));
    login(formData);
  };

  if (isLoggedIn()) {
    return <Navigate to="/dashboard/resume" replace={true} />;
  }

  return (
    <div>
      <H1>Login</H1>
      <Form onSubmit={handleFormSubmit}>
        <TextInput placeholder="E-mail ou CPF" name="username" />
        <TextInput type="password" placeholder="Password" name="password" />
        <Button type="submit">Login</Button>
      </Form>
      <Link href="/recuperar-senha">Recuperar senha</Link>
    </div>
  );
};
