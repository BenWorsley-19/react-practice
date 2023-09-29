import { motion } from 'framer-motion';
  
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          {/* TODO These 2 divs create the line with a cirlce on the end in the background */}
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Ben</span> </h1>
          {/* TODO: Split this into sections. 1st bit up to I'd say, next bit my description, then the but summing */}
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a software professional who loves to build successful applications while growing and mentoring people.  
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  )
}

export default Hero