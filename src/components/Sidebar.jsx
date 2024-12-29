import React from 'react'
import styled from 'styled-components'
import logo from '../assets/react.svg'
import {v} from '../styles/Variables'


const Sidebar = ({sidebarOpen, setSidebarOpen }) => {
  return (
    <Container isOpen= {sidebarOpen}> 
      <div className='logoContent'>
        <div className='img_content'>
          <img src={logo} alt="" />
        </div>
        <h2>Market</h2>

      </div>
    </Container>
  )
}

const Container = styled.div`
  color:${(props) =>props.theme.text};
  background:${(props) =>props.theme.primary};
  position: sticky;

  .logoContent{
    display: flex;
    justify-content:center;
    align-items:center;
    padding-bottom:${v.lgSpacing};

    .img_content{
      display: flex;
      cursor: pointer;
      transition: all 0.3s;
      transform: ${({isOpen}) =>(isOpen? `scale(1.5)`: `scale(0.7)`)};

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