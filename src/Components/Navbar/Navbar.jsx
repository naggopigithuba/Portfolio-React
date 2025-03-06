import React, { useRef, useState } from 'react'
import './Navbar.css'; 
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
 

const Navbar = () => {

  const [menu,setMenu] = useState('home');
  const menuRef = useRef();
    const open_menu = () => {
    menuRef.current.style.right='0';
  }
  const close_menu =()=> {
    menuRef.current.style.right = '-350px'
  }



  return (
    <div className='navbar'>
      <div className='nav-name'>Welcome to my Portfolio</div>

      <img src={menu_open} onClick={open_menu} className='nav-mob-open'/>
       
        <ul  ref={menuRef} className='nav-menu'>
          <img src={menu_close} onClick={close_menu} className="nav-mob-close" />
            <li> <AnchorLink className='anchor-link'  href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"? <img src={underline}/>:<></>}</li>
            <li> <AnchorLink className='anchor-link' offset={50} href='#about'><p  onClick={()=>setMenu("about")}>About</p></AnchorLink>{menu==="about"? <img src={underline}/>:<></>}</li>
            <li>  <AnchorLink className='anchor-link' offset={50} href='#skills'><p  onClick={()=>setMenu("skills")}>Skills</p></AnchorLink>{menu==="skills"? <img src={underline}/>:<></>}</li>
            <li>  <AnchorLink className='anchor-link' offset={50} href='#projects'><p  onClick={()=>setMenu("projects")}>Projects</p></AnchorLink>    {menu==="projects"? <img src={underline}/>:<></>}</li>
            <li>  <AnchorLink className='anchor-link'  offset={50} href='#contact'><p  onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"? <img src={underline}/>:<></>}</li>

        </ul>




        <div className="nav-connect"><AnchorLink className='anchor-link'  offset={50} href='#contact'>Connect with me</AnchorLink></div>
    

    </div>
  )
}

export default Navbar









