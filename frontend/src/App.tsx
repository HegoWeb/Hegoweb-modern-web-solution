
import React, { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { ContactForm } from './components/ui/ContactForm';
import {
  Monitor,
  Code2,
  Database,
  ShoppingCart,
  LifeBuoy,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  Send,
  Github,
  Linkedin,
  Mail,
  ChevronRight,
  ExternalLink,
  Layers,
  Smartphone
} from 'lucide-react';

// Define scrollToTop in global scope so it can be accessed by both Navbar and Footer in App component
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Hakkımızda', href: '#about' },
    { name: 'Hizmetler', href: '#services' },
    { name: 'Projeler', href: '#projects' },
    { name: 'Süreç', href: '#process' },
    { name: 'İletişim', href: '#contact' },
  ];

  // Modified to use the global scrollToTop and also close the mobile menu
  const handleLogoClick = () => {
    scrollToTop();
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 group cursor-pointer" onClick={handleLogoClick}>
            <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center transition-transform group-hover:rotate-12 shadow-lg shadow-red-200">
              <span className="text-white font-bold text-xl">H</span>
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-900">
              Hego<span className="text-red-600 transition-colors group-hover:text-red-700">Web</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-red-600 font-semibold transition-colors relative group"
              >
                {link.name}
                <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="#contact"
              className="bg-red-600 text-white px-7 py-3 rounded-xl font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-200 hover:shadow-red-300 active:scale-95"
            >
              Teklif Al
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-900 p-2 focus:outline-none transition-transform active:scale-90"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full left-0 top-full bg-white border-t border-slate-100 shadow-2xl transition-all duration-300 transform ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'}`}>
        <div className="p-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-slate-800 hover:text-red-600 text-xl font-bold py-3 transition-colors border-b border-slate-50"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block bg-red-600 text-white text-center py-4 rounded-2xl font-black text-lg shadow-xl active:scale-95 transition-transform"
          >
            Teklif Al
          </a>
        </div>
      </div>
    </nav>
  );
};

const ServiceCard: React.FC<{ title: string; desc: string; items: string[]; icon: React.ReactNode }> = ({ title, desc, items, icon }) => (
  <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-red-100 hover:shadow-2xl transition-all duration-300 group flex flex-col h-full">
    <div className="w-16 h-16 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 transform group-hover:-translate-y-1">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
    <p className="text-slate-600 mb-8 leading-relaxed text-sm lg:text-base flex-grow">{desc}</p>
    <ul className="space-y-3">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-center text-sm font-medium text-slate-500">
          <CheckCircle2 size={18} className="text-red-500 mr-3 shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const ProjectCard: React.FC<{ title: string; category: string; image: string; link: string }> = ({ title, category, image, link }) => (
  <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col">
    <div className="aspect-[16/10] overflow-hidden relative">
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <a href={link} className="bg-white text-slate-900 px-6 py-3 rounded-xl font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-red-600 hover:text-white active:scale-95">
          Projeyi İncele <ExternalLink size={18} />
        </a>
      </div>
    </div>
    <div className="p-6">
      <span className="text-red-600 font-bold text-xs uppercase tracking-widest">{category}</span>
      <h4 className="text-xl font-black text-slate-900 mt-1">{title}</h4>
    </div>
  </div>
);

const ProcessStep: React.FC<{ number: string; title: string; desc: string; isLast?: boolean }> = ({ number, title, desc, isLast }) => (
  <div className="relative flex flex-col items-center text-center px-6 mb-12 lg:mb-0 group">
    <div className="w-20 h-20 bg-white border-[6px] border-red-50 rounded-full flex items-center justify-center text-3xl font-black text-red-600 mb-8 z-10 shadow-lg group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
      {number}
    </div>
    <h4 className="text-xl font-bold text-slate-900 mb-3">{title}</h4>
    <p className="text-slate-600 text-sm leading-relaxed max-w-[250px]">{desc}</p>
    {!isLast && (
      <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 border-t-2 border-dashed border-slate-200 -z-0"></div>
    )}
  </div>
);

