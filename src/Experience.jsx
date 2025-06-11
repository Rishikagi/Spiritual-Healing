import './App.css';

export default function Experience() {
  const cards = [
    {
      title: '0000+',
      desc: 'Counselling',
    },
    {
      title: '0000+',
      desc: 'Trainings',
    },
    {
      title: '0000+',
      desc: 'Satisfied Clients',
    },
    {
      title: '0000+',
      desc: 'Camps',
    },
  ];

  return (
    <section className="py-5 text-center res">
      <div className="container">
        <h2 className="mb-4 head short-underline" style={{ fontFamily: 'cursive' }}>
          Happy Clients <br />Satisfaction Ratings
        </h2>
        <div className="row">
          {cards.map((card, idx) => (
            <div className="col-lg-3 col-md-6 mb-4" key={idx}>
              <div className="card shadow-lg exp-card h-100 text-center mx-auto">
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                  <p className="card-title exp-title mb-2">{card.title}</p>
                  <p className="card-text exp-text mb-0">{card.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
