import './App.css'
import MyRoutes from './routers/routes'
import styled, { ThemeProvider } from "styled-components";
import {BrowserRouter} from 'react-router-dom'
import Sidebar from "./components/Sidebar";
import React, { useState } from "react";
import { Light, Dark } from './styles/Themes';

export const ThemeContext = React.createContext(null);


function App() {

  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light"? Light : Dark;

  const [sidebarOpen, setSidebarOpen]  = useState(false);
  
  const changeTheme =()=>{
    setTheme((theme) => (theme==="light"?"dark":"light"))
  }


  return (  
     <>
     <ThemeContext.Provider value={{setTheme, theme}}>
      <ThemeProvider theme={themeStyle}>
        <BrowserRouter>
          <Container>    
            <main className={sidebarOpen?"sidebarState active":"sidebarState"}>
              <section className='sidebar'>
                <Sidebar />
              </section>
              <section>
                <MyRoutes />
              </section>
            </main>
          </Container>
        </BrowserRouter>
      </ThemeProvider>
     </ThemeContext.Provider>
 
     </>
  )
}

const Container = styled.div`
  .sidebarState {
  display:grid;
  grid-template-columns: 90px auto;
  background: ${({ theme }) => theme.bgTotal};
  &.active{
    grid-template-columns: 300px auto; 
  
  
    }
  }

`;  

export default App
