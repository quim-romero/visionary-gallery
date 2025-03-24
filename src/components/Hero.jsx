import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full">
      <video
        className="fixed inset-0 w-full h-full object-cover z-0 opacity-60"
        autoPlay
        muted
        loop
        playsInline
        src="\public\video\hero-background.mp4"
      />

      <div className="fixed inset-0 z-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80" />

      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-white text-4xl md:text-6xl font-display mb-4">
          Visionary Gallery
        </h1>
        <p className="text-neutral-200 text-lg md:text-xl max-w-2xl">
          A curated experience of digital art and aesthetic technology.
        </p>
      </motion.div>
    </section>
  );
}
