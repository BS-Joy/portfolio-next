import { Toaster } from "@/components/ui/sonner";
import LogInForm from "./components/LogInForm";

const LoginPage = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <LogInForm />
      </div>
      <Toaster richColors position="top-center" theme="light" />
    </>
  );
};

export default LoginPage;
