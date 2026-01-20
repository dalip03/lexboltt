import React from 'react'
import AboutUsHero from '../components/aboutComponents/AboutUsHero';
import FeaturesScrollableRow from '../components/aboutComponents/FeaturesScrollableRow';
import AboutStatsHero from '../components/aboutComponents/AboutStatsHero';
import ValuesListHero from '../components/aboutComponents/ValuesListHero';
import TeamHero from '../components/aboutComponents/TeamHero';
import OurJourneynew from '../components/OurJourneynew';

function AboutUs() {
  return (
    <div>
      <AboutUsHero/>
      <FeaturesScrollableRow/>
      <OurJourneynew/>
      <AboutStatsHero/>
      <ValuesListHero/>
      <TeamHero/>
    </div>
  )
}

export default AboutUs;
