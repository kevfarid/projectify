import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { getProjectById } from 'Services/projects'

import ProgressBar from 'Components/ProgressBar'
import ReportTable from 'Components/ReportTable'
import ModalPortal from '../components/Modal'
import ViewReport from '../components/ViewReport'

const Project = () => {
  const [project, setProject] = useState({})
  const [showModal, setShowModal] = useState(false)
  const [idReport, setIdReport] = useState('')

  const hadleClick = () => {
    setIdReport('')
    setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  const handleClickReport = (id) => {
    setIdReport(id)
    setShowModal(true)
  }

  const { id } = useParams()

  const getProject = useCallback(async () => {
    const project = await getProjectById(id)
    setProject(project)
  }, [id])

  useEffect(() => {
    getProject()

    const interval = setInterval(() => {
      getProject()
    }, 10000)

    return () => clearInterval(interval)
  }, [getProject])

  return (
    <React.Fragment>
      <div className="grid__full-center">
        {project.reports && (
          <React.Fragment>
            <h1 className="text--title text__no-margin__bottom">
              {project.name}
            </h1>
            <h2 className="text--subtitle text__no-margin">
              {project.reports.length} reports
            </h2>
            <ProgressBar bgcolor="#00BD9D" completed={project.progressTotal} />
            <button
              type="button"
              onClick={hadleClick}
              className="btn btn--primary"
            >
              New Report
            </button>
          </React.Fragment>
        )}
        <ReportTable reportList={project.reports} onClick={handleClickReport} />
      </div>
      {showModal && (
        <ModalPortal onClose={handleClose}>
          <ViewReport
            onClose={handleClose}
            idReport={idReport}
            idProject={id}
          />
        </ModalPortal>
      )}
    </React.Fragment>
  )
}

export default Project
