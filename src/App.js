import React from 'react'

import {Navbar, Hero, Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA, Footer} from './components'
import style from './App.module.css'

const App = () => {
  return (
    <div className={style.wrapper}>
      <div className={`${style.navContainer}`}>
        {/* can contain multiple styling */}
        <div className={style.boxWidth}>
          <Navbar />
        </div>
      </div>

      <div className={style.heroContainer}>
        <div className={style.boxWidth}>
          <Hero />
        </div>
      </div>

      <div className={style.bodyContainer}>
        <div className={style.boxWidth}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App