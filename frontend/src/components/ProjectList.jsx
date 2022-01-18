import ProjectCard from 'Components/ProjectCard'

const ProjectList = ({ projects }) => {
  return (
    <div className="background-color-random grid__two-columns">
      {projects.map((project) => (
        <ProjectCard
          key={project._id}
          numberReports={project.reports.length}
          title={project.name}
          percentage={project.progressTotal}
          id={project._id}
        />
      ))}
    </div>
  )
}

export default ProjectList
