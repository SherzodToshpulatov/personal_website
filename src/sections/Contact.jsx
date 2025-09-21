const Contact = () => {
  return (
    <section id="contact" className="py-24 text-center">
      <h2 className="text-4xl font-bold text-white mb-6">Get In Touch</h2>
      <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
        Whether you’re interested in working together or just want to say hi,
        my inbox is always open.
      </p>

      <a
        href="mailto:sherzodtoshpulatov@protonmail.com"
        className="inline-block px-8 py-4 bg-teal-500 text-white rounded-lg shadow hover:bg-teal-600 transition"
      >
        Say Hello
      </a>
    </section>
  );
};

export default Contact;
