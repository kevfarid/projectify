const ProjectCard = ({ numberReports, title, percentage }) => {
  return (
    <div className="card">
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
