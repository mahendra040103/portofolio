'use client';

import { useState, useEffect } from 'react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse tracking untuk 3D tilt effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 25,
        y: (e.clientY - window.innerHeight / 2) / 25,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = {
    hard: ['Python', 'HTML', 'CSS', 'JavaScript', 'PHP', 'SQL', 'WordPress', 'Networking', 'Microsoft Office', 'Canva', 'CapCut', 'Figma', 'Machine Learning'],
    soft: ['Disiplin', 'Bertanggung Jawab', 'Komunikatif', 'Cepat Beradaptasi', 'Problem Solving', 'Semangat Belajar Tinggi']
  };

  const experiences = [
    {
      title: "Magang Hubdat - Kantor Imigrasi Kelas II Non TPI Kediri",
      period: "Desember 2025 - Sekarang",
      desc: "Mengelola website resmi WordPress, membuat konten digital (Canva & CapCut), monitoring sistem, dan mengikuti pelatihan Essential Skills.",
    },
    {
      title: "Magang - Dinas Pendidikan Kabupaten Kediri",
      period: "Februari 2024",
      desc: "Mengelola dan memelihara website resmi, meningkatkan aksesibilitas, serta optimalisasi server dan tampilan website.",
    }
  ];

  const projects = [
    {
      title: 'Deteksi Penyakit Daun Mentimun',
      desc: 'Sistem deteksi penyakit menggunakan Faster R-CNN + ResNet-50 dengan Flask & ONNX.',
      tech: 'Python • Faster R-CNN • ResNet-50 • Flask • ONNX',
    },
    {
      title: 'Website E-Commerce Responsive',
      desc: 'E-commerce modern dengan sistem checkout WhatsApp dan dashboard admin.',
      tech: 'PHP Native • MySQL • JavaScript • Bootstrap',
    },
    {
      title: 'Sistem Arsip Digital',
      desc: 'Sistem administrasi dan pengarsipan digital untuk efisiensi pengelolaan data.',
      tech: 'PHP • SQL • HTML • CSS • JavaScript',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white font-sans scroll-smooth overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0f1c]/95 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tighter">
            <span className="text-yellow-400">Mahendra</span>
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-yellow-400 transition">About</a>
            <a href="#experience" className="hover:text-yellow-400 transition">Experience</a>
            <a href="#skills" className="hover:text-yellow-400 transition">Skills</a>
            <a href="#projects" className="hover:text-yellow-400 transition">Projects</a>
            <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
          </div>

          {/* Mobile Hamburger */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-2xl"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0a0f1c] border-t border-white/10 py-6">
            <div className="flex flex-col items-center gap-6 text-lg">
              {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-yellow-400 transition"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - 3D Floating Profile */}
      <section className="pt-32 pb-20 px-6 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <p className="text-yellow-400 font-semibold tracking-[4px] text-sm">WEB DEVELOPER & AI ENTHUSIAST</p>
            
            <h1 className="text-5xl md:text-7xl font-black leading-[1.1]">
              Hi, I'm <span className="text-yellow-400">Rizqi Maulana Mahendra</span>
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
              Lulusan Teknik Informatika (IPK 3.80) dengan passion di <span className="text-yellow-400">Web Development, Editing</span>
              , Graphic Design dan Networking.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="bg-yellow-400 text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-yellow-400/30">
                Lihat Project
              </a>
              <a href="#contact" className="border border-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-2xl font-semibold transition-all duration-300">
                Hubungi Saya
              </a>
            </div>
          </div>

          {/* 3D Profile Image */}
          <div className="flex justify-center relative">
            <div 
              className="relative w-80 h-80 md:w-[420px] md:h-[420px] perspective-1000"
              style={{
                transform: `rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-orange-500 to-yellow-600 rounded-[4rem] blur-3xl opacity-30"></div>
              
              <div className="relative w-full h-full rounded-[3rem] overflow-hidden border-4 border-yellow-400/40 shadow-2xl shadow-yellow-400/30 bg-black">
                <img
                  src="/profile.jpeg"
                  alt="Rizqi Maulana Mahendra"
                  className="w-full h-full object-cover object-[center_20%] scale-105 hover:scale-100 transition-transform duration-700"
            
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 bg-[#111827]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Profil Profesional</h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
            Saya adalah lulusan S1 Teknik Informatika dari Universitas Nusantara PGRI Kediri. 
            Memiliki kemampuan kuat di bidang web development, editing, networking, 
            dan graphic design. Siap berkontribusi dengan disiplin, adaptasi cepat, dan semangat belajar tinggi.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-yellow-400 tracking-widest font-semibold">EXPERIENCE</p>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">Pengalaman Magang</h2>
          </div>

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div key={i} className="group bg-[#1e293b] p-8 md:p-10 rounded-3xl border border-gray-700 hover:border-yellow-400/50 transition-all duration-500 hover:-translate-y-2">
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <h3 className="text-xl font-semibold text-yellow-400 group-hover:text-yellow-300 transition">{exp.title}</h3>
                  <span className="text-sm text-gray-400 whitespace-nowrap">{exp.period}</span>
                </div>
                <p className="mt-6 text-gray-300 leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-6 bg-[#111827]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-yellow-400 tracking-widest font-semibold">MY SKILLS</p>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">Kemampuan Saya</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-[#1e293b] p-8 rounded-3xl border border-gray-700">
              <h3 className="text-3xl font-bold mb-8 text-yellow-400">Hard Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.hard.map((skill) => (
                  <span key={skill} className="px-6 py-3 bg-yellow-400/10 border border-yellow-400/30 rounded-2xl text-sm hover:bg-yellow-400/20 transition hover:scale-105">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-[#1e293b] p-8 rounded-3xl border border-gray-700">
                <h3 className="text-3xl font-bold mb-8 text-yellow-400">Soft Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.soft.map((skill) => (
                    <span key={skill} className="px-6 py-3 bg-white/5 border border-gray-600 rounded-2xl text-sm hover:border-gray-400 transition">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-[#1e293b] p-8 rounded-3xl border border-gray-700">
                <h3 className="text-3xl font-bold mb-6 text-yellow-400">Sertifikat</h3>
                <div className="space-y-6">
                  <div>
                    <p className="font-semibold text-lg">Applied Microsoft Office</p>
                    <p className="text-gray-400">Word, Excel, PowerPoint • 490</p>
                  </div>
                  <div>
                    <p className="font-semibold text-lg">TOEFL</p>
                    <p className="text-gray-400">Score: 490</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects - 3D Cards */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-yellow-400 tracking-widest font-semibold">FEATURED WORKS</p>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">Project Portfolio</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group relative bg-[#1e293b] rounded-3xl overflow-hidden border border-gray-700 hover:border-yellow-400/60 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-yellow-400/20"
              >
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={`https://picsum.photos/id/${50 + index}/800/600`} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-yellow-400">{project.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.desc}
                  </p>
                  <p className="text-xs uppercase tracking-widest text-gray-500 border-t border-gray-700 pt-4">
                    {project.tech}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-[#111827]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-gray-400 text-xl mb-12">Siap berkolaborasi untuk project berkualitas tinggi.</p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="mailto:rizqimaulanamahendra10@gmail.com"
              className="bg-yellow-400 text-black px-12 py-5 rounded-3xl font-semibold text-lg hover:scale-105 transition-all shadow-xl shadow-yellow-400/30"
            >
              Kirim Email
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank"
              className="border-2 border-yellow-400 text-yellow-400 px-12 py-5 rounded-3xl font-semibold text-lg hover:bg-yellow-400 hover:text-black transition-all"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-gray-500 border-t border-gray-800">
        © 2026 Rizqi Maulana Mahendra • Professional Portfolio
      </footer>
    </div>
  );
}