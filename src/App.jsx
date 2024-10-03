// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Navbar from "./componet/Navbar/Navbar";
import Hero from "./componet/Hero/Hero";
import Category from "./componet/Category/Category";
import Category2 from "./componet/Category/Category2.jsx";
import Services from "./componet/Service/Services";
import Banner from "./componet/Banner/Banner";
import headphone from "./assets/hero/headphone.png";
import Product from "./componet/Product/Product.jsx";
import smartwatch2 from "./assets/category/smartwatch2-removebg-preview.png";
import Blogs from "./componet/Blogs/Blogs";
import Partners from "./componet/Partners/Partners.jsx";
import Footer from "./componet/Footer/footer.jsx";
import Popup from "./componet/Popup/Popup";
import AOS from "aos";
import "aos/dist/aos.css";
import Login from "./componet/Popup/Login.jsx";
import Registration from "./componet/Popup/Registration.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "./componet/About/About.jsx";

const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Oct to 28 Oct",
  image: headphone,
  title2: "Air solo Bass",
  title3: "Winter Sale",
  title4: "Discover the ultimate listening experience. Click below to explore more features and find your perfect pair of wireless headphones.",
  bgColor: "#f42c37",
};
const BannerData2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "10 Oct to 28 Oct",
  image: smartwatch2,
  title2: "Smart Solo",
  title3: "Winter Sale",
  title4: "Seamlessly integrate your smartwatch with your smartphone for a unified experience.",
  bgColor: "#2dcc6f",
};

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);
  const [loginPopup, setLoginPopup] = useState(false);
  const [registrationPopup, setRegistrationPopup] = useState(false);

  const handlerOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  const handleLoginPopup = () => {
    setLoginPopup(!loginPopup)
  };

  const handleRegistrationPopup = () => {
    setRegistrationPopup(!registrationPopup)
  };

  React.useEffect(() => {
    AOS.init(
      {
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
        offset: 100,
      });
    AOS.refresh();
  }, []);
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Router>
        <Navbar handlerOrderPopup={handlerOrderPopup} handleLoginPopup={handleLoginPopup} />
        <Routes>
          <Route path="/" element={<Hero handlerOrderPopup={handlerOrderPopup} />} />
          <Route path="/shop" element={<Product />} />
          <Route path="/blog" element={<Blogs />} />
        </Routes>
        {/* <Hero handlerOrderPopup={handlerOrderPopup} /> */}
        <Category />
        <Category2 />
        <Services />
        <Banner data={BannerData} />
        <Product handleLoginPopup={handleLoginPopup}/>
        <Banner data={BannerData2} />
        <Blogs />
        <Partners />
        {/* <About /> */}
        <Footer />
        <Popup orderPopup={orderPopup} handlerOrderPopup={handlerOrderPopup} />
        <Login loginPopup={loginPopup} handleLoginPopup={handleLoginPopup} handleRegistrationPopup={handleRegistrationPopup} />
        <Registration registrationPopup={registrationPopup} handleLoginPopup={handleLoginPopup} handleRegistrationPopup={handleRegistrationPopup} />
      </Router>
    </div>
  );
};

export default App;
