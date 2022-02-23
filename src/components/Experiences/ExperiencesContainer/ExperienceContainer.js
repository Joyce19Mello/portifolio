import uniqid from 'uniqid'
import LinkedIn from '@material-ui/icons/LinkedIn'
import LaunchIcon from '@material-ui/icons/Launch'
import './ExperienceContainer.css'

const ExperienceContainer = ({ experience }) => (
  <div className='experience'>
    <h3>{experience.name}</h3>

    <p className='experience__description'>{experience.description}</p>
    {experience.stack && (
      <ul className='experience__stack'>
        {experience.stack.map((item) => (
          <li key={uniqid()} className='experience__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {experience.linkedin && (
      <a
        target="_blank"
        href={experience.linkedin}
        aria-label='source code'
        className='link link--icon' rel="noreferrer"
      >
        <LinkedIn />
      </a>
    )}

    {experience.livePreview && (
      <a
        target="_blank"
        href={experience.livePreview}
        aria-label='live preview'
        className='link link--icon' rel="noreferrer"
      >
        <LaunchIcon />
      </a>
    )}

  </div>
)

export default ExperienceContainer
