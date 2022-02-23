import uniqid from 'uniqid'
import { experiences } from '../../portifolio'
import './Experiences.css'
import ExperienceContainer from './ExperiencesContainer/ExperienceContainer'


const Experiences = () => {
  if (!experiences) return null

  return (
    <section className='section experience center' id='experience'>
      <h2 className='section__title'>Experiências</h2>
      <div className='experience__grid'>
        {experiences.map((experience) => (
          <ExperienceContainer key={uniqid()} experience={experience} />
        ))}
      </div>
    </section>
  )
}

export default Experiences
