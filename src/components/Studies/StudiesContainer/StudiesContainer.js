import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './StudiesContainer.css'

const StudiesContainer = ({ estudo }) => (
  <div className='studies'>
    <h3>{estudo.name}</h3>

    <p className='studies__description'>{estudo.description}</p>
    {estudo.stack && (
      <ul className='studies__stack'>
        {estudo.stack.map((item) => (
          <li key={uniqid()} className='studies__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {estudo.sourceCode && (
      <a
        target="_blank"
        href={estudo.sourceCode}
        aria-label='source code'
        className='link link--icon' rel="noreferrer"
      >
        <GitHubIcon />
      </a>
    )}

    {/* {studies.livePreview && (
      <a
        href={studies.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
    )} */}
  </div>
)

export default StudiesContainer
