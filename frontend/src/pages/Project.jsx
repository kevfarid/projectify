import React, { useCallback, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { getProjectById } from 'Services/projects'

import ProgressBar from 'Components/ProgressBar'
import ReportTable from 'Components/ReportTable'

const Project = () => {
  const [project, setProject] = React.useState({})

  const { id } = useParams()

  const getProject = useCallback(async () => {
    const project = await getProjectById(id)
    setProject(project)
  }, [id])

  useEffect(() => {
    getProject()
  }, [getProject])

  return (
    <div className="grid__full-center">
      {project.reports && (
        <React.Fragment>
          <h1 className="text--title text__no-margin__bottom">
            {project.name}
          </h1>
          <h2 className="text--subtitle text__no-margin">
            {project.reports.length} reports
          </h2>
          <ProgressBar bgcolor="#00BD9D" completed={80} />
        </React.Fragment>
      )}
      <ReportTable reportList={project.reports} />
    </div>
  )
}

export default Project
