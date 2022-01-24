import React, { useEffect, useCallback, useState } from 'react'

import { getReportById } from 'Services/reports'
import useUser from 'Hooks/useUser'
import { addReport, updateReport } from '../services/reports'
import FormReport from './FormReport'

const canEdit = (setInputsDisabled, setEditMode) => {
  setInputsDisabled(false)
  setEditMode(true)
}

const ViewReport = ({ idReport, idProject, onClose }) => {
  const [inputsDisabled, setInputsDisabled] = useState(true)
  const [editMode, setEditMode] = useState(false)
  const [newMode, setNewMode] = useState(false)
  const [report, setReport] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const { userInfo } = useUser()

  const getData = useCallback(async () => {
    const report = await getReportById(idReport)

    setReport(report)
    setIsLoading(false)
  }, [idReport])

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault()

      if (editMode && !inputsDisabled) {
        setIsLoading(true)
        const newData = await updateReport(idReport, {
          ...report,
          project: idProject,
        }).catch((err) => {
          setError(err.response.data.message)
        })

        if (newData) {
          setReport(newData)
          setError(null)
          setIsLoading(false)
          onClose()
        }
      } else if (newMode && !inputsDisabled) {
        setIsLoading(true)
        const newData = await addReport(report).catch((err) => {
          setError(err.response.data.message)
        })

        if (newData) {
          setReport(newData)
          setError(null)
          setIsLoading(false)
          onClose()
        }
      }

      if (error) {
        setInputsDisabled(true)
        setEditMode(false)
        setNewMode(false)

        setIsLoading(false)
      }
    },
    [
      editMode,
      error,
      idProject,
      idReport,
      inputsDisabled,
      newMode,
      onClose,
      report,
    ]
  )

  const handleOnChange = (e) => {
    const { name, value } = e.target

    setReport({
      ...report,
      [name]: value,
    })
  }

  useEffect(() => {
    if (!idReport) {
      setNewMode(true)
      setInputsDisabled(false)
      setReport({
        by: userInfo._id,
        project: idProject,
      })
      setIsLoading(false)
    } else {
      getData()
    }
  }, [getData, idProject, idReport, userInfo._id])

  return (
    <React.Fragment>
      <h1>Report</h1>
      {isLoading && <p>Loading...</p>}
      {!isLoading && report && (
        <FormReport
          report={report}
          onEdit={() => canEdit(setInputsDisabled, setEditMode)}
          onSubmit={handleSubmit}
          onClose={onClose}
          inputsDisabled={inputsDisabled}
          editMode={editMode}
          newMode={newMode}
          onChange={handleOnChange}
          error={error}
        />
      )}
    </React.Fragment>
  )
}
export default ViewReport
