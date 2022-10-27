import React from 'react'

export const App = () => {
  const saludo = () => {
    alert('Xurxo González Tenreiro');
  }
  return (
    <div className='container'>
      <section className='section header'>
        <header>
          <h1 className="header__title">Join our community</h1>
          <h2 className="header__subtitle">30-day, hassle-free money back guarantee</h2>
        </header>
        <p>
          Gain access to our full library of tutorials along with expert code reviews.
          Perfect for any developers who are serious about honing their skills.
        </p>
      </section>

      <div className="card">
        <section className='section card__suscription'>
          <h1 className="card__title">Monthly Subscription</h1>
          <div className='card__price'><strong>$29</strong> per month</div>
          <p className='card__text'>Full access for less than $1 a day</p>
          <button onClick={ saludo } className="card__btn">Sign Up</button>
        </section>
        <section className='section card__why-us'>
          <h1 className="card__title">Why Us</h1>
          <ul className='card__items'>
            <li>Tutorials by industry experts</li>
            <li>Peer &amp; expert code review</li>
            <li>Coding exercises</li>
            <li>Access to our GitHub repos</li>
            <li>Community forum</li>
            <li>Flashcard decks</li>
            <li>New videos every week</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
