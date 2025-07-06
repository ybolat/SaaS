import React from 'react'
import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";

const Page = () => {
    return (
        <main>
            <h1>
                Popular Companions
            </h1>
            <section className='home-section'>
                <CompanionCard
                    id='1'
                    name='Neura the Brainy Explorer'
                    topic='Neural Network of the Brain'
                    subject='Science'
                    duration={45}
                    color='#ffda6e'
                />
                <CompanionCard
                    id='2'
                    name='Countsy the Number Wizard'
                    topic='Derivatives & Integrals'
                    subject='Maths'
                    duration={30}
                    color='#e5d0ff'
                />
                <CompanionCard
                    id='3'
                    name='Verba the Vocabulary Builder'
                    topic='English Literature'
                    subject='Language'
                    duration={30}
                    color='#bde7ff'
                />
            </section>
            <section className='home-section'>
                <CompanionsList/>
                <CTA/>
            </section>
        </main>
    )
}

export default Page
