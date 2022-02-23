import uniqid from 'uniqid'
import { estudos } from '../../portifolio'
import StudiesContainer from './StudiesContainer/StudiesContainer'
import './Studies.css'

const Studies = () => {
  if (!estudos.length) return null

  return (
    <section id='estudos' className='section estudos'>
      <h2 className='section__title'>Estudos</h2>

      <div className='estudos__grid'>
        {estudos.map((estudo) => (
          <StudiesContainer key={uniqid()} estudo={estudo} />
        ))}
      </div>
    </section>
  )
}

export default Studies
