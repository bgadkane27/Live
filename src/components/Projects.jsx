import { useRef } from "react";
import { projects } from "../constants"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SquareArrowOutUpRight } from "lucide-react";

const Projects = () => {
    const sectionRef = useRef(null);
    const cardRef = useRef([]);

    useGSAP(() => {
        gsap.from(sectionRef.current, {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
            },
        });

        cardRef.current.forEach((card, i) => {
            gsap.fromTo(
                card,
                { y:80 , opacity: 0.5, scale: 0.85, rotateX: 15, skewY: 5 },
                {
                    y: 0,
                    opacity: 1,
                    scale:1,
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
                    Projects
                </h1>
                <p className="text-2xl">
                    Projects Aren't Just Work — It Reflects <span className="text-cyan-300">Passion, quality and reliability</span>.
                </p>
            </div>

            <div className="w-full max-w-7xl mx-auto flex items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, i) => (
                        <div
                            key={project.id}
                            ref={(el) => (cardRef.current[i] = el)}
                            className="group relative p-6 rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 via-gray-950 to-black hover:from-gray-800 hover:via-gray-900 hover:to-gray-950 transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.05)]"
                        >
                            <h3 className="text-lg font-semibold mb-3">{project.name}</h3>
                            <p className="text-gray-400 text-sm text-justify mb-4 leading-normal tracking-wide">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="text-sm bg-gray-800 text-gray-200 px-2 py-1 rounded-lg"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute top-3 right-3"
                            >
                                <SquareArrowOutUpRight size={20} />
                            </a>
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 pointer-events-none" />
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default Projects