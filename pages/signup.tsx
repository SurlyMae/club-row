import AuthForm from "../components/authForm";

const SignUp = () => {
  return <AuthForm route="signup" />;
};

SignUp.isAuthPage = true;

export default SignUp;
