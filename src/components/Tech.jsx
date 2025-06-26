import { technologies } from "../constants";
import BallCanvas from "./Ball";

const Tech = () => {
  return (
      <div className='flex flex-row flex-wrap justify-center gap-10 max-w-7xl mx-auto'>
        {technologies.map((technology) => (
          <div className='w-32 h-32' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
  );
};

export default Tech;