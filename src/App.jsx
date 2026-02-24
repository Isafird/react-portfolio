import Dataimage from "./data";
import { listTools, listProyek, listSkill } from "./data";

function App() {

  return (
    <>
      {/* hero */}
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-2s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={Dataimage.HeroImage} alt="Hero Image" className="w-10 rounded-md" />
            <q>Behind every great product is a developer who refused to give up on a bug.</q>
          </div>
          <h1 className="text-5xl font-bold mb-6">
            Hi, I'm <span className="text-cyan-500">Muhamad Isa Firdaus</span>
          </h1>
          <p className="text-base/loose mb-6 opacity-60">
            I'm a passionate developer specializing in web, AI, and modern technologies, dedicated to building responsive, user-friendly, and impactful digital experiences.
          </p>
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Download CV Dropdown */}
            <div className="relative group" id="resume">
              <button className="bg-cyan-500 text-white px-6 py-3 rounded-lg transition-colors hover:bg-cyan-400 flex items-center gap-2">
                Download CV <i className="ri-download-fill"></i>
              </button>

              {/* Dropdown */}
              <div className="absolute top-full left-0 w-48 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-xl overflow-hidden">
                  <a
                    href="/react-portfolio/resume-id.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200"
                  >
                    Indonesian
                  </a>
                  <a
                    href="/react-portfolio/resume-en.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200"
                  >
                    English
                  </a>
                </div>
              </div>
            </div>

            {/* Button Proyek */}
            <a
              href="#proyek"
              className="border border-cyan-500 text-cyan-500 px-6 py-3 rounded-lg transition-colors hover:bg-cyan-400 hover:text-white"
            >
              Projects <i className="ri-arrow-down-fill ri-lg"></i>
            </a>
          </div>
        </div>
        <img src={Dataimage.HeroImage} alt="Hero Image" className="w-[500px] md:ml-auto animate__animated animate__fadeInRight animate__delay-3s" />
      </div>

      {/* tentang */}
      <div className="about mt-32 py-10" id="tentang">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <p className="text-base/loose mb-10">
            I enjoy the process of turning ideas into real products that can be used and provide value. 
            In every project, I strive to balance functionality, performance, and user experience. 
            To me, technology is not just a tool, but a medium for delivering innovation and solutions that are relevant to today’s needs. 
            With a strong passion for learning, I continuously develop my skills and explore new technologies to create better and more impactful digital products.
          </p>
        
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  3 <span className="text-cyan-500">+</span>
                </h1>
                <p>Projects Completed</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  2 <span className="text-cyan-500">+</span>
                </h1>
                <p>Years of Experience</p>
              </div>
            </div>
          </div>
        </div>

        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Tools & Technologies</h1>
          <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-60" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
            Here are some tools and technologies I use in web development, including Visual Studio Code, React JS, Next JS, Tailwind CSS, Bootstrap, JavaScript, Node.js, GitHub, Canva, and Figma.
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

            {listTools.map((tool) => (
              <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-700 group" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={300 + tool.dad} data-aos-once="true"
              key={tool.id}>
                <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" />
                <div>
                  <h4 className="font-bold">
                    {tool.nama}
                  </h4>
                  <p className="opacity-60">
                    {tool.ket}
                  </p>
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </div>

      {/* proyek */}
      <div className="proyek mt-32 py-10" id="proyek">
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
          Projects
        </h1>
        <p className="text-base/loose text-center opacity-60" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
          Here are some projects I have worked on, covering various types of web applications and portfolio websites that demonstrate my skills in frontend development using React and related technologies.
        </p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
          {listProyek.map((proyek) => (
            <div className="bg-zinc-800 rounded-lg overflow-hidden group" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={300 + proyek.dad} data-aos-once="true" key={proyek.id}>
              <img src={proyek.gambar} alt="Proyek Image" className="w-full h-48 object-cover group-hover:scale-105 transition-transform" />
              <div className="p-4">
                <h4 className="font-bold text-lg mb-2">
                  {proyek.nama}
                </h4>
                <p className="text-sm opacity-60">
                  {proyek.desk}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="skill mt-32 py-10" id="skill">
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
          Skills
        </h1>
        <p className="text-base/loose text-center opacity-60" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
          Here are some skills I have mastered, covering various technologies and tools that I use.
        </p>
        <div className="skill-box mt-14 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
          {listSkill.map((skill) => (
            <div className="bg-zinc-800 rounded-lg overflow-hidden group" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={300 + skill.dad} data-aos-once="true" key={skill.id}>
              <img src={skill.gambar} alt="Skill Image" className="w-full h-48 object-cover group-hover:scale-105 transition-transform" />
              <div className="p-4">
                <h4 className="font-bold text-lg mb-2">
                  {skill.nama}
                </h4>
                {/* <p className="text-sm opacity-60">
                  {skill.desk}
                </p> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* kontak */}
      <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          Contact Me
        </h1>
        <p className="text-base/loose text-center mb-10 opacity-60 w-full lg:w-2/5 md:w-3/4 sm:w-4/5 mx-auto" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
          Don't hesitate to contact me if you have any questions, want to collaborate, or just want to say hello. I'm always open to discussions and new opportunities.
        </p>
        <form action="https://formsubmit.co/muhamadisafirdaus123@gmail.com" method="POST" className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Full Name</label>
              <input type="text" name="nama" placeholder="Enter Your Full Name..." className="border border-zinc-500 p-2 rounded-md" required></input>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input type="email" name="email" placeholder="Enter Your Email..." className="border border-zinc-500 p-2 rounded-md" required></input>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">Message</label>
              <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="Enter Your Message..." className="border border-zinc-500 p-2 rounded-md" required></textarea>
            </div>
            <div className="">
              <button type="submit" className="bg-zinc-700 hover:bg-zinc-600 text-white py-2 px-4 rounded-md w-full">Send Message</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
