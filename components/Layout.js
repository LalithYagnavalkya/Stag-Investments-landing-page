import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children, togglePricingPage }) => {
  return (
    <div className="content">
      <Navbar togglePricingPage={togglePricingPage} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
