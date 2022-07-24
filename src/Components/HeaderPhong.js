import './index.css'
export default function Header(props){

    return<div id='header'>
      <div className='nav-bar'>
        <div className='logo-container'>
          <img className='logo' src='../../logo.png' alt='logo'/>
          <div className='logo-name'>King Book</div>
        </div>
        <div className='list-item'>
            <div className='item'>Home</div>
            <div className='item'>Books</div>
            <div className='item'>Courses</div>
            <div className='item'>Others</div>
            <div className='item'>Blogs</div>
            <button className='btn btn-success sign-in-btn'>Sign in</button>
        </div>
      </div>
      <div className='content-header'>
        <div className='content-left'>
          <div className='content-left-title'>Are you ready to learn!</div>
          <div>
            <div className='content-left-schedule'>Learn with fun on any schedule</div>
            <div className='content-left-description'>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
            Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
             Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. 
             Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper 
            </div>
          </div>
          <div className='d-flex justify-content-start'>
            <button className='btn btn-success get-started'>Get Started</button>
          </div>
        </div>
        <div className='content-right'>
          <img className='content-img' src='../../content.webp' alt='content-img'/>
        </div>
      </div>

    </div>
}