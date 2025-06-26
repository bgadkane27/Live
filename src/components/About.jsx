// import { useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";
// import { SplitText } from "gsap/SplitText";
// import { AudioWaveform, Text } from "lucide-react";

// gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(SplitText);

// const About = () => {
//   const aboutRef = useRef();
//   const cardsRef = useRef([]);
//   const textRef = useRef();
//   const splitInstance = useRef();

//   useGSAP(() => {
//     gsap.from(aboutRef.current, {
//       y: 100,
//       opacity: 0.2,
//       duration: 1,
//       ease: "bounce",
//       scrollTrigger: {
//         trigger: aboutRef.current,
//         start: "top 80%",
//         toggleActions: "play none none reverse",
//       },
//     });
//   }, []);

//   useGSAP(() => {
//     const split = new SplitText(".split-me", {
//       type: 'chars',
//     });

//     splitInstance.current = gsap.from(split.chars, {
//       yPercent: "random([-100, 100])",
//       ease: "back.out",
//       autoAlpha: 0,
//       stagger: {
//         amount: 1.5,
//         from: "random"
//       }
//     });
//   }, []);

//   const replayAnimation = () => {
//     splitInstance.current.timeScale(1).restart();
//   };

//   useGSAP(() => {
//     const split = new SplitText(".split-words", {
//       type: 'chars, words, lines',
//     });

//     splitInstance.current.words = gsap.from(split.words, {
//       // yPercent: "random([-100, 100])",
//       yPercent: 150,
//       // ease: "back.inOut",
//       autoAlpha: 0,
//       stagger: 0.08
//     });
//   }, []);

//   const replayWordAnimation = () => {
//     splitInstance.current.words.timeScale(1).restart();
//   };

//   useGSAP(() => {
//     const split = new SplitText(".split-line", {
//       type: 'lines',
//     });

//     splitInstance.current.lines = gsap.from(split.lines, {
//       yPercent: 150,
//       autoAlpha: 0,
//       stagger: 0.08
//     });
//   }, []);

//   const replayLineAnimation = () => {
//     splitInstance.current.lines.timeScale(1).restart();
//   };

