import './App.css';
import photo from './assets/photo.svg';

export default function Innerpeace() {
  const cards = [
    {
      desc: 'My approach blends the ancient wisdom of yoga therapy with spiritual tools such as Tarot reading, Numerology, and intuitive guidance to support transformation on all levels—body, mind, and soul.',
      img: photo,
      name: "Devshree annad",
      post: "Corporate lawyer"
    },
    {
      desc: 'My approach blends the ancient wisdom of yoga therapy with spiritual tools such as Tarot reading, Numerology, and intuitive guidance to support transformation on all levels—body, mind, and soul.',
      img: photo,
      name: "Devshree annad",
      post: "Corporate lawyer"
    },
    {
      desc: 'My approach blends the ancient wisdom of yoga therapy with spiritual tools such as Tarot reading, Numerology, and intuitive guidance to support transformation on all levels—body, mind, and soul.',
      img: photo,
      name: "Devshree annad",
      post: "Corporate lawyer"
    },
  ];

  return (
    <section className="py-5 text-center testi">
      <div className="container">
        <h2 className="mb-2 head short-underline" style={{ fontFamily: 'cursive' }}>
          People finding inner peace
        </h2>
        <p className="text-muted mb-5">Let’s find out how my clients broke those emotional barrier with my spiritual therapy</p>

        
            <div className="row justify-content-start">
  {cards.map((card, idx) => (
    <div className="col-lg-4 col-md-6 mb-4" key={idx}>
      <div className="testimonial-card text-center shadow p-3">
        
      
        <div className="d-flex align-items-center justify-content-start gap-3 mb-3">
          <img src={card.img} alt="..." className="rounded-circle" width="60" height="60" />
          <div className="text-start">
            <h6 className="fw-bold mb-0">{card.name}</h6>
            <small className="text-muted">{card.post}</small>
          </div>
        </div>

        
        <p className="px-3 small ">{card.desc}</p>
      </div>
    </div>
  ))}
</div>

         
       
      </div>
    </section>
  );
}
