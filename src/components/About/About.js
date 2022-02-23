import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portifolio'
import './About.css'

const About = () => {
  const { name, role, description, social } = about
  return (
    <div className='about center'>
      {name && (
        <h1>
          Olá, eu sou a <span className='about__name'>{name}</span>
        </h1>
      )}

      {role && <h2 className='about__role'> {role}</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {social && (
          <>
            {social.github && (
              <a
                target="_blank"
                href={social.github}
                aria-label='github'
                className='link link--icon' rel="noreferrer"
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                target="_blank"
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon' rel="noreferrer"
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
