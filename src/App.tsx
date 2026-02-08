import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { Link } from "lucide-react";
import Card from "./components/card-component.tsx";
import ContactForm from "./components/contact-form.tsx";
import LangSwitcher from "./components/lang-switcher.tsx";
import ToTopBtn from "./components/to-top-btn.tsx";
import ProjectCard from "./components/project-card.tsx";

function App() {
  const { t } = useTranslation();

  const techno = [
    { name: "React", icon: "../src/assets/react.svg" },
    { name: "TypeScript", icon: "../src/assets/ts.svg" },
    { name: "Tailwind CSS", icon: "../src/assets/tailwind.svg" },
    { name: "MySQL", icon: "../src/assets/mysql.svg" },
    { name: "PHP", icon: "../src/assets/php.svg" },
    { name: "Git", icon: "../src/assets/git.svg" },
  ];

  const links = [
    {
      name: "GitHub",
      url: "https://github.com/alexis-ladurelle",
      icon: "../src/assets/github.svg",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/alexis-ladurelle/",
      icon: "../src/assets/linkedin.svg",
    },
    {
      name: "Mail",
      url: "mailto:alexis.ladurelle.pro@gmail.com",
      icon: "../src/assets/mail.svg",
    },
  ];

  return (
    <motion.main
      className="py-4 selection:bg-purple-200 sm:py-8 scroll-smooth"
      viewport={{ once: true }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
        opacity: { duration: 0.3 },
        scale: { duration: 0.8 },
      }}>
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 mb-10">
        <header
          tabIndex={0}
          className="my-4 w-full text-right gap-4 flex justify-end-safe items-center ">
          <a
            href="#contact"
            tabIndex={0}
            className="text-sm font-medium text-center text-purple-600 hover:text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500  rounded px-2 py-1">
            {t("hero.contactLink")}
          </a>
          <LangSwitcher />
        </header>

        <div>
          <h2 className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Alexis Ladurelle
          </h2>
          <p className="text-center text-xl font-semibold text-purple-500">
            {t("hero.role")}
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-4">
          {/* ABOUT CARD */}
          <Card
            title={t("aboutCard.title")}
            description={t("aboutCard.desc")}
            className="max-lg:row-start-1 lg:row-span-3"
            delay={0.1}
            direction="left"
          />

          {/* PROJECT CARD */}
          <a
            href="#projects"
            className="focus:outline-none focus:ring-2 focus:ring-purple-500  rounded-lg  border-2 border-transparent hover:border-purple-400 hover:shadow-md transition-all duration-200">
            <Card
              title={t("projectCard.title")}
              description={t("projectCard.desc")}
              className="lg:row-start-1 lg:col-start-2 row-span-2 h-full "
              delay={0.2}
              direction="up"
              icon={<Link />}
            />
          </a>

          {/* LINK CARD */}
          <Card
            title={t("linkCard.title")}
            description={t("linkCard.desc")}
            className="lg:col-start-2 lg:row-start-2 lg:row-span-2 pb-1.5"
            delay={0.3}
            direction="down">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2 ">
              {links.map((link, index) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center justify-center gap-2 rounded-lg p-3 bg-gray-100 hover:bg-white hover:shadow-lg transition-all duration-200 w-full min-h-[100px] min-w-[110px] ${
                    index === 2
                      ? "col-span-2 sm:col-span-1 lg:col-span-2 max-w-[calc(50%-0.375rem)] mx-auto sm:max-w-full sm:mx-0 lg:max-w-[calc(50%-0.375rem)] lg:mx-auto"
                      : ""
                  }`}>
                  <img
                    src={link.icon}
                    alt={link.name}
                    className="h-7 w-7 object-contain"
                  />
                  <span className="text-xs sm:text-sm font-semibold text-gray-700">
                    {link.name}
                  </span>
                </a>
              ))}
            </div>
          </Card>

          {/* TECHNO CARD */}
          <Card
            title={t("technoCard.title")}
            description={t("technoCard.desc")}
            className="lg:col-start-3 lg:row-span-3"
            delay={0.4}
            direction="right">
            <div className="grid grid-cols-2 min-[470px]:grid-cols-3 gap-2 sm:gap-3 sm:grid-cols-3 sm:justify-items-stretch">
              {techno.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center justify-center gap-2 rounded-lg p-2 sm:p-3 bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-200 w-full min-h-[100px]">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="h-10 w-10 object-contain shrink-0"
                  />
                  <span className="text-xs sm:text-sm font-semibold text-gray-700">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* PROJECT SECTION */}
      <section
        className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 mt-24"
        id="projects">
        <h2 className="text-4xl font-semibold text-center mb-16">
          {t("projects.title")}
        </h2>

        <div className="space-y-24">
          <ProjectCard
            title={t("projects.project1.title")}
            description={t("projects.project1.desc")}
            image="../src/assets/portfolio-screen.png"
            tags={["React", "TypeScript", "Tailwind", "Framer Motion"]}
            githubUrl="https://github.com/alexis-ladurelle/portfolio"
            index={0}
          />

          <ProjectCard
            title={t("projects.project2.title")}
            description={t("projects.project2.desc")}
            image="../src/assets/just-park-it.png"
            tags={["TypeScript", "Leaflet", "PHP", "MySQL"]}
            index={1}
          />
        </div>
      </section>
      <ContactForm />
      <ToTopBtn />
    </motion.main>
  );
}

export default App;
