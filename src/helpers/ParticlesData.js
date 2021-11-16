import ParticleAnimation from "react-particle-animation"

const Particles = () => {
  
  return (
    <ParticleAnimation 
      style={{ height: '100vh' }}
      background={{ r:0, g:0, b:0, a:1}}
      particleSpeed={0.1}
      ParticleRadius={1.5}
      color={{r:158, g:217, b:249, a:255}}
    />
  )
};

export default Particles