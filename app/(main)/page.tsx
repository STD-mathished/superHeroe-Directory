import { Camera } from 'lucide-react';
import Header from '../components/main/header';
import Hero from '../components/main/hero';
import WhatIs from '../components/main/whatIS';
import BattleSection from '../components/main/battleSection';

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <WhatIs/>
      <BattleSection/>
    </div>
  );
}
