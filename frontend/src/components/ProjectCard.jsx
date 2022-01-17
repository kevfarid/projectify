import { useNavigate } from 'react-router-dom'

const ProjectCard = ({ numberReports, title, percentage, id }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/project/${id}`)
  }

  return (
    <div className="card" onClick={handleClick}>
      <div className="card__info">
        <h2>{title}</h2>
        <span>Total number of reports</span>
        <h3>{numberReports}</h3>
      </div>
      <div className="card__percentage">
        <h2>{percentage}%</h2>
        <span>Total developed</span>
      </div>
    </div>
  )
}

export default ProjectCard
