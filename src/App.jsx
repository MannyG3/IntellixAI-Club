import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Check,
  ChevronDown,
  Cpu,
  Link2,
  Menu,
  Network,
  ScanFace,
  Send,
  Sparkles,
  X,
  Zap,
} from 'lucide-react'
import clubLogo from './assets/intellixai-logo.jpeg'
import mayurGundPhoto from './assets/Mayur-Gund.png'
import vikramsinhSastePhoto from './assets/vikramsinh-saste.jpeg'
import './App.css'

const domains = [
  { icon: BrainCircuit, title: 'Artificial Intelligence', text: 'Reasoning systems that turn complex signals into useful decisions.' },
  { icon: Network, title: 'Machine Learning', text: 'Train, test and ship models that learn from the world around us.' },
  { icon: Bot, title: 'Robotics', text: 'Build machines with perception, motion and a mind of their own.' },
  { icon: ScanFace, title: 'Computer Vision', text: 'Give systems the ability to see, understand and respond.' },
  { icon: Cpu, title: 'IoT & Automation', text: 'Connect hardware, sensors and software into smarter spaces.' },
  { icon: Sparkles, title: 'Generative AI', text: 'Explore new interfaces for creating, learning and collaborating.' },
]

const projects = [
  { title: 'AURA // Autonomous Rover', type: 'Robotics', description: 'A sensor-rich rover that maps unknown terrain and navigates without a pilot.', tags: ['ROS', 'LiDAR', 'Python'], team: 'Team AURA', image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1200&q=85', featured: true },
  { title: 'VisionGuard', type: 'Computer Vision', description: 'Real-time safety intelligence for campus environments.', tags: ['YOLO', 'OpenCV'], team: 'Vision Cell', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=85' },
  { title: 'NOVA Assistant', type: 'AI', description: 'A voice-first assistant for navigating lab resources.', tags: ['LLM', 'Voice AI'], team: 'NOVA Lab', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=85' },
  { title: 'AgriSense Grid', type: 'IoT', description: 'Low-power sensing for healthier, more efficient growing.', tags: ['ESP32', 'MQTT'], team: 'Green Circuit', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=85' },
]

const events = [
  { date: '18', month: 'OCT', title: 'Build Night: Robots', category: 'WORKSHOP', text: 'Prototype a working bot in one evening with the Robotics Cell.' },
  { date: '02', month: 'NOV', title: 'IntelliXAI Hack Day', category: 'HACKATHON', text: '24 hours. One bold idea. A room full of makers.' },
  { date: '21', month: 'NOV', title: 'Model Presentation Competition', category: 'COMPETITION', text: 'Present your AI, robotics or automation model to a panel of faculty and industry guests. Build a clear story, demonstrate the prototype and compete for recognition.', image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=500&q=85' },
]

const coordinators = [
  { initials: 'VS', name: 'Prof. Vikramsinh Saste', role: 'Faculty Advisor', domain: 'System Engineering', tone: 'blue', image: vikramsinhSastePhoto },
  { initials: 'MG', name: 'Prof. Mayur Gund', role: 'Faculty Advisor', domain: 'Robotics Mentor', tone: 'violet', image: mayurGundPhoto },
]

const people = [
  { initials: 'VJ', name: 'Vaishnavi Jadhav', role: 'President', domain: 'Leadership', tone: 'cyan', image: 'https://intellix-ai-robotic-club.netlify.app/team/vaishnavi-jadhav.jpg' },
  { initials: 'RR', name: 'Rudra Rajguru', role: 'Vice President', domain: 'Leadership', tone: 'violet', image: 'https://intellix-ai-robotic-club.netlify.app/team/rudra-rajguru.jpg' },
  { initials: 'VP', name: 'Vedant Patil', role: 'Head of Collaborations', domain: 'Outreach', tone: 'blue', image: 'https://intellix-ai-robotic-club.netlify.app/team/vedant-patil.jpg' },
  { initials: 'IB', name: 'Ishwari Bochare', role: 'Operations & Engineering Lead', domain: 'Hardware', tone: 'lime', image: 'https://intellix-ai-robotic-club.netlify.app/team/ishwari-bochare.jpg' },
  { initials: 'DD', name: 'Dnyaneshwari Navnath Date', role: 'AI & Software Engineer', domain: 'AI & Software', tone: 'cyan', image: 'https://intellix-ai-robotic-club.netlify.app/team/dnyaneshwari-date.jpg' },
  { initials: 'AK', name: 'Amruta Korade', role: 'UI/UX & Robotics Interface Lead', domain: 'AI & Software', tone: 'violet', image: 'https://intellix-ai-robotic-club.netlify.app/team/amruta-korade.jpg' },
  { initials: 'RG', name: 'Raj Ghandat', role: 'Head of AI Intelligence', domain: 'AI & Software', tone: 'blue' },
  { initials: 'SD', name: 'Sujal Dupare', role: 'Head of Hardware', domain: 'Hardware', tone: 'lime' },
  { initials: 'PS', name: 'Pranjal Shelke', role: 'Head of Fabrication', domain: 'Fabrication', tone: 'blue' },
  { initials: 'MA', name: 'Mahek Attar', role: 'Head of Social Media', domain: 'Outreach', tone: 'violet' },
]

const stats = [
  { value: 50, suffix: '+', label: 'Projects built' },
  { value: 100, suffix: '+', label: 'Student members' },
  { value: 20, suffix: '+', label: 'Events hosted' },
  { value: 10, suffix: '+', label: 'Competitions' },
]

function Reveal({ children, delay = 0, className = '' }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.65, delay, ease: 'easeOut' }}>{children}</motion.div>
}

function CountUp({ value, suffix }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    let frame
    const start = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - start) / 1100, 1)
      setCount(Math.round(value * (1 - Math.pow(1 - progress, 3))))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { frame = requestAnimationFrame(tick); observer.disconnect() } }, { threshold: 0.5 })
    const element = document.querySelector(`[data-count="${value}"]`)
    if (element) observer.observe(element)
    return () => { observer.disconnect(); cancelAnimationFrame(frame) }
  }, [value])
  return <span>{count}{suffix}</span>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [filter, setFilter] = useState('All')
  const filteredProjects = filter === 'All' ? projects : projects.filter((project) => project.type === filter)
  const navItems = ['About', 'Projects', 'Events', 'Team', 'Lab F08', 'Contact']

  return (
    <div className="site-shell">
      <nav className={`navbar ${menuOpen ? 'menu-active' : ''}`}>
        <a className="brand" href="#home" onClick={() => setMenuOpen(false)}><img className="brand-logo" src={clubLogo} alt="IntelliXAI AI and Robotics Club logo" /><span><strong>IntelliXAI</strong><small>AI & Robotics Club</small></span></a>
        <div className="nav-links">{navItems.map((item) => <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`}>{item}</a>)}</div>
        <a className="nav-cta" href="#contact">Join the Club <ArrowUpRight size={15} /></a>
        <button className="menu-button" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </nav>

      <main>
        <section className="hero section-grid" id="home">
          <div className="hero-copy">
            <Reveal><div className="eyebrow"><span className="pulse-dot" /> AIML Department <i /> RIT Polytechnic <i /> Lab F08</div></Reveal>
            <Reveal delay={0.1}><h1>Build the future<br /><em>with AI & Robotics.</em></h1></Reveal>
            <Reveal delay={0.2}><p className="hero-lede">Where students turn bold ideas into intelligent systems, autonomous machines and real-world innovations.</p></Reveal>
            <Reveal delay={0.3}><div className="hero-actions"><a className="button button-primary" href="#projects">Explore projects <ArrowUpRight size={17} /></a><a className="text-link" href="#contact">Join the club <span>→</span></a></div></Reveal>
            <Reveal delay={0.4}><div className="hero-trust"><div className="avatar-stack"><span>AS</span><span>PM</span><span>VK</span><b>+</b></div><span>Built by the<br /><strong>next generation.</strong></span></div></Reveal>
          </div>
          <div className="hero-visual" aria-label="Abstract robotics visual">
            <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" /><div className="visual-core"><div className="core-ring"><Bot size={110} strokeWidth={1} /></div><div className="core-scan" /></div>
            <div className="data-chip chip-top"><span className="status-dot" /> SYSTEM ONLINE <b>98.4%</b></div><div className="data-chip chip-side"><small>NEURAL<br />CORE</small><BrainCircuit size={22} /></div><div className="data-chip chip-bottom"><Zap size={15} /> F08 / LAB NODE <b>07</b></div>
            <div className="node node-a" /><div className="node node-b" /><div className="node node-c" />
          </div>
        </section>

        <div className="signal-strip"><span>01 / WHAT WE DO</span><div className="signal-line" /><span>AI <b>×</b> HARDWARE <b>×</b> HUMAN CURIOSITY</span></div>

        <section className="section intro-section" id="about"><div className="section-heading"><Reveal><span className="kicker">/ 01 — THE CLUB</span><h2>More than a club.<br /><span>A place to build.</span></h2></Reveal></div><Reveal delay={0.15} className="intro-body"><p>IntelliXAI is a student-driven technical club where curiosity becomes capability. We learn in public, build with our hands and make technology feel a little more human.</p><a className="arrow-link" href="#lab-f08">Discover our lab <ArrowUpRight size={16} /></a></Reveal><div className="process-line">{['Learn', 'Build', 'Test', 'Compete', 'Innovate'].map((step, i) => <div key={step} className="process-step"><span>0{i + 1}</span><strong>{step}</strong>{i < 4 && <ChevronDown size={15} />}</div>)}</div></section>

        <section className="section domains-section"><div className="section-heading split-heading"><div><Reveal><span className="kicker">/ 02 — OUR PLAYGROUND</span><h2>Curiosity,<br /><span>engineered.</span></h2></Reveal></div><Reveal className="heading-note"><p>Six ways to get your hands dirty with the future.</p></Reveal></div><div className="domain-grid">{domains.map(({ icon: Icon, title, text }, i) => <Reveal key={title} delay={i * 0.06}><a className="domain-card" href="#projects"><span className="card-index">0{i + 1}</span><Icon className="domain-icon" size={29} strokeWidth={1.4} /><h3>{title}</h3><p>{text}</p><ArrowUpRight className="card-arrow" size={17} /></a></Reveal>)}</div></section>

        <section className="section projects-section" id="projects"><div className="section-heading split-heading"><div><Reveal><span className="kicker">/ 03 — SELECTED BUILDS</span><h2>Ideas into machines.<br /><span>Data into intelligence.</span></h2></Reveal></div><Reveal className="heading-note"><a className="arrow-link" href="#contact">See all projects <ArrowUpRight size={16} /></a></Reveal></div><div className="filter-row">{['All', 'AI', 'Robotics', 'IoT', 'Computer Vision'].map((item) => <button key={item} className={filter === item ? 'active' : ''} onClick={() => setFilter(item)}>{item}</button>)}</div><div className="project-grid">{filteredProjects.map((project, i) => <Reveal key={project.title} delay={i * 0.08} className={project.featured ? 'featured-project' : ''}><article className={`project-card ${project.featured ? 'featured' : ''}`}><div className="project-image" style={{ backgroundImage: `url(${project.image})` }}><span className="project-type">{project.type}</span><span className="project-index">0{i + 1}</span></div><div className="project-info"><div><h3>{project.title}</h3><p>{project.description}</p></div><div className="project-meta"><span>{project.team}</span><div>{project.tags.map((tag) => <b key={tag}>{tag}</b>)}</div></div></div></article></Reveal>)}</div></section>

        <section className="section event-section" id="events"><div className="section-heading split-heading"><div><Reveal><span className="kicker">/ 04 — THE CALENDAR</span><h2>Learn. Compete.<br /><span>Create.</span></h2></Reveal></div><Reveal className="heading-note"><p>There is always something powering up in F08.</p></Reveal></div><div className="event-layout"><Reveal className="upcoming-event"><span className="event-label"><span className="pulse-dot" /> NEXT UP</span><div className="big-date"><strong>18</strong><span>OCT<br />2026</span></div><h3>Build Night: Robots</h3><p>Prototype a working bot in one evening with the Robotics Cell. Bring your curiosity, we will bring the kits.</p><a className="button button-outline" href="#contact">Save your spot <ArrowUpRight size={16} /></a></Reveal><div className="event-list">{events.slice(1).map((event, i) => <Reveal key={event.title} delay={i * 0.1}><article className="event-row">{event.image && <div className="event-thumb" style={{ backgroundImage: `url(${event.image})` }} aria-label={`${event.title} event image`} />}<div className="mini-date"><strong>{event.date}</strong><span>{event.month}</span></div><div><span className="event-category">{event.category}</span><h3>{event.title}</h3><p>{event.text}</p></div><ArrowUpRight size={18} /></article></Reveal>)}</div></div></section>

        <section className="stats-band"><div className="stats-inner">{stats.map((stat) => <div className="stat" key={stat.label} data-count={stat.value}><strong><CountUp value={stat.value} suffix={stat.suffix} /></strong><span>{stat.label}</span></div>)}</div></section>

        <section className="section team-section" id="team"><div className="section-heading split-heading"><div><Reveal><span className="kicker">/ 05 — THE HUMANS</span><h2>The people behind<br /><span>the builds.</span></h2></Reveal></div><Reveal className="heading-note"><p>Different minds. One shared appetite for making.</p></Reveal></div><div className="team-group"><div className="team-group-heading"><span>Faculty leadership</span><p>Academic guidance for ambitious engineering work.</p></div><div className="people-grid coordinator-grid">{coordinators.map((person, i) => <Reveal key={person.name} delay={i * 0.08}><article className={`person-card ${person.tone}`}><img className="person-avatar" src={person.image} alt={`${person.name} avatar`} /><div><h3>{person.name}</h3><p>{person.role}</p><span>{person.domain}</span></div><div className="person-links"><a href="#contact" aria-label={`${person.name} LinkedIn`}><Link2 size={15} /></a><a href="#contact" aria-label={`${person.name} GitHub`}><Link2 size={15} /></a></div></article></Reveal>)}</div></div><div className="team-group member-group"><div className="team-group-heading"><span>Student engineers</span><p>Multidisciplinary builders shaping the club's next systems.</p></div><div className="people-grid">{people.map((person, i) => <Reveal key={person.name} delay={i * 0.05}><article className={`person-card ${person.tone}`}>{person.image ? <img className="person-avatar" src={person.image} alt={`${person.name} avatar`} /> : <div className="person-avatar">{person.initials}</div>}<div><h3>{person.name}</h3><p>{person.role}</p><span>{person.domain}</span></div><div className="person-links"><a href="#contact" aria-label={`${person.name} LinkedIn`}><Link2 size={15} /></a><a href="#contact" aria-label={`${person.name} GitHub`}><Link2 size={15} /></a></div></article></Reveal>)}</div></div></section>

        <section className="lab-section" id="lab-f08"><div className="lab-visual"><div className="lab-grid" /><div className="lab-orb">F08</div><span className="lab-coordinate">18.5204° N<br />73.8567° E</span><span className="lab-status"><span className="status-dot" /> LAB NODE ACTIVE</span></div><div className="lab-copy"><Reveal><span className="kicker">/ 06 — OUR HOME BASE</span><h2>Welcome to<br /><span>F08.</span></h2><p>Where ideas become prototypes. Our lab is a sandbox for experiments, late nights and the satisfying click of a machine finally working.</p><div className="equipment-list">{['Robotics kits', 'Sensors & microcontrollers', 'AI development systems', 'Computer vision setups'].map((item) => <span key={item}><Check size={14} /> {item}</span>)}</div><a className="button button-primary" href="#contact">Explore Lab F08 <ArrowUpRight size={17} /></a></Reveal></div></section>

        <section className="join-section" id="join"><div className="join-noise" /><Reveal><span className="kicker">/ READY WHEN YOU ARE</span><h2>Your next project<br /><em>starts here.</em></h2><p>Have an idea? Build it with us.</p><div className="hero-actions"><a className="button button-light" href="#contact">Join IntelliXAI <ArrowUpRight size={17} /></a><a className="text-link light" href="#contact">Talk to the team <span>→</span></a></div></Reveal></section>

        <section className="section contact-section" id="contact"><div className="contact-copy"><Reveal><span className="kicker">/ 07 — FIND US</span><h2>Let’s make<br /><span>something real.</span></h2><p>IntelliXAI AI & Robotics Club<br />AIML Department, RIT Polytechnic<br />Pune, Maharashtra, India<br /><strong>Lab F08</strong></p><div className="social-links"><a href="#contact" aria-label="Instagram"><Link2 size={18} /></a><a href="#contact" aria-label="LinkedIn"><Link2 size={18} /></a><a href="#contact" aria-label="GitHub"><Link2 size={18} /></a></div></Reveal></div><Reveal className="contact-form" delay={0.15}><form onSubmit={(event) => event.preventDefault()}><div className="form-row"><label>Name<input type="text" placeholder="Your name" /></label><label>Email<input type="email" placeholder="you@example.com" /></label></div><label>Department / Class<input type="text" placeholder="Tell us where you are learning" /></label><label>Interested domain<select defaultValue=""><option value="" disabled>Select a domain</option><option>Artificial Intelligence</option><option>Robotics</option><option>Computer Vision</option><option>IoT & Automation</option></select></label><label>Message<textarea placeholder="What do you want to build?" rows="3" /></label><button className="button button-primary" type="submit">Send message <Send size={16} /></button></form></Reveal></section>
      </main>

      <footer className="footer"><div className="footer-top"><a className="brand" href="#home"><img className="brand-logo" src={clubLogo} alt="IntelliXAI AI and Robotics Club logo" /><span><strong>IntelliXAI</strong><small>AI & Robotics Club</small></span></a><p>Powered by the AIML Department,<br />RIT Polytechnic, Pune.</p><div className="footer-nav">{navItems.map((item) => <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`}>{item}</a>)}</div></div><div className="footer-bottom"><span>© 2026 IntelliXAI AI & Robotics Club.</span><span>Build. Experiment. Automate. Innovate.</span></div></footer>
    </div>
  )
}

export default App

