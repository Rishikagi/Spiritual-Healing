import mission from './assets/mission.svg';
import vision from './assets/vision.svg';
import community from './assets/community.svg';
import values from './assets/values.svg';
import './App.css'
export default function About(){
    return(
        <section className="container py-5 text-center">
        
   <h2 className="about-head short-underline">About</h2>

<p className='about-para'>Discover our mission, vision, and the journey that led us to create this spiritual haven.</p>
        <div className="row mt-4">
           
          <div className="col-md-6 mb-4 mt-5">
            <div className="p-4 our-journey-head rounded shadow">
              
              <h5>Our Journey</h5>
              <p className='our-journey'>As a certified Yoga Teacher Therapist and Spiritual Life Coach, I've dedicated my life
to guiding individuals on their journey of healing and self-discovery. <br />My approach blends the ancient wisdom of yoga therapy with spiritual tools such
as Tarot reading, Numerology, and intuitive guidance to support transformation on
all levels—body, mind, and soul. <br />I believe that each person has their own unique path to healing and awakening,
and I'm here to provide the guidance, tools, and support you need to navigate your
journey with grace and clarity.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row ">
              {[
                { title: "Our Vision", desc: "To create a world where individuals are empowered to live authentically,connected to their inner wisdom and spiritual nature", image: vision},



                { title: "Our Mission", desc: "To provide transformative tools,practices, and guidance that support individuals in their journey of healing and spiritual growth.",image: mission},
                { title: "Our Values", desc: "Authenticity, compassion, integrity, and a deep respect for each person's unique spiritual journey.",image: values  },
                { title: "Our Community", desc: "A supportive network of like-minded individuals committed to personal growth and spiritual awakening.",image: community }
              ].map((item, i) => (
                <div key={i} className="col-sm-6 mb-3">
                  <div className="p-3 card-vision border rounded">
                    <span> 
                      <img src={item.image} alt="image" className="img-fluid mb-2" style={{ height: "30px" }} />
                    <h6>{item.title}</h6></span>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    )
 }
 