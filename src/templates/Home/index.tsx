import React from 'react'
import Base from 'src/templates/Base'
import Hero from 'src/components/Hero'

function Home() {
  return (
    <Base>
      <Hero
        content={{
          title: 'ProSpace',
          description:
            'Plataforma desenvolvida para conectar, relacionar e profissionalizar o mercado do esporte no Brasil.'
        }}
      />
    </Base>
  )
}

export default Home
