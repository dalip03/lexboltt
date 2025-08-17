import React from 'react'
import AboutUsHero from '../components/aboutComponents/AboutUsHero';
import AboutSubHero from '../components/aboutComponents/AboutSubHero';
import FeaturesScrollableRow from '../components/aboutComponents/FeaturesScrollableRow';
import AboutStatsHero from '../components/aboutComponents/AboutStatsHero';
import ValuesListHero from '../components/aboutComponents/ValuesListHero';
import TeamHero from '../components/aboutComponents/TeamHero';

function AboutUs() {
  return (
    <div>
      <AboutUsHero/>
      <FeaturesScrollableRow/>
      <AboutSubHero/>
      <AboutStatsHero/>
      <ValuesListHero/>
      <TeamHero/>
    </div>
  )
}

export default AboutUs;
