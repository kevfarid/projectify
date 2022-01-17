import { useState, useEffect, useCallback } from 'react'
import { getProjects } from 'Services/projects'
import ProjectList from 'Components/ProjectList'

import sorts from 'Utils/sorts'

const Home = () => {
  const [projects, setProjects] = useState([])
  const [lastProjects, setLastProjects] = useState([])
  const [projectsDelivery, setProjectsDelivery] = useState([])

  const fetchProjects = useCallback(async () => {
    const projects = await getProjects()
    const lastProjects = projects
      .sort((a, b) => sorts.dateByAsc(a.start, b.start))
      .slice(0, 2)
    const projectsDelivery = projects
      .sort((a, b) => sorts.dateByAsc(a.end, b.end))
      .slice(0, 2)

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
      <ProjectList projects={lastProjects} />
      <h2>Projects for delivery</h2>
      <ProjectList projects={projectsDelivery} />
      <h2>All projects</h2>
      <ProjectList projects={projects} />
    </div>
  )
}

export default Home
