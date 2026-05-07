'use client';

import { useState, useEffect } from 'react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse tracking untuk 3D tilt effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 30,
        y: (e.clientY - window.innerHeight / 2) / 30,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const experiences = [
    {
      title: "Information Technology",
      period: "Desember 2025 - Sekarang",
      company: "Kantor Imigrasi Kelas II Non TPI Kediri",
      responsibilities: [
        "Mengelola dan mengembangkan website resmi menggunakan WordPress CMS",
        "Membuat materi publikasi digital berupa infografis dan videografis menggunakan Canva & CapCut",
        "Melakukan monitoring dan troubleshooting sistem hardware & software",
        "Social Influence, Design Thinking, Digital Disruption & Transformation, Digital Literacy, Self Efficacy, serta Integrity at Work guna meningkatkan profesionalisme dan kualitas kinerja.",
        "Meningkatkan kualitas konten dan user experience website instansi"
      ]
    },
    {
      title: "Information Technology",
      period: "Februari 2024",
      company: "Dinas Pendidikan Kabupaten Kediri",
      responsibilities: [
        "Mengelola dan memperbarui konten website resmi Dinas Pendidikan",
        "Melakukan pemeliharaan server dan optimalisasi performa website",
        "Meningkatkan aksesibilitas dan tampilan website untuk publik & internal",
        "Memastikan kestabilan dan kecepatan akses website bagi pengguna"
      ]
    }
  ];

  const skills = {
    hard: ['Python', 'HTML', 'CSS', 'JavaScript', 'PHP', 'SQL', 'WordPress', 'Networking', 'Microsoft Office', 'Canva', 'CapCut', 'Figma', 'Machine Learning'],
    soft: ['Disiplin', 'Bertanggung Jawab', 'Komunikatif', 'Cepat Beradaptasi', 'Problem Solving', 'Semangat Belajar Tinggi']
  };

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

          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-yellow-400 transition">About</a>
            <a href="#experience" className="hover:text-yellow-400 transition">Experience</a>
            <a href="#skills" className="hover:text-yellow-400 transition">Skills</a>
            <a href="#projects" className="hover:text-yellow-400 transition">Projects</a>
            <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-3xl"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

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

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <p className="text-yellow-400 font-semibold tracking-[4px] text-sm">WEB DEVELOPER & AI ENTHUSIAST</p>
            
            <h1 className="text-5xl md:text-7xl font-black leading-[1.1]">
              Hi, I'm <span className="text-yellow-400">Rizqi Maulana Mahendra</span>
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
              Lulusan Teknik Informatika (IPK 3.80) dengan passion tinggi di bidang 
              <span className="text-yellow-400"> Web Development</span>, 
              <span className="text-yellow-400"> Machine Learning</span>, 
              Graphic Design, dan Networking.
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
            Memiliki kemampuan kuat di bidang web development, machine learning, editing, 
            graphic design, dan networking. Siap berkontribusi dengan disiplin, adaptasi cepat, 
            dan semangat belajar yang tinggi.
          </p>
        </div>
      </section>

      {/* === EXPERIENCE - MODERN TIMELINE === */}
      <section id="experience" className="py-20 px-6 bg-[#0a0f1c]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-yellow-400 tracking-widest font-semibold">PROFESSIONAL JOURNEY</p>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">Pengalaman Magang</h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-6 md:left-10 top-8 bottom-8 w-[3px] bg-gradient-to-b from-yellow-400 via-yellow-500 to-transparent"></div>

            <div className="space-y-16">
              {experiences.map((exp, i) => (
                <div key={i} className="relative pl-16 md:pl-24 group">
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-8 w-5 h-5 rounded-full border-4 border-yellow-400 bg-[#0a0f1c] group-hover:scale-110 transition-transform duration-300"></div>

                  <div className="bg-[#1e293b] rounded-3xl p-8 md:p-10 border border-gray-700 hover:border-yellow-400/50 transition-all duration-500 hover:-translate-y-2 shadow-xl">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-gray-400 mt-1">{exp.company}</p>
                      </div>
                      <span className="px-5 py-2 bg-yellow-400/10 text-yellow-400 text-sm font-medium rounded-full whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-4 text-gray-300">
                      {exp.responsibilities.map((item, idx) => (
                        <li key={idx} className="flex gap-3">
                          <span className="text-yellow-400 mt-1.5 text-lg">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills, Projects, Contact, Footer tetap sama seperti sebelumnya */}
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
                    <p className="text-gray-400">Word, Excel, PowerPoint • 75</p>
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

      {/* Projects */}
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