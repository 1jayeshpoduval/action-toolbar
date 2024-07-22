import './App.css';
import {useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import Tabs from './Components/Tabs';
import { tabs } from './tabsData';
import { toolbars } from './toolbarData';
import Toolbar from './Components/Toolbar';

function App() {

  const [activeTab, setActiveTab] = useState(tabs[0].id)

  return (
    <div className='action-toolbar'>
      <header>
        <main className='page-main'>
          <section className='section'>
            <div className='container'>
              <Toolbar activeTab={activeTab}
              setActiveTab={setActiveTab}   />
              <Tabs activeTab={activeTab}
              setActiveTab={setActiveTab} 
              />
            </div>
          </section>
        </main>
      </header>
    </div>
  );
}

export default App;
