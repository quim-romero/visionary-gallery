import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

// Pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
};

export default function App() {
  const location = useLocation();

  return (
    <>
      <Helmet>
        <title>Visionary Gallery – Digital Art Store</title>
        <meta
          name="description"
          content="Discover unique digital artworks. Curated collections. Clean experience."
        />
      </Helmet>

      <ScrollToTop />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
