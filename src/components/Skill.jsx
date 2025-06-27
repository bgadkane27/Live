// import { useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { technicalSkills, softSkills } from "../constants";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// const Skill = () => {
//     const sectionRef = useRef(null);
//     const cardRefs = useRef([]);

//     useGSAP(() => {
//         gsap.from(sectionRef.current, {
//             y: 60,
//             opacity: 0,
//             duration: 1,
//             ease: "power3.out",
//             scrollTrigger: {
//                 trigger: sectionRef.current,
//                 start: "top 85%",
//             },
//         });

//         cardRefs.current.forEach((card, i) => {
//             gsap.fromTo(
//                 card,
//                 { y:80 , opacity: 0.5, scale: 0.85, rotateX: 15, skewY: 5 },
//                 {
//                     y: 0,
//                     opacity: 1,
//                     scale:1,
//                     rotateX: 0,
//                     skewY: 0,
//                     ease: "power2.out",
//                     duration: 1.25,
//                     scrollTrigger: {
//                         trigger: card,
//                         start: "top 90%",
//                         end: "top 60%",
//                         scrub: true,
//                     },
//                 }
//             );
//         });
//     }, []);

//     const addToRefs = (el) => {
//         if (el && !cardRefs.current.includes(el)) {
//             cardRefs.current.push(el);
//         }
//     };

//     return (
//         <div
//             ref={sectionRef}
//             className="w-full mx-auto px-8 py-18 relative overflow-hidden flex flex-col"
//         >
//             <div className="flex flex-col items-center justify-center">
//                 <h2 className="text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text relative z-10">
//                     Skills
//                 </h2>
//                 <p className="text-center text-gray-400 text-lg mb-8 relative z-10">
//                     Soft skills that shape my professional journey.
//                 </p>
//             </div>
//             <div 
//             ref={cardRefs}
//             className="max-w-7xl mx-auto">
//                 <div>
//                     {/* <h3 className="text-2xl font-bold mb-5">Soft Skills</h3> */}
//                     <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
//                         {softSkills.map((skill, i) => (
//                             <div
//                                 key={i}
//                                 ref={(el) => (cardRefs.current[i] = el)}
//                                 className="p-4 text-center border border-gray-800 rounded-xl bg-cover bg-center shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300 hover:scale-105"
//                                 style={{ backgroundImage: "url('/sections/right.svg')" }}
//                             >
//                                 <p className="text-white font-semibold text-xs">{skill}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Skill;

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { technicalSkills, softSkills } from "../constants";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Skill = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useGSAP(() => {
    gsap.from(sectionRef.current, {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
      },
    });

    cardRefs.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 80, opacity: 0.5, scale: 0.85, rotateX: 15, skewY: 5 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotateX: 0,
          skewY: 0,
          ease: "power2.out",
          duration: 1.25,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "top 60%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  return (
    <div
      ref={sectionRef}
      className="w-full mx-auto px-8 py-18 relative overflow-hidden flex flex-col"
    >
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text relative z-10">
          Skills
        </h2>
        <p className="text-center text-gray-400 text-lg mb-8 relative z-10">
          Soft skills are not just skills — thees are the foundation that <strong className="text-[#747bff] font-extrabold">shapes and defines </strong> my professional journey.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {softSkills.map((skill, i) => (
            <div
              key={i}
              ref={addToRefs}
              className="min-h-[80px] flex items-center justify-center p-4 text-center border border-gray-800 rounded-xl bg-cover bg-center shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300 hover:scale-105"
              style={{ backgroundImage: "url('/sections/right.svg')" }}
            >
              <p className="font-semibold sm:text-base text-xs">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;

