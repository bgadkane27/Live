import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FLAIR_IMAGES } from "../constants";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { ThreeModel } from "../components"
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);
gsap.registerPlugin(useGSAP);

const Hero = () => {
  const heroRef = useRef();
  const contentRef = useRef(null);
  const flairRefs = useRef([]);
  flairRefs.current = [];

  // Add flair image refs
  const addToFlairRefs = (el) => {
    if (el && !flairRefs.current.includes(el)) {
      flairRefs.current.push(el);
    }
  };

  const mousePos = useRef({ x: 0, y: 0 });
  const lastMousePos = useRef({ x: 0, y: 0 });
  const cachedMousePos = useRef({ x: 0, y: 0 });
  const indexRef = useRef(0);
  const gap = 100;
  const wrapper = gsap.utils.wrap(0, 18);

  const playAnimation = (shape) => {
    let tl = gsap.timeline();
    tl.from(shape, {
      opacity: 0,
      scale: 0,
      ease: "elastic.out(1,0.3)",
    })
      .to(
        shape,
        {
          rotation: gsap.utils.random(-360, 360),
        },
        "<"
      )
      .to(
        shape,
        {
          y: "120vh",
          ease: "back.in(.4)",
          duration: 1.5,
        },
        0
      );
  };

  const animateImage = () => {
    let wrappedIndex = wrapper(indexRef.current);
    let img = flairRefs.current[wrappedIndex];

    gsap.killTweensOf(img);

    gsap.set(img, {
      clearProps: "all",
    });

    gsap.set(img, {
      opacity: 1,
      left: mousePos.current.x,
      top: mousePos.current.y,
      xPercent: -50,
      yPercent: -50,
    });

    playAnimation(img);

    indexRef.current++;
  };

  const ImageTrail = () => {
    let travelDistance = Math.hypot(
      lastMousePos.current.x - mousePos.current.x,
      lastMousePos.current.y - mousePos.current.y
    );

    cachedMousePos.current.x = gsap.utils.interpolate(
      cachedMousePos.current.x || mousePos.current.x,
      mousePos.current.x,
      0.1
    );
    cachedMousePos.current.y = gsap.utils.interpolate(
      cachedMousePos.current.y || mousePos.current.y,
      mousePos.current.y,
      0.1
    );

    if (travelDistance > gap) {
      animateImage();
      lastMousePos.current = { ...mousePos.current };
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    });

    gsap.ticker.add(ImageTrail);

    return () => {
      gsap.ticker.remove(ImageTrail);
    };
  }, []);

  useGSAP(() => {
    let split = SplitText.create(".split-mine", {
      type: 'chars',
    });

    gsap.from(split.chars, {
      // yPercent: 100,
      xPercent: "random([-100, 100])",
      ease: "back.out",
      autoAlpha: 0,
      stagger: 0.08,
      duration: 1,
    });
  }, []);


  return (
    <section
      ref={heroRef}
      className="w-full h-screen relative"
    >
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, -10, 0], fov: 10 }}>
          <ambientLight intensity={1} />
          <directionalLight position={[10, 2, 1]} intensity={1} />
          <Stars radius={50} depth={50} count={5000} factor={4} />
          <ThreeModel />
          <OrbitControls
            enableZoom={false}
            autoRotate
            minDistance={5}
            maxDistance={80}
          />
        </Canvas>
      </div>
      <div className="w-full min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-10 sm:pt-0">
        <h2 className="uppercase text-2xl sm:text-4xl tracking-widest mb-6 text-center">
          QA/QC Engineer
        </h2>
        <div ref={contentRef} className="relative flex flex-col sm:block items-center w-full">
          <img
            src="/hero/profile.jpeg"
            alt="Me"
            className="block sm:hidden w-40 h-40 mx-auto mb-6 rounded-full"
            data-aos="zoom-in"
            data-aos-duration="2000"
          />
          <p
            className="split-mine uppercase text-5xl sm:text-6xl md:text-[200px] leading-none text-center font-serif drop-shadow-xl drop-shadow-cyan-500/40"
          >
            Divyansh
          </p>
          {/* <img
            src="/hero/profile.jpeg"
            alt="Me"
            className="hidden sm:block absolute w-56 md:w-72 mx-auto left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 rounded-4xl"
            data-aos="zoom-in"
            data-aos-duration="3000"
            delay="800"
          /> */}
          <p
            // ref={textRef}
            className="split-mine uppercase text-5xl sm:text-6xl md:text-[200px] leading-none text-center font-serif drop-shadow-xl drop-shadow-pink-500/30">
            Adkane
          </p>

        </div>
        <div className="text-xs sm:text-sm text-center sm:text-justify tracking-wider uppercase sm:absolute sm:right-10 sm:bottom-10 max-w-xs mt-8 sm:mt-0">
          I Design the test strategies that deliver bug-free, reliable and scalable systems.
        </div>
        {FLAIR_IMAGES.map((src, i) => (
          <img
            key={i}
            ref={addToFlairRefs}
            className="flair w-full absolute z-50"
            src={src}
            alt=""
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
