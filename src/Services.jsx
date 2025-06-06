import './App.css';
import sleep from './assets/sleep.svg';
import circle from './assets/circle.svg';
import plus from './assets/plus.svg';
export default function Services(){
    return(
        <section className=" py-5">
        <div className="container text-center">
          <h2 className='about-head short-underline'>Our Services</h2>
          <p className='about-para'>Explore our offerings designed to support your spiritual journey and personal transformation.</p>
          <div className="serv-nav d-flex justify-content-center nav-underline gap-3 my-3">
            <ul className="nav nav-underline">
 
     <li className="nav-item">
    <a className="nav-link" href="#">Meditation</a>
    </li>
    <li className="nav-item">
    <a className="nav-link" href="#">Tarrot Readings</a>
     </li>
      <li className="nav-item">
    <a className="nav-link" href="#">Spiritual Practices</a>
     </li>
    
    </ul></div>
          <div className="row mt-4">
            {[{title:"Inner Peace Meditation", desc:"A 15-minute guided meditation to help you find calm and clarity in the midst of life's challenges.", image: circle},
            {title:"Chakra Balancing", desc:"A 30-minute meditation to align and balance your energy centers for optimal wellbeing.", image:plus },{title: "Sleep & Relaxation", desc:"A soothing meditation designed to help you release tension and prepare for restful sleep", image: sleep}

            ].map(({title, desc,image}, i) => (
              <div key={i} className="col-md-4 mb-3">
                <div className="card text-left" style={{width: "20rem"}}>
                  <img src={image}class="card-img-top " alt="..."/>
                  <div className="card-body blog-body text-start" >
                    <div className='card-title'>
                        <h6 className=''>{title}</h6>

                    </div>
                    
                   <div className="card-text  d-flex justify-content-between">
                  <p>{desc}</p>
                  
          
       
                  
                </div>
                <a href="#" className="btn card-btn btn-link text-start">Listen Now</a>
                    
                  </div>
                  
                </div>
                </div>
              
            ))}
          </div>
          <button className="btn all-articles btn-secondary mt-3">View All Articles</button>
        </div>
      </section>
    )
}