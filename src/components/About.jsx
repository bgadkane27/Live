import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { AudioWaveform, Text } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const About = () => {
  const aboutRef = useRef();
  const cardsRef = useRef([]);
  const textRef = useRef();
  const splitInstance = useRef();

  useGSAP(() => {
    gsap.from(aboutRef.current, {
      y: 100,
      opacity: 0,
      skewX:10,
      duration: 1,
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

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

  useGSAP(() => {
    const split = new SplitText(".split-me", {
      type: 'chars',
    });

    splitInstance.current = gsap.from(split.chars, {
      yPercent: "random([-100, 100])",
      ease: "back.out",
      autoAlpha: 0,
      stagger: {
        amount: 1.5,
        from: "random"
      }
    });
  }, []);

  const replayAnimation = () => {
    splitInstance.current.timeScale(1).restart();
  };

  useGSAP(() => {
    const split = new SplitText(".split-words", {
      type: 'chars, words, lines',
    });

    splitInstance.current.words = gsap.from(split.words, {
      // yPercent: "random([-100, 100])",
      yPercent: 150,
      // ease: "back.inOut",
      autoAlpha: 0,
      stagger: 0.08
    });
  }, []);

  const replayWordAnimation = () => {
    splitInstance.current.words.timeScale(1).restart();
  };

  useGSAP(() => {
    const split = new SplitText(".split-line", {
      type: 'lines',
    });

    splitInstance.current.lines = gsap.from(split.lines, {
      yPercent: 150,
      autoAlpha: 0,
      stagger: 0.08
    });
  }, []);

  const replayLineAnimation = () => {
    splitInstance.current.lines.timeScale(1).restart();
  };

  return (
    <section
      ref={aboutRef}
      className="w-full min-h-screen relative overflow-hidden bg-black flex flex-col px-6 py-24">
      {/* Optional background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        src="/sections/section2.mp4"
      />
      <div className="w-full max-w-7xl mx-auto z-10">
        <div className="md:col-span-1 flex flex-col justify-center z-50">
          <h1 className="
          text-4xl sm:text-6xl font-extrabold mb-6 w-fit
          bg-gradient-to-r
          from-cyan-500 via-purple-500 to-pink-500 
          text-transparent
          bg-clip-text
          inline-block
          ">Introduction</h1>
        </div>
        <div className="flex flex-col items-end justify-end mb-2 sm:mb-0">
          <div className="flex flex-col gap-4 max-w-xs p-4 relative overflow-hidden rounded-xl border border-slate-700">
            <img
              src="/sections/left.svg"
              alt="card background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <a
              className="text-2xl font-semibold cursor-pointer max-w-fit z-10"
              onClick={replayAnimation}
              title="Spilt the characters 🎢"
              role="button"
              tabIndex={0}
            ><AudioWaveform /></a>
            <h1
              ref={textRef}
              className="split-me text-justify">A passionate QA/QC Engineer with a <br /> sharp eye for quality, precision, and software reliability.</h1>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mb-2 sm:mb-0">
          <div className="flex flex-col gap-4 max-w-xs p-4 relative overflow-hidden rounded-xl border border-slate-700">
            <img
              src="/sections/left.svg"
              alt="card background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <a
              className="text-2xl font-semibold cursor-pointer max-w-fit z-10"
              onClick={replayLineAnimation}
              title="Spilt the lines 🎢"
              role="button"
              tabIndex={1}
            ><Text /></a>
            <h1
              ref={textRef}
              className="split-line">Behind every great product is a robust quality strategy. I specialize in designing those
              strategies — ensuring every system I test is scalable, reliable, and flawless. Precision isn't
              just a requirement for me, it's a mindset.</h1>
          </div>
        </div>
        <div className="flex flex-col items-start justify-end mb-2 sm:mb-0">
          <div className="flex flex-col gap-4 max-w-xs p-4 relative overflow-hidden rounded-xl border border-slate-700">
            <img
              src="/sections/left.svg"
              alt="card background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <a
              className="text-2xl font-semibold cursor-pointer max-w-fit z-10"
              onClick={replayAnimation}
              title="Spilt the characters 🎢"
              role="button"
              tabIndex={2}
            ><AudioWaveform /></a>
            <h1
              ref={textRef}
              className="split-me">Quality isn't a task — it's a discipline. I <br />
              build reliable systems through rigorous testing and precision-driven processes.</h1>
          </div>
        </div>
        <div className="flex flex-col items-end justify-end mb-2 sm:mb-0">
          <div className="flex flex-col gap-4 max-w-xs p-4 relative overflow-hidden rounded-xl border border-slate-700">
            <img
              src="/sections/left.svg"
              alt="card background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <a
              className="text-2xl font-semibold cursor-pointer max-w-fit z-10"
              onClick={replayWordAnimation}
              title="Spilt the words 🎢"
              role="button"
              tabIndex={3}
            ><Text /></a>
            <h1
              ref={textRef}
              className="split-words">I'am working as a QA/QC Engineer in the ERP/HRMS enterprise level applications for 3+ years.</h1>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-0"></div>
    </section>
  );
};

export default About;
