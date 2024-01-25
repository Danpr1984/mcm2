import LoginForm from "../auth/LoginForm";

const HomePage = () => {
  return (
    <section className="flex h-[calc(100vh-64px)] flex-col items-center bg-indigo-600 md:flex-row">
      <div className="hidden w-full md:w-1/2 lg:block xl:w-2/3">
        <img
          src="images/colourwheel.png"
          alt=""
          className="g mx-auto flex max-h-[calc(100vh-64px)] object-cover"
        />
      </div>

      <div
        className="flex w-full items-center justify-center rounded-lg bg-white px-6 pb-6 md:mx-auto md:w-1/2 md:max-w-md lg:h-full lg:max-w-full lg:rounded-none
          lg:px-16 xl:w-1/3 xl:px-12"
      >
        <LoginForm />
      </div>
    </section>
  );
};

export default HomePage;