//   return (
//     <section
//       ref={aboutRef}
//       className="w-full min-h-screen relative overflow-hidden flex flex-col px-8 py-14">
//       <video
//         autoPlay
//         muted
//         loop
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover opacity-40"
//         src="/sections/section2.mp4"
//       />
//       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-0"></div>
//       <div className="flex flex-col items-center justify-center">
//         <h2 className="text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text relative z-10">
//           Introduction
//         </h2>
//         <p className="text-center text-lg mb-14 relative z-10">
//           Once a banker, now a QA/QC engineer — committed to delivering quality and reliability in every project I undertake.
//         </p>
//       </div>
//       <div className="w-full max-w-7xl mx-auto p-4 z-10">
//         <div className="flex flex-col items-end justify-end mb-2 sm:mb-0">
//           <div className="flex flex-col gap-4 max-w-xs p-4 relative overflow-hidden rounded-xl border border-slate-700">
//             <img
//               src="/sections/left.svg"
//               alt="card background"
//               className="absolute inset-0 w-full h-full object-cover"
//             />
//             <a
//               className="text-2xl font-semibold cursor-pointer max-w-fit z-10"
//               onClick={replayAnimation}
//               title="Spilt the characters 🎢"
//               role="button"
//               tabIndex={0}
//             ><AudioWaveform /></a>
//             <h1
//               ref={textRef}
//               className="split-me text-justify">A passionate QA/QC Engineer with a <br /> sharp eye for quality, precision, and software reliability.</h1>
//           </div>
//         </div>
//         <div className="flex flex-col items-center justify-center mb-2 sm:mb-0">
//           <div className="flex flex-col gap-4 max-w-xs p-4 relative overflow-hidden rounded-xl border border-slate-700">
//             <img
//               src="/sections/left.svg"
//               alt="card background"
//               className="absolute inset-0 w-full h-full object-cover"
//             />
//             <a
//               className="text-2xl font-semibold cursor-pointer max-w-fit z-10"
//               onClick={replayLineAnimation}
//               title="Spilt the lines 🎢"
//               role="button"
//               tabIndex={1}
//             ><Text /></a>
//             <h1
//               ref={textRef}
//               className="split-line">Behind every great product is a robust quality strategy. I specialize in designing those
//               strategies — ensuring every system I test is scalable, reliable, and flawless. Precision isn't
//               just a requirement for me, it's a mindset.</h1>
//           </div>
//         </div>
//         <div className="flex flex-col items-start justify-end mb-2 sm:mb-0">
//           <div className="flex flex-col gap-4 max-w-xs p-4 relative overflow-hidden rounded-xl border border-slate-700">
//             <img
//               src="/sections/left.svg"
//               alt="card background"
//               className="absolute inset-0 w-full h-full object-cover"
//             />
//             <a
//               className="text-2xl font-semibold cursor-pointer max-w-fit z-10"
//               onClick={replayAnimation}
//               title="Spilt the characters 🎢"
//               role="button"
//               tabIndex={2}
//             ><AudioWaveform /></a>
//             <h1
//               ref={textRef}
//               className="split-me">Quality isn't a task — it's a discipline. I <br />
//               build reliable systems through rigorous testing and precision-driven processes.</h1>
//           </div>
//         </div>
//         <div className="flex flex-col items-end justify-end mb-2 sm:mb-0">
//           <div className="flex flex-col gap-4 max-w-xs p-4 relative overflow-hidden rounded-xl border border-slate-700">
//             <img
//               src="/sections/left.svg"
//               alt="card background"
//               className="absolute inset-0 w-full h-full object-cover"
//             />
//             <a
//               className="text-2xl font-semibold cursor-pointer max-w-fit z-10"
//               onClick={replayWordAnimation}
//               title="Spilt the words 🎢"
//               role="button"
//               tabIndex={3}
//             ><Text /></a>
//             <h1
//               ref={textRef}
//               className="split-words">I'am working as a QA/QC Engineer in the ERP/HRMS enterprise level applications for 3+ years.</h1>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { AudioWaveform, Text } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const About = () => {
  const aboutRef = useRef();
  const textRef = useRef();
  const splitInstance = useRef({});
  const cardRefs = useRef([]);

  useGSAP(() => {
    // Section entrance
    gsap.from(aboutRef.current, {
      y: 100,
      opacity: 0.2,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 80%",
      },
    });

    // Card entrance animations
    cardRefs.current.forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        delay: i * 0.1,
      });
    });
  }, []);

  // Split characters
  useGSAP(() => {
    const split = new SplitText(".split-me", { type: "chars" });
    splitInstance.current.chars = gsap.from(split.chars, {
      yPercent: "random([-100, 100])",
      autoAlpha: 0,
      ease: "back.out",
      stagger: {
        amount: 1.5,
        from: "random",
      },
    });
  }, []);

  const replayAnimation = () => {
    splitInstance.current.chars.timeScale(1).restart();
  };

  // Split words
  useGSAP(() => {
    const split = new SplitText(".split-words", { type: "chars, words, lines" });
    splitInstance.current.words = gsap.from(split.words, {
      yPercent: 150,
      autoAlpha: 0,
      stagger: 0.08,
    });
  }, []);

  const replayWordAnimation = () => {
    splitInstance.current.words.timeScale(1).restart();
  };

  // Split lines
  useGSAP(() => {
    const split = new SplitText(".split-line", { type: "lines" });
    splitInstance.current.lines = gsap.from(split.lines, {
      yPercent: 150,
      autoAlpha: 0,
      stagger: 0.08,
    });
  }, []);

  const replayLineAnimation = () => {
    splitInstance.current.lines.timeScale(1).restart();
  };

  return (
    <section
      ref={aboutRef}
      className="w-full min-h-screen relative overflow-hidden flex flex-col px-8 py-14"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        src="/sections/section2.mp4"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-0"></div>

      <div className="flex flex-col items-center justify-center relative z-10">
        <h2 className="text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
          Introduction
        </h2>
        <p className="text-center text-lg mb-14 text-gray-300">
          Once a banker, now a QA/QC engineer — committed to delivering quality and reliability in every project I undertake.
        </p>
      </div>

      <div className="w-full max-w-7xl mx-auto p-4 z-10 space-y-8">
        {/* Card 1 */}
        <div className="flex flex-col items-end justify-end mb-2 sm:mb-0">
          <div
            ref={(el) => (cardRefs.current[0] = el)}
            className="flex flex-col gap-4 max-w-xs p-4 relative overflow-hidden rounded-xl border border-slate-700"
          >
            <img
              src="/sections/left.svg"
              alt="card background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <a
              className="text-2xl font-semibold cursor-pointer max-w-fit z-10"
              onClick={replayAnimation}
              title="Split the characters 🎢"
              role="button"
              tabIndex={0}
            >
              <AudioWaveform />
            </a>
            <h1 ref={textRef} className="split-me text-justify z-10">
              A skilled QA/QC Engineer with a <br /> sharp eye for quality, precision, and <br /> software reliability.
            </h1>
          </div>
        </div>
        {/* Card 2 */}
        <div className="flex flex-col items-center justify-center mb-2 sm:mb-0">
          <div
            ref={(el) => (cardRefs.current[1] = el)}
            className="flex flex-col gap-4 max-w-xs p-4 relative overflow-hidden rounded-xl border border-slate-700"
          >
            <img
              src="/sections/left.svg"
              alt="card background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <a
              className="text-2xl font-semibold cursor-pointer max-w-fit z-10"
              onClick={replayLineAnimation}
              title="Split the lines 🎢"
              role="button"
              tabIndex={1}
            >
              <Text />
            </a>
            <h1 ref={textRef} className="split-line text-justify z-10">
              Behind every great product is a robust quality strategy. I specialize in designing those strategies — ensuring every system I test is scalable, reliable, and flawless. Precision isn't just a requirement for me, it's a mindset.
            </h1>
          </div>
        </div>
        {/* Card 3 */}
        <div
          ref={(el) => (cardRefs.current[2] = el)}
          className="flex flex-col gap-4 max-w-xs p-4 relative overflow-hidden rounded-xl border border-slate-700"
        >
          <img
            src="/sections/left.svg"
            alt="card background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <a
            className="text-2xl font-semibold cursor-pointer max-w-fit z-10"
            onClick={replayAnimation}
            title="Split the characters 🎢"
            role="button"
            tabIndex={2}
          >
            <AudioWaveform />
          </a>
          <h1 ref={textRef} className="split-me text-justify z-10">
            Quality isn't a task — it's a discipline. I build reliable systems through rigorous testing and precision-driven processes.
          </h1>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-end justify-end mb-2 sm:mb-0">
          <div
            ref={(el) => (cardRefs.current[3] = el)}
            className="flex flex-col gap-4 max-w-xs p-4 relative overflow-hidden rounded-xl border border-slate-700"
          >
            <img
              src="/sections/left.svg"
              alt="card background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <a
              className="text-2xl font-semibold cursor-pointer max-w-fit z-10"
              onClick={replayWordAnimation}
              title="Split the words 🎢"
              role="button"
              tabIndex={3}
            >
              <Text />
            </a>
            <h1 ref={textRef} className="split-words text-justify z-10">
              I'm working as a QA/QC Engineer in ERP/HRMS enterprise-level applications for 3+ years.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

