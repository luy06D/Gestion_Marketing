import React from 'react'
import styled from 'styled-components'
import logo from '../assets/react.svg'
import {v} from '../styles/Variables'
import { AiOutlineLeft ,
  AiFillHome, 
  AiOutlineDeploymentUnit,
  AiOutlineFile } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { MdHome } from "react-icons/md";


const Sidebar = ({sidebarOpen, setSidebarOpen }) => {

const ModSideBarOpen=()=>{
  setSidebarOpen(!sidebarOpen);

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
          <Link to={to} className='Links'>
            <div className='LinkIcon'>
              {icon}
            </div>
            {sidebarOpen && (<span>{label}</span>)
            }
            
          </Link>
        </div>
      ))}
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


]

//#endregion


//#region styles components
const Container = styled.div`
  color:${(props) =>props.theme.text};
  background:${(props) =>props.theme.barrascroll};
  position: sticky;
  padding-top: 20px;

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
  }




`;

//#endregion



export default Sidebar