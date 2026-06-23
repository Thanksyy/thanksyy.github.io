import Sidebar from "@/components/Sidebar";
import { About } from "@/components/Intro";
import { Projects, Awards, Students, Services, Join, Footer } from "@/components/Sections";
import Publications from "@/components/Publications";
import { useReveal } from "@/hooks/useReveal";

export default function Home() {
  useReveal();
  return (
    <div className="min-h-screen lg:flex">
      <Sidebar />
      <main className="dot-grid min-w-0 flex-1">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-12">
          <About />
          <Projects />
          <Publications />
          <Awards />
          <Students />
          <Services />
          <Join />
          <Footer />
        </div>
      </main>
    </div>
  );
}
