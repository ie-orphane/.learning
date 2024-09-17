export default function Register() {
  return (
    <main className="bg-white h-[calc(100vh-2rem)] flex items-center overflow-hidden">
      <div className="w-1/2 h-full flex items-center text-start justify-center">
        <div className="flex flex-col w-2/3">
          <h1 className="text-4xl font-bold">Start your journey !</h1>
          <h4 className="text-xl mb-4 text-gray-400 font-medium">Create your account now.</h4>

          <form className="flex flex-col gap-y-2">
            {["name", "email", "password"].map((name, index) => (
              <div key={index} className="mb-4">
                <label htmlFor={name} className="block capitalize font-medium mb-2">
                  {name}
                </label>
                <input
                  className="shadow appearance-none border-2 border-black/25 focus:border-black w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id={name}
                  name={name}
                  type={name}
                  placeholder={`Enter your ${name}`}
                />
              </div>
            ))}

            <button className="mt-2 button border-2 border-transparent text-white bg-black hover:bg-transparent hover:text-black hover:border-black font-medium px-12 py-3 hover:translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0">
              Sign up
            </button>
          </form>

          <p className="mt-12">
            Already have an account ?{" "}
            <a href="/" className="text-gray-400">
              Signin
            </a>
          </p>
        </div>
      </div>

      <div className="w-1/2 h-full flex items-center text-start justify-center">
        <div className="flex flex-col w-2/3">
          <h1 className="text-4xl font-bold">Welcome back !</h1>
          <h4 className="text-xl mb-4 text-gray-400 font-medium">Create your account now.</h4>

          <form className="flex flex-col gap-y-2">
            {["email", "password"].map((name, index) => (
              <div key={index} className="mb-4">
                <label htmlFor={name} className="block capitalize font-medium mb-2">
                  {name}
                </label>
                <input
                  className="shadow appearance-none border-2 border-black/25 focus:border-black w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id={name}
                  name={name}
                  type={name}
                  placeholder={`Enter your ${name}`}
                />
              </div>
            ))}

            <button className="mt-2 button border-2 border-transparent text-white bg-black hover:bg-transparent hover:text-black hover:border-black font-medium px-12 py-3 hover:translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0">
              Login
            </button>
          </form>

          <p className="mt-12">
            {"Don't have an account ?"}
            <a href="/" className="ml-2 text-gray-400">
              Signin
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
