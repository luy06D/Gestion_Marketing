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
  const themeStye = theme === "light"? Light : Dark;
  
  const changeTheme =()=>{
    setTheme((theme) => (theme==="light"?"dark":"light"))
  }

  return (  
     <>
     <ThemeContext.Provider value={{setTheme, theme}}>
      <ThemeProvider theme={themeStye}>
        <BrowserRouter>
          <Container>
            <input type='checkbox' onClick={changeTheme} />
            <Sidebar/>
            <MyRoutes />
          </Container>
        </BrowserRouter>
      </ThemeProvider>
     </ThemeContext.Provider>
 
     </>
  )
}

const Container = styled.div`
background-color:${({theme}) =>theme.body}`;  

export default App
