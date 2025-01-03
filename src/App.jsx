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

  const [sidebarOpen, setSidebarOpen]  = useState(true);
  
  const changeTheme =()=>{
    setTheme((theme) => (theme==="light"?"dark":"light"))
  }


  return (  
     <>
     <ThemeContext.Provider value={{setTheme, theme}}>
      <ThemeProvider theme={themeStyle}>
        <BrowserRouter>
          <Container className={sidebarOpen?"sidebarState active":"sidebarState"}>   
                <Sidebar 
                sidebarOpen={sidebarOpen} 
                setSidebarOpen={setSidebarOpen}/>

                <MyRoutes />
          </Container>
        </BrowserRouter>
      </ThemeProvider>
     </ThemeContext.Provider>
 
     </>
  )
}

const Container = styled.div`
  display:grid;
  grid-template-columns: 100px auto;
  background: ${({ theme }) => theme.bgAlpha};
  &.active{
    grid-template-columns: 300px auto; 
  
    }

`;  

export default App
