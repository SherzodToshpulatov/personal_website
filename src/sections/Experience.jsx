import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Engineer",
    company: "Tech Company",
    period: "2023 – Present",
    description:
      "Working on frontend development with React and Tailwind, building scalable web applications and improving UI/UX.",
  },
  {
    role: "Frontend Developer Intern",
    company: "Startup Inc.",
    period: "2022 – 2023",
    description:
      "Built responsive components, collaborated with backend team, and improved website performance by 30%.",
  },
  {
    role: "Freelance Developer",
    company: "Self-Employed",
    period: "2020 – 2022",
    description:
      "Worked with clients worldwide to design and develop custom websites using HTML, CSS, JavaScript, and React.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <h2 className="text-4xl font-bold text-white mb-10">Experience</h2>
      <div className="space-y-10">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className="relative pl-8 border-l border-gray-700"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <span className="absolute left-[-6px] top-2 w-3 h-3 bg-teal-400 rounded-full"></span>
            <h3 className="text-2xl font-semibold text-teal-400">
              {exp.role} <span className="text-gray-400">@ {exp.company}</span>
            </h3>
            <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
            <p className="text-gray-400">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
