export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 px-4 py-6 mt-16 text-sm text-neutral-500 dark:text-neutral-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p>
          © {year} Visionary Gallery. All rights reserved.
        </p>

        <div className="flex gap-4">
          <a
            href="#"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            Privacy
          </a>
          <a
            href="#"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            Terms
          </a>
          <a
            href="#"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