const App: React.FC = () => {
  const socialLinks = {
    github: "https://github.com/sametlimon",
    linkedin: "https://www.linkedin.com/in/sametlimon/"
  };



  return (
    <div className="min-h-screen selection:bg-red-100 selection:text-red-900 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-16 lg:pt-56 lg:pb-40 overflow-hidden">
        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-slate-50 -skew-x-12 translate-x-1/4 -z-10 rounded-l-[150px] hidden lg:block"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="flex-1 text-center lg:text-left space-y-8">
              <div className="inline-flex items-center space-x-2 bg-red-50 text-red-700 px-5 py-2 rounded-full text-xs lg:text-sm font-bold tracking-wide uppercase">
                <span className="w-2 h-2 bg-red-600 rounded-full animate-ping mr-2"></span>
                Dijital Dönüşüm Ortağınız
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight">
                İşinizi Dijitale Taşıyan <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">Güçlü</span> Web Çözümleri
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                HegoWeb olarak; modern arayüzler, güçlü altyapılar ve sürdürülebilir yazılım çözümleri geliştiriyoruz. Performans ve güvenliği odağımıza alıyoruz.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
                <a href="#contact" className="w-full sm:w-auto px-10 py-5 bg-red-600 text-white rounded-2xl font-black text-lg hover:bg-red-700 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-red-200 hover:-translate-y-1 active:scale-95">
                  Teklif Al <ArrowRight size={22} />
                </a>
                <a href="#projects" className="w-full sm:w-auto px-10 py-5 bg-white text-slate-800 border-2 border-slate-100 rounded-2xl font-black text-lg hover:border-red-200 transition-all text-center hover:-translate-y-1 active:scale-95">
                  Projeleri İncele
                </a>
              </div>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 lg:gap-10 pt-8 opacity-40">
                <span className="font-extrabold text-slate-800 text-lg uppercase tracking-tighter">Laravel</span>
                <span className="font-extrabold text-slate-800 text-lg uppercase tracking-tighter">Node.js</span>
                <span className="font-extrabold text-slate-800 text-lg uppercase tracking-tighter">React</span>
                <span className="font-extrabold text-slate-800 text-lg uppercase tracking-tighter">Tailwind</span>
              </div>
            </div>

            <div className="flex-1 w-full relative">
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-[12px] border-white transform lg:rotate-3 hover:rotate-0 transition-transform duration-700">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" alt="Dashboard Preview" className="w-full h-auto object-cover aspect-video" />
              </div>
              <div className="absolute -top-10 -right-5 bg-red-600 p-8 rounded-[2rem] shadow-2xl z-20 hidden lg:block animate-float">
                <Code2 className="text-white" size={40} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 lg:py-40 bg-white overflow-hidden scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=400&q=80" className="rounded-3xl shadow-xl mt-12 transform lg:-rotate-2" alt="Working" />
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400&q=80" className="rounded-3xl shadow-xl transform lg:rotate-2" alt="Office" />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-red-600 rounded-full flex items-center justify-center border-8 border-white shadow-2xl lg:flex hidden z-20">
                <span className="text-white font-black text-xl">Hego</span>
              </div>
            </div>
            <div className="space-y-8">
              <div className="space-y-4 text-center lg:text-left">
                <h2 className="text-red-600 font-black text-sm uppercase tracking-[0.3em]">Hakkımızda</h2>
                <h3 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight">Dijital Dünyada <br /> Kalıcı İzler Bırakıyoruz</h3>
              </div>
              <p className="text-xl text-slate-600 leading-relaxed font-medium text-center lg:text-left">
                HegoWeb; sadece bir yazılım ofisi değil, markanızın dijital dünyadaki stratejik ortağıdır. Modern teknolojileri, kullanıcı deneyimi ile harmanlayarak ölçeklenebilir projeler üretiyoruz.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "Saha Tecrübesi",
                  "Güçlü Backend Altyapıları",
                  "Maksimum Performans",
                  "Sürdürülebilir Kod",
                  "Güvenlik Odaklı",
                  "Teknik Danışmanlık"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 text-red-600 flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-all">
                      <CheckCircle2 size={18} />
                    </div>
                    <span className="text-slate-800 font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 lg:py-32 bg-slate-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-red-600 font-black text-sm uppercase tracking-[0.3em]">Hizmetlerimiz</h2>
            <h3 className="text-4xl lg:text-5xl font-black text-slate-900">Neler Yapıyoruz?</h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">İşletmenizin ihtiyacı olan tüm dijital altyapıyı modern standartlarda sunuyoruz.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Web Tasarım & Frontend"
              desc="Kullanıcıyı odağa alan, etkileşimi yüksek ve tamamen mobil uyumlu arayüzler tasarlıyoruz."
              items={["Responsive Tasarım", "UI/UX Tasarım", "React & Next.js", "Tailwind CSS"]}
              icon={<Smartphone />}
            />
            <ServiceCard
              title="Özel Yazılım"
              desc="İş süreçlerinize tam uyumlu, verimliliğinizi artıran ölçeklenebilir web uygulamaları geliştiriyoruz."
              items={["SaaS Çözümleri", "Özel CRM/ERP", "Yönetim Panelleri", "Veri Analitiği"]}
              icon={<Layers />}
            />
            <ServiceCard
              title="Backend Çözümleri"
              desc="Yüksek trafikli projeler için PHP, Laravel ve Node.js ile güçlü ve güvenli altyapılar inşa ediyoruz."
              items={["Laravel API", "Node.js Mikroservis", "Database Optimizasyonu", "Hız & Güvenlik"]}
              icon={<Database />}
            />
            <ServiceCard
              title="E-Ticaret"
              desc="Güvenli ödeme altyapıları ve pazaryeri entegrasyonları ile satışlarınızı artıracak platformlar kuruyoruz."
              items={["Pazaryeri API", "Ödeme Sistemleri", "Ürün Yönetimi", "SEO Odaklı"]}
              icon={<ShoppingCart />}
            />
            <ServiceCard
              title="Web Geliştirme"
              desc="En yeni web teknolojileri ile performans canavarı projeler üretiyoruz."
              items={["TypeScript", "API Entegrasyonları", "Frontend & Backend", "Modern Stack"]}
              icon={<Monitor />}
            />
            <div className="bg-red-600 p-8 rounded-[2.5rem] text-white flex flex-col justify-center items-center text-center shadow-2xl shadow-red-200">
              <h3 className="text-3xl font-black mb-4">Projenizi Başlatın</h3>
              <p className="mb-8 text-red-100 font-medium">İhtiyaçlarınıza özel çözümler üretmek için buradayız.</p>
              <a href="#contact" className="px-8 py-4 bg-white text-red-600 rounded-2xl font-black hover:bg-slate-50 transition-all shadow-xl group flex items-center gap-2 active:scale-95">
                Bize Ulaşın <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 lg:py-40 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-20 text-center lg:text-left">
            <div className="space-y-4">
              <h2 className="text-red-600 font-black text-sm uppercase tracking-[0.3em]">Projelerimiz</h2>
              <h3 className="text-4xl lg:text-5xl font-black text-slate-900">Seçkin Çalışmalarımız</h3>
            </div>
            <p className="text-lg text-slate-600 max-w-lg font-medium">Başarıyla teslim ettiğimiz projelerle müşterilerimizin dijital büyümesine katkı sağladık.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <ProjectCard
              title="Global E-Ticaret"
              category="E-Ticaret"
              image="https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=600&q=80"
              link="#contact"
            />
            <ProjectCard
              title="Fintech Yönetim Paneli"
              category="Özel Yazılım"
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
              link="#contact"
            />
            <ProjectCard
              title="Kurumsal Marka Kimliği"
              category="Web Tasarım"
              image="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80"
              link="#contact"
            />
          </div>
          <div className="mt-16 text-center">
            <a href="#contact" className="inline-flex items-center gap-3 text-red-600 font-black text-lg hover:gap-5 transition-all group active:scale-95">
              Daha Fazla Proje Gör <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 lg:py-32 bg-slate-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-red-600 font-black text-sm uppercase tracking-[0.3em]">İş Akışımız</h2>
            <h3 className="text-4xl lg:text-5xl font-black text-slate-900">Nasıl Çalışıyoruz?</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProcessStep number="01" title="Keşif" desc="İşinizi analiz ediyor ve hedeflerinize uygun stratejiyi kurguluyoruz." />
            <ProcessStep number="02" title="Tasarım" desc="Marka kimliğinize uygun modern ve kullanıcı dostu tasarımlar yapıyoruz." />
            <ProcessStep number="03" title="Yazılım" desc="En güncel teknolojilerle yüksek performanslı ve güvenli kodlama yapıyoruz." />
            <ProcessStep number="04" title="Canlı" isLast={true} desc="Testleri tamamlanmış projeyi yayına alıyor ve desteğimizi sürdürüyoruz." />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 lg:py-40 bg-white relative scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-2/5 bg-slate-900 p-10 lg:p-16 text-white flex flex-col justify-between relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-600 rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10 space-y-12">
                <div>
                  <h2 className="text-4xl font-black mb-6">İletişime Geçin</h2>
                  <p className="text-slate-400 text-lg leading-relaxed">Yeni bir projeniz mi var? Gelin detayları birlikte konuşalım.</p>
                </div>

                <div className="space-y-8">
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-red-600 transition-colors">
                      <Mail size={24} className="text-red-500 group-hover:text-white" />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">E-posta</p>
                      <p className="text-lg sm:text-xl font-bold break-all">sametlimon76@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-red-600 transition-colors">
                      <Github size={24} className="text-red-500 group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">GitHub</p>
                      <a href={socialLinks.github} target="_blank" rel="noreferrer" className="text-lg font-bold hover:text-red-400 transition-colors">@sametlimon</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-red-600 transition-colors">
                      <Linkedin size={24} className="text-red-500 group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">LinkedIn</p>
                      <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="text-lg font-bold hover:text-red-400 transition-colors">samet-limon</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 p-8 lg:p-16">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <div className="grid md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-2 space-y-8 flex flex-col items-center md:items-start">
              <div className="flex items-center space-x-2 cursor-pointer" onClick={scrollToTop}>
                <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">H</span>
                </div>
                <span className="text-3xl font-black text-white">HegoWeb</span>
              </div>
              <p className="text-slate-400 max-w-sm text-lg leading-relaxed">
                Modern yazılım çözümleriyle işletmenizi geleceğe hazırlıyoruz.
              </p>
              <div className="flex gap-4">
                <a href={socialLinks.github} target="_blank" rel="noreferrer" className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-white hover:bg-red-600 transition-all">
                  <Github size={24} />
                </a>
                <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-white hover:bg-red-600 transition-all">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-black text-lg mb-8 uppercase tracking-widest">Hizmetler</h4>
              <ul className="space-y-4 text-slate-400 font-medium">
                <li><a href="#services" className="hover:text-red-500 transition-colors">Web Tasarım</a></li>
                <li><a href="#services" className="hover:text-red-500 transition-colors">Özel Yazılım</a></li>
                <li><a href="#services" className="hover:text-red-500 transition-colors">E-Ticaret</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-black text-lg mb-8 uppercase tracking-widest">Navigasyon</h4>
              <ul className="space-y-4 text-slate-400 font-medium">
                <li><a href="#about" className="hover:text-red-500 transition-colors">Hakkımızda</a></li>
                <li><a href="#projects" className="hover:text-red-500 transition-colors">Projeler</a></li>
                <li><a href="#contact" className="hover:text-red-500 transition-colors">İletişim</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-500 text-sm font-bold uppercase tracking-widest">
            <p>© 2026 HegoWeb.</p>
            <div className="flex gap-10">
              <a href="#" className="hover:text-white transition-colors">Gizlilik</a>
              <a href="#" className="hover:text-white transition-colors">Çerezler</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-6 left-4 right-4 z-40">
        <a href="#contact" className="w-full py-5 bg-red-600 text-white rounded-3xl font-black shadow-2xl flex items-center justify-center gap-3 text-lg active:scale-95 transition-transform">
          Hemen Teklif Al <ArrowRight size={24} />
        </a>
      </div>
      <Toaster position="top-center" />
    </div>
  );
};

export default App;
