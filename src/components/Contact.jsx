import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { contactLinks } from "../constants";
import ModelViewer from "./ModelViewer";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useGSAP(() => {
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 60,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(leftRef.current, {
      opacity: 0,
      x: -50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: leftRef.current,
        start: "top 90%",
      },
    });

    gsap.from(rightRef.current, {
      opacity: 0,
      x: 50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: rightRef.current,
        start: "top 90%",
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen px-8 py-16 relative overflow-hidden flex flex-col">
      <img
        src="/sections/left.svg"
        alt="background image"
        className="hidden sm:block absolute inset-0 w-full h-full object-contain z-0"
      />
      <div className="w-full max-w-7xl mx-auto mb-6">
        <h1 className="
                text-4xl sm:text-6xl font-extrabold max-w-fit mb-4
                bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 
                text-transparent bg-clip-text
                ">
          Contact Me
        </h1>
        <p className="text-2xl">
          Let's get in touch — I'm open for projects, collabs & opportunities.
        </p>
      </div>
      <div className="w-full max-w-7xl mx-auto">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 z-50">
          <div ref={leftRef} 
          className="space-y-6 border rounded-2xl border-gray-800 px-4 py-4 bg-center bg-gradient-to-br from-gray-900 via-gray-950 to-black shadow-[0_0_25px_rgba(255,255,255,0.05)]"
          // style={{ backgroundImage: "url('/sections/left.svg')" }}
          >
            {contactLinks.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl p-4 border border-gray-800 hover:bg-gray-900 transition-all duration-300 group max-w-xs"
              >
                <h3 className="text-xl font-bold mb-1 group-hover:text-pink-500 transition-colors duration-300">
                  {item.label}
                </h3>
                <p className="text-gray-400 text-sm">{item.value}</p>
              </a>
            ))}
          </div>
          <div ref={rightRef} className="rounded-2xl overflow-hidden shadow-lg border border-gray-800 bg-gray-950 z-100">
            <ModelViewer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
