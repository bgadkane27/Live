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
            gsap.from(card, {
                opacity: 0,
                y: 50,
                duration: 0.8,
                delay: i * 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 90%",
                },
            });
        });
    }, []);

    const addToRefs = (el) => {
        if (el && !cardRefs.current.includes(el)) {
            cardRefs.current.push(el);
        }
    };

    return (
        <section
            ref={sectionRef}
            className="w-full min-h-screen mx-auto px-8 py-12 relative overflow-hidden flex flex-col"
        >
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text relative z-10">
                    Skills
                </h2>
                <p className="text-center text-gray-400 text-lg mb-14 relative z-10">
                    Soft skills that shape my professional journey.
                </p>
            </div>
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* <div>
                        <h3 className="text-2xl font-bold mb-5">Technical Skills</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {technicalSkills.map((skill, i) => (
                                <div
                                    key={i}
                                    ref={addToRefs}
                                    className="p-4 text-center border border-gray-800 rounded-xl bg-cover bg-center shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300 hover:scale-105"
                                    style={{ backgroundImage: "url('/sections/left.svg')" }}
                                >
                                    <p className="text-white font-semibold">{skill}</p>
                                </div>
                            ))}
                        </div>
                    </div> */}
                    <div>
                        <h3 className="text-2xl font-bold mb-5">Soft Skills</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {softSkills.map((skill, i) => (
                                <div
                                    key={i}
                                    ref={addToRefs}
                                    className="p-4 text-center border border-gray-800 rounded-xl bg-cover bg-center shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300 hover:scale-105"
                                    style={{ backgroundImage: "url('/sections/right.svg')" }}
                                >
                                    <p className="text-white font-semibold">{skill}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skill;
