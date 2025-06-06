import './App.css';

import locations from './assets/location.svg'
import community from './assets/community.svg';
import cal from './assets/cal.svg';
import lock from './assets/lock.svg';
export default function UpcomingEvents(){
    return(
         <section className="container py-5 text-center">
        <h2 className='about-head short-underline'>Upcoming Events</h2>
         <p className='about-para'>Join us for transformative workshops, retreats, and community gatherings.</p>
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
                     {[{title:"Summer Solstice Retreat", desc:"A day-long retreat to celebrate the summer solstice with meditation, yoga, and ritual.", image: cal, location:"Harmony Gardens, 123 Peace Lane" },
                     {title:"Healing Circle Workshop", desc:"A weekend workshop focused on community healing and support through shared practices.", image:community, location:"Serenity Center, 456 Tranquil Avenue" },{title: "Tarot & Intuition Workshop", desc:"Learn to connect with your intuition and develop your tarot reading skills.", image: lock ,location:"Mystic Bookshop, 789 Wisdom Street"}
         
                     ].map(({title, desc,image,location}, i) => (
                       <div key={i} className="col-md-4 mb-3">
                         <div className="card text-left" style={{width: "20rem"}}>
                           <img src={image}class="card-img-top " alt="..."/>
                           <div className="card-body blog-body text-start" >
                             <div className='card-title'>
                                 <h6 className=''>{title}</h6>
         
                             </div>
                             
                            <div className="card-text  ">
                           <p>{desc}</p>
                           <span className='loc-text'>
                            <img className="location" src= {locations} alt="" />{location}
                            {location}</span>
                           
                   
                
                           
                         </div>
                         <a href="#" className="btn card-btn btn-link text-start">Listen Now</a>
                             
                           </div>
                           
                         </div>
                         </div>
                       
                     ))}
                   </div>
        
        <button className="btn btn-outline-secondary mt-3">View All Events</button>
      </section>
    )
}