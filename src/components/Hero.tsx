import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <div className="h-[600px] overflow-hidden">
      <img 
        src={hero} 
        className="w-full h-full object-cover object-center transform scale-105 hover:scale-100 transition-transform duration-10000" 
        alt="Delicious food selection"
      />
    </div>
  );
};

export default Hero;