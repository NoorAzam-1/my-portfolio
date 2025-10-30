import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";

const About = () => {
  const calculateMonths = () => {
    const startDate = new Date("2025-03-01");
    const currentDate = new Date();

    let months =
      currentDate.getMonth() -
      startDate.getMonth() +
      12 * (currentDate.getFullYear() - startDate.getFullYear());

    return months;
  };

  const formatExperience = () => {
    const totalMonths = calculateMonths();
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    
    let experienceText = "";
    
    if (years > 0) {
      experienceText += `${years} Year${years > 1 ? 's' : ''}`;
    }
    
    if (months > 0) {
      if (experienceText) experienceText += " ";
      experienceText += `${months} Month${months > 1 ? 's' : ''}`;
    }
    
    return experienceText;
  };

  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[12vw] font-sans mt-10"
    >
      <div className="flex gap-2 flex-col-reverse lg:flex-row justify-between items-center max-w-7xl mx-auto">
        <div className="lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
          <h1 className="text-3xl sm:text-4xl lg:text-3xl font-bold text-white mb-2 leading-tight ">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Noor Azam
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={["Full Stack Developer", "Web Developer", "Coder"]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>
          <p className="text-base sm:text-lg lg:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a full-stack developer with over {formatExperience()} of
            experience in building scalable web applications. Skilled in both
            front-end and back-end development, I specialize in the MERN stack
            and other modern technologies to create seamless user experiences
            and efficient solutions.
          </p>
          <a
            href="./NoorAzam.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end z-1 ">
          <Tilt
            className="w-60 h-60 sm:w-64 sm:h-64 md:w-[24rem] md:h-[20rem] lg:w-[30rem] lg:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
          >
            <img
              src="/myImage.png"
              alt="Noor Azam"
              loading="eager"
              sizes="(max-width: 768px) 240px, (max-width: 1024px) 380px, 480px"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />

          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;