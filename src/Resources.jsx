import './App.css';
import mindfulness from './assets/mindfulness.svg';
import locations from './assets/location.svg';
import chakra from './assets/chakra.svg';
import tarrot from './assets/tarrot.svg';
import overlay from './assets/Overlay.svg';
import { FaArrowRight } from 'react-icons/fa';
export default function Resources() {
    const cards = [
    {
      title: 'The Power of Mindfulness',
      desc: 'Explore how mindfulness practices can transform your daily life and enhance your spiritual awareness.',
      img: mindfulness,
      date: 'May 15, 2023',
      time: '8 min read',
    },
    {
      title: 'Understanding Your Chakras',
      desc: 'A comprehensive guide to the seven main chakras and how to balance them for optimal wellbeing.',
      img: chakra,
      date: 'April 22, 2023',
      time: '12 min read',
    },
    {
      title: 'Tarot for Beginners',
      desc: 'A beginner\'s guide to understanding tarot cards and how to use them for personal guidance.',
      img: tarrot,
      date: 'February 5, 2023',
      time: '15 min read',
    },
    {
      title: 'The Healing Power of Nature',
      desc: 'Discover how connecting with nature can enhance your spiritual practice and promote healing.',
      img: overlay,
      date: 'March 10, 2023',
      time: '10 min read',
    },
  ];
  return(
    


    <section className="py-5 text-center res ">
      <div className="container">
        
        <h2 className="mb-4 head short-underline" style={{ fontFamily: 'cursive' }}>
          Spiritual Resources
        </h2>
        <div className="row">
          {cards.map((card, idx) => (
            <div className="col-lg-3 col-md-6 mb-4" key={idx}>
              <div className="card h-100 shadow-sm rounded-4">
                <div className='img-div'>
                <img src={card.img} className="card-img-top rounded-top-4" alt="..." />
                </div>
                <div className="card-body text-start">
                  <h5 className="card-title fw-bold">{card.title}</h5>
                  <p className="card-text">{card.desc}</p>
                </div>
                <div className="card-footer bg-white border-0 text-start px-3 pb-3">
                  <small className="text-muted ">
                    <img className="location" src= {locations} alt="" />{card.date} • {card.time}
                            
                  </small>
                  <br /> <br />
                  <a href="#" className=" read text-decoration-none">
                    Read Article  <FaArrowRight style={{ fontSize: '0.8rem', color: '#B56576' }} />

                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="btn all-articles btn-secondary mt-3">View All Articles</button>
      </div>
    </section>



   
  );
}
