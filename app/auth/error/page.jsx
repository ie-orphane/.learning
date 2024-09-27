import AuthButton from "@/components/AuthButton";

const AuthError = () => {
  return (
    <main className="bg-white h-[calc(100vh-2rem)] flex justify-center items-center overflow-hidden">
      <div className="grid place-items-center gap-y-12">
        <h1 className="text-4xl">Login Error</h1>
        <AuthButton>Retry login</AuthButton>
      </div>
    </main>
  );
};

export default AuthError;
