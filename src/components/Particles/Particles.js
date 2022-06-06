import Particles from "react-tsparticles";
import particleColorOptions from './ParticlesColors.json';

const App = () => {
  const particlesInit = (main) => {
    //console.log(main);
  };
  const particlesLoaded = (container) => {
    //console.log(container);
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particleColorOptions}      
      />
  );
};

export default App;