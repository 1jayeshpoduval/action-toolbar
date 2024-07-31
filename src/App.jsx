import "./App.css";
import { useState } from "react";
import Tabs from "./Components/Tabs";
import { tabs } from "./tabsData";
import Toolbar from "./Components/Toolbar";

function App() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <>
      <header>
        <main>
          <section className="bg-mountain-blue-800 relative h-screen w-screen p-12 font-medium text-white">
            <div className="w-90% mx-auto h-full max-w-2xl">
              <Toolbar activeTab={activeTab} setActiveTab={setActiveTab} />
              <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
          </section>
        </main>
      </header>
    </>
  );
}

export default App;
