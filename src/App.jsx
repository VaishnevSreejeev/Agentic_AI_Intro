import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Module1 from './pages/Module1';
import Module2 from './pages/Module2';
import Module3 from './pages/Module3';
import Module4 from './pages/Module4';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="module1/*" element={<Module1 />} />
          <Route path="module2/*" element={<Module2 />} />
          <Route path="module3/*" element={<Module3 />} />
          <Route path="module4/*" element={<Module4 />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
