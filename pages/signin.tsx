import AuthForm from "../components/authForm";

const SignIn = () => {
  return <AuthForm route="signin" />;
};

SignIn.isAuthPage = true;

export default SignIn;
