import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <main>
      <Header />
      <section>{children}</section>
    </main>
  );
};

export default Layout;
