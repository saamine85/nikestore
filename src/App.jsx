// import Hero from "./sections/hero";
// import Nav from "./sections/hero";

// import CustomerReviews from "./sections/customerReviews";
// import ProductPopular from "./sections/productPopular";

// import SpecialOffer from "./sections/SpecialOffer";
// import Services from "./sections/services";
// import SuperQuality from "./sections/SuperQuality";
// import Footer from "./sections/footer";
// import Subscribe from "./sections/Subscribe";

// replace it with this from indexedDB.js
import {
  Footer,
  CustomerReviews,
  ProductPopular,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
  Hero,
} from "./index.js";
import Nav from "./components/Nav.jsx";
const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <ProductPopular />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <SuperQuality />
    </section>
    <section className="bg-pale-blue padding">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className="bg-pale-blue padding-x py-10">
      <CustomerReviews />
    </section>
    <section className="padding">
      <Subscribe />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
);
// to not use the return keyword use just ()
export default App;
