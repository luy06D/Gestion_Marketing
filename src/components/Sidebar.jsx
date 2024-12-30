import React from 'react'
import styled from 'styled-components'
import logo from '../assets/react.svg'
import {v} from '../styles/Variables'
import { AiOutlineLeft } from "react-icons/ai";


const Sidebar = ({sidebarOpen, setSidebarOpen }) => {
  return (
    <Container isOpen= {sidebarOpen}> 
      <button className="SiderbarButton">
        <AiOutlineLeft/>
      </button>
      <div className='logoContent'>
        <div className='img_content'>
          <img src={logo} alt="" />
        </div>
        <h2>MARKETING</h2>

      </div>
    </Container>
  )
}

const Container = styled.div`
  color:${(props) =>props.theme.text};
  background:${(props) =>props.theme.primary};
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
      transform: ${({isOpen}) =>(isOpen? `scale(0.7)`: `scale(0.5)`)};

      img{
        max-width: 100%;
        height: auto;
      }
    }
    

  }

  h2{
    display: ${({isOpen}) =>(isOpen?`block`: `none`)};
  }


`;

export default Sidebar