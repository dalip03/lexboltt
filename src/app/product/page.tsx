import React from 'react'
import ProductHero from '../components/productComponents/ProductHero'
import ComplianceVersionHero from '../components/productComponents/ComplianceVersionHero'
import SolutionsHero from '../components/productComponents/SolutionsHero'
import ComplianceManagementHero from '../components/productComponents/ComplianceManagementHero'
import FAQ from '../components/productComponents/FAQ'

function page() {
  return (
    <div>
      <ProductHero/>
      <ComplianceVersionHero/>
      <SolutionsHero/>  
      <ComplianceManagementHero/>
      <FAQ/>
    </div>
  )
}

export default page
