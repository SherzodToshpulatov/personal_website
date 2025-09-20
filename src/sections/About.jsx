const About = () => {
  return (
    <section id="about" className="py-24 space-y-8">
      <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
      <p className="text-gray-400 max-w-3xl">
        I’m a software engineer with a passion for creating intuitive,
        user-friendly applications. I enjoy solving complex problems
        with clean, elegant solutions and staying up-to-date with
        modern web technologies.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold text-teal-400 mb-3">Skills</h3>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>JavaScript / React / Next.js</li>
            <li>Python / Django</li>
            <li>HTML / CSS / Tailwind</li>
            <li>SQL / PostgreSQL</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-teal-400 mb-3">Education</h3>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>
            
                B.S. in Computer Engineering — SBTUIT <br />
                <span className="text-sm text-gray-500">2019 – 2023</span>
            
            </li>
            <li>
              
                M.S. in Cyber Security — TUIT <br />
                <span className="text-sm text-gray-500">2025 – 2027</span>
              
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
