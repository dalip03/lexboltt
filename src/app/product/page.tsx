import React from 'react'
import ProductHero from '../components/productComponents/ProductHero'
import ComplianceVersionHero from '../components/productComponents/ComplianceVersionHero'
import SolutionsHero from '../components/productComponents/SolutionsHero'
import ComplianceManagementHero from '../components/productComponents/ComplianceManagementHero'
import FAQ from '../components/productComponents/FAQ'

function page() {
  return (
<div className="flex flex-col items-center min-h-screen bg-white overflow-x-hidden overflow-y-hidden  mb-10 w-full mx-auto">
      <ProductHero/>
      <ComplianceVersionHero/>
      <SolutionsHero/>  
      <ComplianceManagementHero/>
      <FAQ/>
    </div>
  )
}

export default page
