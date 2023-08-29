import { shoe8 } from "../assets/images";
import { Button } from "../components/Button";
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div>
        <h2
          className="mt-10 font-palanquin 
        text-4xl capitalize font-bold lg:max-w-lg"
        >
          We Provide You
          <span className="text-coral-red "> Super</span>
          <span className="text-coral-red "> Quality</span> Shoe
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Discover Stylish Nike arrivals,quality comfort, and innovation for
          your active life.Discover Stylish Nike arrivals,quality comfort, and
          innovation for your active life.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfactions
        </p>
        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img
          src={shoe8}
          width={570}
          height={522}
          alt=""
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
