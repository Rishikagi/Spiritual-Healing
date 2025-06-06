import code from './assets/code.svg';
import './App.css'
export default function Blogs(){
    return(
        <section className="container py-5 ">
          <div className='blog-head text-center'>
  <h2 className="about-head short-underline ">Blog & Inspiration</h2>
  <p className="about-para ">Insights, stories, and inspiration to support your spiritual journey.</p>
</div>
<div className="card" style={{width: "25rem"}}>
  <img src={code}class="card-img-top small-image" alt="..."/>
  <div className="card-body blog-body" >
    
   <div className="card-text  d-flex justify-content-between">
  <span className='mindfulness'>Mindfulness</span>
  <span>May 20, 2023</span>
</div>

    
  </div>
</div>


</section>

    )
}


