import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { experiences } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const cardsRef = useRef([]);

  useGSAP(() => {
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 80,
          scale: 0.85,
          rotateX: 15,
          skewY: 5,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          skewY: 0,
          duration: 1.25,
          ease: "power4.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
          delay: i * 0.25,
        }
      );
    });
  }, []);

  return (
    <section className="w-full min-h-screen p-6 overflow-hidden relative">
      <img
        src="/sections/right.svg"
        alt="background image"
        className="hidden sm:block absolute inset-0 w-full h-full object-contain z-0"
      />
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-4">
        {/* Left Section */}
        <div className="md:col-span-1 flex flex-col justify-center z-50">
          <h1 className="
          text-4xl sm:text-6xl font-extrabold mb-6
          bg-gradient-to-r
          from-cyan-500 via-purple-500 to-pink-500 
          text-transparent
          bg-clip-text
          inline-block
          ">Experience</h1>
          <p className="mb-6 text-2xl">
            It's not a just about existence. Its about <strong className="text-[#747bff] font-extrabold">impact and cultivating</strong> a legacy that transcends time.
          </p>
        </div>
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="relative w-full h-auto group overflow-hidden rounded-xl flex flex-col gap-4 border border-slate-700"
            >
              <img
                src="/sections/left.svg"
                alt="card background"
                className="absolute inset-0 w-full h-full object-contain"
              />

              {/* Overlay for content */}
              <div className="relative z-10 p-4 h-full flex flex-col">
                <h2 className="text-lg font-semibold">{experience.title}</h2>
                <p className="text-sm">{experience.company_name}</p>
                <p className="text-xs mb-2">{experience.period}</p>
                <div className="">
                  <ul className="mt-2 space-y-2 mb-6">
                    {experience.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="text-sm text-justify">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;