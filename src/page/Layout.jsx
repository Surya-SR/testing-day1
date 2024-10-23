import Counter from "../components/Counter";
import DemoPrimeTest from "../components/DemoPrimeTest";
import Header from "../components/Header";
import Input from "../components/Input";

const Layout = ({ children }) => {
  return (
    <main>
      {/*     "build:dev": "env-cmd -f .env.dev npm run test && env-cmd -f .env.dev npm run build",
    "build:qa": "env-cmd -f .env.qa npm run test && env-cmd -f .env.qa npm run build",
    "build:uat": "env-cmd -f .env.uat npm run test && env-cmd -f .env.uat npm run build",
    "build:prod": "env-cmd -f .env.prod npm run test && env-cmd -f .env.prod npm run build", */}
      <Header />
      <Counter></Counter>
        <Input></Input>
        <DemoPrimeTest></DemoPrimeTest>
      <section>{children}</section>
    </main>
  );
};

export default Layout;
