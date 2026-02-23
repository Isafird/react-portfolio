import Dataimage from "./data";
import { listTools, listProyek } from "./data";

function App() {

  return (
    <>
      {/* hero */}
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={Dataimage.HeroImage} alt="Hero Image" className="w-10 rounded-md" />
            <q>Test</q>
          </div>
          <h1 className="text-5xl font-bold mb-6">
            Hi, I'm <span className="text-cyan-500">Muhamad Isa Firdaus</span>
          </h1>
          <p className="text-base/loose mb-6 opacity-60">
            I'm a passionate frontend developer specializing in React and modern web technologies.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="#" className="bg-cyan-500 text-white px-6 py-3 rounded-lg transition-colors hover:bg-cyan-400">
              Download CV <i className="ri-download-fill ri-lg"></i>
            </a>
            <a href="#" className="border border-cyan-500 text-cyan-500 px-6 py-3 rounded-lg transition-colors hover:bg-cyan-400 hover:text-white">
              Lihat Proyek <i className="ri-arrow-down-fill ri-lg"></i>
            </a>
          </div>
        </div>
        <img src={Dataimage.HeroImage} alt="Hero Image" className="w-[500px] md:ml-auto" />
      </div>

      {/* tentang */}
      <div className="about mt-32 py-10">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg">
          <p className="text-base/loose mb-10">
            test
          </p>
        
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  45 <span className="text-cyan-500">+</span>
                </h1>
                <p>Projects Completed</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  4 <span className="text-cyan-500">+</span>
                </h1>
                <p>Years of Experience</p>
              </div>
            </div>
          </div>
        </div>

        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4">Tools & Technologies</h1>
          <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-60">
            Berikut adalah beberapa tools dan teknologi yang saya gunakan dalam pengembangan web, termasuk Visual Studio Code, React JS, Next JS, Tailwind CSS, Bootstrap, JavaScript, Node.js, GitHub, AI tools, Canva, dan Figma.
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

            {listTools.map((tool) => (
              <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-700 group"
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
      <div className="proyek mt-32 py-10">
        <h1 className="text-center text-4xl font-bold mb-2">
          Projects
        </h1>
        <p className="text-base/loose text-center opacity-60">
          Berikut adalah beberapa proyek yang telah saya kerjakan, mencakup berbagai jenis aplikasi web dan situs portofolio yang menunjukkan kemampuan saya dalam pengembangan frontend menggunakan React dan teknologi terkait.
        </p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
          {listProyek.map((proyek) => (
            <div className="bg-zinc-800 rounded-lg overflow-hidden group" key={proyek.id}>
              <img src={proyek.gambar} alt="Proyek Image" className="w-full h-48 object-cover group-hover:scale-105 transition-transform" />
              <div className="p-4">
                <h4 className="font-bold text-lg mb-2">
                  {proyek.nama}
                </h4>
                <p className="text-sm opacity-60">
                  {proyek.ket}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* kontak */}
      <div className="kontak mt-32 py-10">
        <h1 className="text-center text-4xl font-bold mb-2">
          Contact Me
        </h1>
        <p className="text-base/loose text-center mb-10 opacity-60 w-full lg:w-2/5 md:w-3/4 sm:w-4/5 mx-auto">
          Jangan ragu untuk menghubungi saya jika Anda memiliki pertanyaan, ingin bekerja sama, atau hanya ingin menyapa. Saya selalu terbuka untuk diskusi dan peluang baru.
        </p>
        <form action="https://formsubmit.co/muhamadisafirdaus123@gmail.com" method="POST" className="bg-zinc-800 p-10 w-fit mx-auto rounded-md" autoComplete="off">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap</label>
              <input type="text" name="nama" placeholder="Masukkan Nama..." className="border border-zinc-500 p-2 rounded-md" required></input>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input type="email" name="email" placeholder="Masukkan Email..." className="border border-zinc-500 p-2 rounded-md" required></input>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">Pesan</label>
              <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="Masukkan Pesan..." className="border border-zinc-500 p-2 rounded-md" required></textarea>
            </div>
            <div className="">
              <button type="submit" className="bg-zinc-700 hover:bg-zinc-600 text-white py-2 px-4 rounded-md w-full">Kirim Pesan</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
