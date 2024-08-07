import Footer from "../components/Footer";

export const MainLayout = ({ children, showFooter }) => {
  return (
    <div className="pb-8">
      <div className="App font-poppins fill-fitness-color-light h-full">
        {children}
      </div>
      {showFooter && <Footer />}
    </div>
  );
};
