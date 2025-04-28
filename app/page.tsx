import type React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Linkedin,
  Github,
  Facebook,
  Mail,
  Code,
  Database,
  Server,
  Globe,
  Laptop,
  Smartphone,
  PenTool,
  BarChart3,
  Briefcase,
  GraduationCap,
  Layers,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import ContactForm from "@/components/contact-form"

// Add this mapping before the TechStackItem component
const techLogos: Record<string, string> = {
  PHP: "/tech-logos/php.svg",
  HTML5: "/tech-logos/html5.svg",
  CSS3: "/tech-logos/css3.svg",
  JavaScript: "/tech-logos/javascript.svg",
  TypeScript: "/tech-logos/typescript.svg",
  "Next.js": "/tech-logos/nextjs.svg",
  "Node.js": "/tech-logos/nodejs.svg",
  MySQL: "/tech-logos/mysql.svg",
  "Tailwind CSS": "/tech-logos/tailwindcss.svg",
  Git: "/tech-logos/git.svg",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111827] text-white">
      {/* Header */}
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <span className="text-[#f05454]">Gabriel&apos;s</span> DEV
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link href="#about" className="hover:text-[#f05454] transition-colors">
            About Me
          </Link>
          <Link href="#services" className="hover:text-[#f05454] transition-colors">
            Services
          </Link>
          <Link href="#education" className="hover:text-[#f05454] transition-colors">
            Education
          </Link>
          <Link href="#skills" className="hover:text-[#f05454] transition-colors">
            Skills
          </Link>
          <Link href="#projects" className="hover:text-[#f05454] transition-colors">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-[#f05454] transition-colors">
            Contact
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto py-16 px-4 flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-gray-600">
          <Image
            src="/gab.jpg?height=256&width=256"
            alt="Gabriel Rhys D. Ambongan"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            HELLO <span className="inline-block">👋</span> I&apos;M{" "}
            <span className="text-[#3498db]">GABRIEL RHYS D. AMBONGAN</span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6">
            I&apos;m a <span className="text-purple-400">Web Developer</span>
          </h2>
          <p className="text-gray-300 mb-8">
          I am a passionate IT student, dedicated freelancer, and avid programmer. I am fueled by a relentless curiosity for technology and a desire to create innovative solutions. As I navigate through the vast realm of IT, I embrace challenges as opportunities to learn and grow.
          </p>
          <div className="flex justify-center md:justify-start space-x-6 mb-8">
            <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
              <Linkedin className="w-8 h-8 hover:text-[#f05454] transition-colors" />
            </Link>
            <Link href="https://github.com" target="_blank" aria-label="GitHub">
              <Github className="w-8 h-8 hover:text-[#f05454] transition-colors" />
            </Link>
            <Link href="https://web.facebook.com/gabzz.dejaro" target="_blank" aria-label="Facebook">
              <Facebook className="w-8 h-8 hover:text-[#f05454] transition-colors" />
            </Link>
            <Link href="saturdejaro@gmail.com" aria-label="Email">
              <Mail className="w-8 h-8 hover:text-[#f05454] transition-colors" />
            </Link>
          </div>
          <Link
            href="#contact"
            className="inline-block bg-[#f05454] hover:bg-[#e04444] text-white font-bold py-3 px-8 rounded-md transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
  <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
  <div className="max-w-3xl mx-auto">
    <p className="text-lg mb-6">
      Hey there! I&apos;m <span className="text-[#3498db]">Gabriel Rhys D. Ambongan</span>, currently a second-year college
      student at the <span className="text-purple-400">State University of Northern Negros</span>, where I'm working
      toward a Bachelor's Degree in <span className="text-purple-400">Information Technology</span>.
      I've always been drawn to how technology influences the world around us, and that passion constantly pushes me
      to grow my skills in web development, coding, and creative problem-solving.
    </p>
    <p className="text-lg mb-6">
      My tech journey started with trying out basic code, but it quickly grew into a strong interest in building things for
      the web and finding smart, practical ways to solve problems. I'm all about developing clean, easy-to-use apps that
      bring value to people.
    </p>
    <p className="text-lg">
      Outside of programming, I love discovering new tech, taking part in open-source projects, and leveling up my skills
      through online courses and community learning. I believe that staying curious and always learning is key to keeping
      up in this fast-changing industry.
    </p>
  </div>
</div>

      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-[#0d1520]">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">My Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <ServiceCard
              icon={<Laptop className="w-12 h-12 text-[#f05454]" />}
              title="Web Development"
              description="Custom websites and web applications built with modern technologies and best practices."
            />
            <ServiceCard
              icon={<Smartphone className="w-12 h-12 text-[#f05454]" />}
              title="Responsive Design"
              description="Mobile-friendly websites that look great on all devices and screen sizes."
            />
            <ServiceCard
              icon={<PenTool className="w-12 h-12 text-[#f05454]" />}
              title="UI/UX Design"
              description="User-centered design that focuses on creating intuitive and engaging user experiences."
            />
            <ServiceCard
              icon={<BarChart3 className="w-12 h-12 text-[#f05454]" />}
              title="SEO Optimization"
              description="Improve your website's visibility in search engines and drive more organic traffic."
            />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Education</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-[#f05454] p-3 rounded-full">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Bachelor of Science in Information Technology</h3>
                  <p className="text-[#3498db]">State University of Northern Negros</p>
                  <p className="text-gray-400">2022 - Present</p>
                  <p className="mt-2 text-gray-300">
                    Currently pursuing a degree in Information Technology with a focus on web development and software
                    engineering.
                  </p>
                </div>
              </div>
            </div>

            <div className="h-[400px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.5!2d123.422977!3d10.9403579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a8c263bf82ced9%3A0x4853c21efb752699!2sState%20University%20of%20Northern%20Negros!5e0!3m2!1sen!2sph!4v1650000000000!5m2!1sen!2sph"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="State University of Northern Negros Location"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stacks Section */}
      <section id="tech-stacks" className="py-20 px-4 bg-[#0d1520]">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">My Tech Stack</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-5xl mx-auto">
            <TechStackItem name="PHP" />
            <TechStackItem name="HTML5" />
            <TechStackItem name="CSS3" />
            <TechStackItem name="JavaScript" />
            <TechStackItem name="TypeScript" />
            <TechStackItem name="Next.js" />
            <TechStackItem name="Node.js" />
            <TechStackItem name="MySQL" />
            <TechStackItem name="Tailwind CSS" />
            <TechStackItem name="Git" />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <SkillCard
              icon={<Code className="w-10 h-10 text-[#f05454]" />}
              title="Frontend Development"
              skills={["HTML5, CSS3, JavaScript", "React.js, Next.js", "Tailwind CSS, Bootstrap", "Responsive Design"]}
            />
            <SkillCard
              icon={<Server className="w-10 h-10 text-[#f05454]" />}
              title="Backend Development"
              skills={["Node.js, Express.js", "PHP, Laravel", "RESTful APIs", "Authentication & Security"]}
            />
            <SkillCard
              icon={<Database className="w-10 h-10 text-[#f05454]" />}
              title="Database Management"
              skills={["MySQL, PostgreSQL", "MongoDB", "Firebase", "Database Design"]}
            />
            <SkillCard
              icon={<Globe className="w-10 h-10 text-[#f05454]" />}
              title="Other Skills"
              skills={["Git & GitHub", "Docker", "AWS Basics", "Problem Solving"]}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-[#0d1520]">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ProjectCard
              title="Design Templates for Creators & Businesses"
              description="canvaaa is a platform offering a wide range of professionally designed templates for social media, marketing, and branding. It helps businesses and creators stand out with eye-catching designs, making professional content creation accessible to everyone."
              technologies={["TypeScript", "JavaScript", "React", "HTML", "CSS"]}
              imageUrl="/canva.png?height=200&width=400"
            />
            <ProjectCard
              title="Voting System"
              description="A responsive online voting system with secure authentication, ballot management, and real-time vote tracking. Features include an admin dashboard, candidate and voter management, and PDF report generation. The system uses Bootstrap for responsive design and integrates various JavaScript libraries for enhanced interactivity."
              technologies={["PHP", "HTML", "CSS", "JavaScript", "MySQL"]}
              imageUrl="/votesystem.png?height=200&width=400"
            />
            <ProjectCard
              title="Food Delivery Website"
              description="A modern, responsive food delivery platform featuring a dynamic menu, shopping cart, and real-time order management with dark mode support."
              technologies={["TypeScript/TSX", "Nex.js", "React", "Tailwind CSS", "Shadcn UI"]}
              imageUrl="/food.png?height=200&width=400"
            />
          </div>
        </div>
      </section>

      {/* Project Contributions Section */}
      <section id="contributions" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Project Contributions</h2>
          <div className="max-w-4xl mx-auto space-y-12">
            <ContributionItem
              title="Community Health Monitoring System"
              role="Frontend Developer"
              description="Developed the user interface for a community health monitoring system that tracks health metrics and provides insights for healthcare providers."
              contributions={[
                "Implemented responsive dashboard with data visualization",
                "Created user authentication and profile management",
                "Integrated with backend APIs for real-time data updates",
              ]}
            />

            <ContributionItem
              title="Student Information System"
              role="Full Stack Developer"
              description="Contributed to the development of a comprehensive student information system for educational institutions."
              contributions={[
                "Designed and implemented the enrollment module",
                "Created database schema and API endpoints",
                "Developed reporting and analytics features",
              ]}
            />

            <ContributionItem
              title="Local Business Directory"
              role="UI/UX Designer"
              description="Designed the user interface for a local business directory that helps connect customers with businesses in their area."
              contributions={[
                "Created wireframes and prototypes using Figma",
                "Conducted user testing and implemented feedback",
                "Designed responsive layouts for mobile and desktop",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-[#0d1520]">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Contact Me</h2>
          <div className="max-w-md mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-400">
        <div className="container mx-auto">
          <p>© {new Date().getFullYear()} Gabriel Rhys D. Ambongan.</p>
        </div>
      </footer>
    </main>
  )
}

function SkillCard({ icon, title, skills }: { icon: React.ReactNode; title: string; skills: string[] }) {
  return (
    <Card className="bg-[#1a2639] border-gray-700">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">{icon}</div>
          <h3 className="text-xl font-bold mb-4">{title}</h3>
          <ul className="space-y-2">
            {skills.map((skill, index) => (
              <li key={index} className="text-gray-300">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <Card className="bg-[#1a2639] border-gray-700">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">{icon}</div>
          <h3 className="text-xl font-bold mb-3">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}

function TechStackItem({ name }: { name: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 flex items-center justify-center bg-[#1a2639] rounded-lg mb-2">
        {techLogos[name] ? (
          <div className="relative w-10 h-10">
            <Image
              src={techLogos[name]}
              alt={`${name} logo`}
              fill
              className="object-contain"
            />
          </div>
        ) : (
          <Layers className="w-8 h-8 text-[#f05454]" />
        )}
      </div>
      <span className="text-sm text-center">{name}</span>
    </div>
  )
}

function ProjectCard({
  title,
  description,
  technologies,
  imageUrl,
}: {
  title: string
  description: string
  technologies: string[]
  imageUrl: string
}) {
  return (
    <Card className="bg-[#1a2639] border-gray-700 overflow-hidden">
      <div className="relative h-48 w-full">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="px-3 py-1 bg-[#0d1520] text-sm rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function ContributionItem({
  title,
  role,
  description,
  contributions,
}: {
  title: string
  role: string
  description: string
  contributions: string[]
}) {
  return (
    <div className="bg-[#1a2639] border border-gray-700 rounded-lg p-6">
      <h3 className="text-xl font-bold mb-1">{title}</h3>
      <p className="text-[#f05454] mb-3">{role}</p>
      <p className="text-gray-300 mb-4">{description}</p>
      <h4 className="font-semibold mb-2">Key Contributions:</h4>
      <ul className="list-disc pl-5 space-y-1">
        {contributions.map((item, index) => (
          <li key={index} className="text-gray-300">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
  
}

