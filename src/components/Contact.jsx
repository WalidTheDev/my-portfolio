const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4">
      <div className="max-w-xl mx-auto">
        <h3 className="text-3xl font-semibold mb-6 text-center">Contact Me</h3>
        <form
          action="https://formspree.io/f/xblygebw"  
          method="POST"
          className="space-y-4"
        >
          <input type="text" name="name" placeholder="Your Name" required className="w-full border px-4 py-2 rounded" />
          <input type="email" name="email" placeholder="Your Email" required className="w-full border px-4 py-2 rounded" />
          <textarea name="message" rows="5" placeholder="Your Message" required className="w-full border px-4 py-2 rounded"></textarea>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
