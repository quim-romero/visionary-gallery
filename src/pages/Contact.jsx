import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact – Visionary Gallery</title>
      </Helmet>

      <motion.main
        className="min-h-screen px-4 py-24 max-w-xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-display mb-8 text-center">Get in Touch</h1>

        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent successfully.");
          }}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              required
              className="w-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 rounded px-4 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-black text-white dark:bg-white dark:text-black rounded font-medium hover:opacity-90 transition-opacity"
          >
            Send Message
          </button>
        </form>
      </motion.main>
    </>
  );
}
