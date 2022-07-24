import { Button } from 'bootstrap'
import './index.css'

export default function Header (){
  return <div className='header'>
<div className='nav-bar'>
<div className='logo-container'>
  <img className='logo' src='../../a.jpg.jpg' alt='logo'/>
  <div className='logo-1'>E-school</div>
</div>
  <div className='Menu-list'>
   <div className='list'>Home</div>
   <div className='list'>Book</div>
   <div className='list'>Courses</div>
   <div className='list'>Orthers</div>
   <div className='list'>Blog</div>
   <button className='btn'>Sign In</button>
  </div>
</div>
<div className='content'>
  <div>
    <div className='slogan'>Are You Ready To Code !</div>
  <div className='text-content1'> 
    learn with fun on <span className='text-danger'>any schedule</span>
  </div>
  <div className='text-conten2'>Lorem ipsum is placeholder text 
    commonly used in the graphic, print,
     and publishing industries for previewing 
     layouts and visual mockups.</div>
  <button className='px-4 btn-2'>Get Started</button>
  </div>
  <div>
    <img className='picture'  src='../../a25.jpeg' alt='logo'/>
  </div>
</div>
  </div> 
}