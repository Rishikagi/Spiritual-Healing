import './App.css'
import background from './assets/background.svg';
import background1 from './assets/background1.svg';
import background3 from './assets/background3.svg';
import background4 from './assets/background4.svg';

export default function Resources(){
    return(
        <section className="py-5 text-center">
        <div className="container py-5 text-center">
          <h2 className='about-head short-underline'>Spiritual Resources</h2>
          <p className='about-para'>Explore our collection of resources to deepen your spiritual practice and understanding.</p>
          <div className="d-flex justify-content-center nav-underline gap-3 my-3">
            <ul className="nav nav-underline">
 
     <li className="nav-item">
    <a className="nav-link" href="#">Articles</a>
    </li>
    <li className="nav-item">
    <a className="nav-link" href="#">Books</a>
     </li>
      <li className="nav-item">
    <a className="nav-link" href="#">Videos</a>
     </li>
    
    </ul></div>
          <div className="row">
            {[
                 { title: "The Power of Mindfulness", desc: "Explore how mindfulness practices can transform your daily life and enhance your spiritual awareness." , time: "May 15, 2023 • 8 min read", image: background1},



                { title: "Understanding Your Chakras", desc: "A comprehensive guide to the seven main chakras and how to balance them for optimal wellbeing" ,  time: "April 22, 2023 • 12 min  read", image: background},
                { title: "The Healing Power of Nature", desc: "Discover how connecting with nature can enhance your spiritual practice and promote healing",  time: "March 10, 2023 • 10 min read" ,image: background3},
                { title: "Tarot for Beginners", desc: "A beginner's guide to understanding tarot cards and how to use them for personal guidance.",  time: "February 5, 2023 • 15 min read",image: background4 }
               ].map(({ image ,title, desc, time }, i) => (
              <div key={i} className="col-md-6 mb-3">
                <div className="card card-vision">
  <div className="card-body">
    <div className="d-flex align-items-start gap-2 mb-2">
      {/* Image on the left */}
      <img
        src={image}
        alt=""
        style={{ height: "40px", width: "40px", objectFit: "cover" }}
      />

      {/* Title and time on the right */}
      <div>
        <h6 className="card-title mb-1">{title}</h6>
        <span className="card-time text-muted small">{time}</span>
      </div>
    </div>

    <p className="card-text">{desc}</p>

    <a href="#" className="btn card-btn btn-link">Read Article</a>
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