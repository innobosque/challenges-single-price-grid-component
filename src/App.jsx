import React from 'react'
import { useState } from 'react'

export const App = () => {
  const [value, setValue] = useState('Sign Up');
  const saludar = () => {
    setValue('Xurxo González Tenreiro');
  }
  return (
    <div className='container'>
      {/* Cabecera */}
      <section className='card card__header'>
        <header>
          <h1 className="header__title">Join our community</h1>
          <h2 className="header__subtitle">30-day, hassle-free money back guarantee</h2>
        </header>
        <p>
          Gain access to our full library of tutorials along with expert code reviews.
          Perfect for any developers who are serious about honing their skills.
        </p>
      </section>
      {/* Suscripción */}
      <section className='card card__suscription'>
        <h1 className="card__title">Monthly Subscription</h1>
        <p className='card__price'><strong>$29</strong> per month</p>
        <p className='card__text'>Full access for less than $1 a day</p>
        <button onClick={saludar} className="card__btn">{ value }</button>
      </section>
      {/* Why us */}
      <section className='card card__why-us'>
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
  )
}
