import "./i18n";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Contracts from "./components/Contracts";

export default function App() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Contracts />
    </main>
  );
}
