import './App.css'
export default function Nav(){
    return(
       
        <nav className='navbar'>
        <div className='nav-head justify-content-end'>
            Subodh
        </div>
          
<ul class="nav justify-content-end">
   
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">About</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Services</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" aria-disabled="true">Events</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" aria-disabled="true">Resources</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" aria-disabled="true">Blogs</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" aria-disabled="true">Content</a>
  </li>
</ul>
        </nav> 
       
    )
}