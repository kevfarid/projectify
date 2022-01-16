import { useState, useEffect, useCallback } from 'react'

import ProjectCard from 'Components/ProjectCard'

import { getProjects } from 'Services/projects'

const sortProjectsByStart = (projects) => {
  return projects.sort((a, b) => {
    if (a.start < b.start) {
      return 1
    }
    if (a.start > b.start) {
      return -1
    }
    return 0
  })
}

const sortProjectsByEnd = (projects) => {
  return projects.sort((a, b) => {
    if (a.start < b.start) {
      return -1
    }
    if (a.start > b.start) {
      return 1
    }
    return 0
  })
}

const renderProjects = (projects) => {
  return (
    <div className="background-color-random grid__two-columns">
      {projects.map((project) => (
        <ProjectCard
          key={project._id}
          numberReports={project.reports.length}
          title={project.name}
          percentage={80}
        />
      ))}
    </div>
  )
}

const Home = () => {
  const [projects, setProjects] = useState([])
  const [lastProjects, setLastProjects] = useState([])
  const [projectsDelivery, setProjectsDelivery] = useState([])

  const fetchProjects = useCallback(async () => {
    const projects = await getProjects()
    const lastProjects = sortProjectsByStart(projects).slice(0, 2)
    const projectsDelivery = sortProjectsByEnd(projects).slice(0, 2)

    setLastProjects(lastProjects)
    setProjectsDelivery(projectsDelivery)
    setProjects(projects)
  }, [])

  useEffect(() => {
    fetchProjects()
  }, [fetchProjects])

  return (
    <div>
      <h2>Last Projects</h2>
      {renderProjects(lastProjects)}
      <h2>Projects for delivery</h2>
      {renderProjects(projectsDelivery)}
      <h2>All projects</h2>
      {renderProjects(projects)}
    </div>
  )
}

export default Home
