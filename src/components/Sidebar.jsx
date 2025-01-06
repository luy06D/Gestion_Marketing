import React, { useContext } from 'react'
import styled from 'styled-components'
import logo from '../assets/market.svg'
import {v} from '../styles/Variables'
import { AiOutlineLeft ,
  AiFillHome, 
  AiOutlineDeploymentUnit,
  AiOutlineFile,
  AiOutlineExclamationCircle,
  AiOutlineSetting,
  AiOutlineUser,
  AiOutlineFilePdf   } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import {Divider} from "@nextui-org/divider";
import {Switch} from "@nextui-org/react";
import { ThemeContext } from '../App';


const Sidebar = ({sidebarOpen, setSidebarOpen }) => {

const ModSideBarOpen=()=>{
  setSidebarOpen(!sidebarOpen);

}

const {setTheme, theme} = useContext(ThemeContext);

const changeTheme =()=>{
  setTheme((theme) => (theme==="light"?"dark":"light"))
}



  return (
    <Container isOpen= {sidebarOpen}> 
      <button className="SiderbarButton" onClick={ModSideBarOpen} >
        <AiOutlineLeft/>
      </button>
      <div className='logoContent'>
        <div className='img_content'>
          <img src={logo} alt="" />
      </div>

        <h2>MARKETING</h2>

      </div>
      {linksArray.map(({icon, label,  to})=>(

        <div className='LinkContainer' key={label}>
          <NavLink to={to} className={({isActive})=>`Links ${isActive?`active`: ``}` }  >
            <div className='LinkIcon'>
              {icon}
            </div>
            {sidebarOpen && (<span>{label}</span>)
            }
            
          </NavLink>
        </div>
      ))}

      <Divider className='mt-5'/>

      {secondLinksArray.map(({icon, label,  to})=>(

        <div className='LinkContainer' key={label}>
          <NavLink to={to} className={({isActive})=>`Links ${isActive?`active`: ``}` }  >
            <div className='LinkIcon'>
              {icon}
            </div>
            {sidebarOpen && (<span>{label}</span>)}
            
          </NavLink>
        </div>
        ))}

      <Divider className='mt-5'/>
      
      <div className=''>
        <Switch onClick={changeTheme}/>
        {sidebarOpen && (<span>DARKMODE</span>)}
      </div>

    </Container>
    
  )
}

//#region Data links

const linksArray = [
  {
    label: "Inicio",
    icon : <AiFillHome/>,
    to : "/",
  },
  {
    label: "Proyectos",
    icon : <AiOutlineDeploymentUnit/>,
    to : "/proyectos",
  },
  {
    label: "Tareas",
    icon : <AiOutlineFile />,
    to : "/tareas",
  },
  {
    label: "Reportes",
    icon : <AiOutlineFilePdf  />,
    to : "/Reportes",
  },
  {
    label: "Usuarios",
    icon : <AiOutlineUser  />,
    to : "/Usuarios",
  },


]


const secondLinksArray = [
  {
    label: "Ajustes",
    icon : <AiOutlineSetting/>,
    to : "/Ajustes",
  },
  {
    label: "Ayuda",
    icon : <AiOutlineExclamationCircle  />,
    to : "/Ayuda",
  },


]
//#endregion


//#region styles components
const Container = styled.div`
  color:${(props) =>props.theme.text};
  background:${(props) =>props.theme.bg};
  position: sticky;
  padding-top: 20px;
  height: 100vh;

  .SiderbarButton{
    position: absolute;
    top: ${v.xxlSpacing};
    right: -18px;
    width: 32px;
    height: 32px ;
    border-radius: 50%;
    background: ${(props)=>props.theme.bgtgderecha};
    box-shadow: 0 0 4px ${(props)=>props.theme.bg3}, 
    0 0 7px ${(props)=>props.theme.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s;
    transform: ${({isOpen}) => (isOpen? `initial` : `rotate(180deg)`)} ;

     
  }


  .logoContent{
    display: flex;
    justify-content:center;
    align-items:center;
    padding-bottom:${v.lgSpacing};

    .img_content{
      display: flex;
      cursor: pointer;
      transition: all 0.3s;
      transform: ${({isOpen}) =>(isOpen? `scale(0.7)`: `scale(0.9)`)};

      img{
        max-width: 100%;
        height: auto;
      }
    }
    h2{
      display: ${({isOpen}) =>(isOpen?`block`: `none`)};
    }
    

  }

  .LinkContainer{
    margin: 8px 0;
    padding: 0 15%;
    :hover{
      background: ${(props) => props.theme.bg3};
    }
  }

  .Links{
    display:flex;
    align-items: center;
    text-decoration: none;
    padding: calc(${v.smSpacing} -2px) 0;
    .LinkIcon{
      padding: ${v.smSpacing} ${v.mdSpacing};
      display: flex;

      svg{
        font-size:25px;
      }

    }
    &.active{
      .LinkIcon{
        svg{
          color:${(props)=>props.theme.bg4};
        }
      }
    }
  }




`;

//#endregion



export default Sidebar