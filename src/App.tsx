import { Layout } from 'antd';
import React, { useState } from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import './App.css';
import Header from './components/header/header';
import Navigation from './components/navigation';
import routes from './routes';
import Footer from './components/footer/footer';

const { Content } = Layout
function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <BrowserRouter>
      <main>
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        <div style={{ display: 'flex'  , marginTop : '30px'}}>
          <Navigation collapsed={collapsed} setCollapsed={setCollapsed} />
          <div className='routes'>
            <Routes>
              {routes.map((route, index) => {
                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={<route.component />}
                  />
                )
              })

              }
            </Routes>     
               <Footer/>
          </div>

        </div>

      </main>
    </BrowserRouter>


  );
}

export default App;
