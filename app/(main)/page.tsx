'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/main/header';
import Hero from '../components/main/hero';
import WhatIs from '../components/main/whatIS';
import BattleSection from '../components/main/battleSection';

export default function Home() {
   useEffect(() => {
    AOS.init({
      duration: 800,
      once: true, // true = anim une seule fois
    });
  }, []);
  return (
    <div>
      <Header/>
      <Hero/>
      <WhatIs/>
      <BattleSection/>
    </div>
  );
}
