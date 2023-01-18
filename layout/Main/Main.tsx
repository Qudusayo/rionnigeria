import Footer from "../../components/Footer/Footer";
import Subscribe from "../../components/Subscribe/Subscribe";

export default function Main({ children }) {
  return (
    <>
      {children}
      <Subscribe />
      <Footer />
    </>
  );
}
