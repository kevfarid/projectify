import React, { useEffect } from 'react'
import useUser from 'Hooks/useUser'
import { format } from 'date-fns'

const FormReport = ({
  report,
  onSubmit,
  inputsDisabled,
  editMode,
  newMode,
  onEdit,
  onClose,
  onChange,
  error,
}) => {
  const { userInfo } = useUser()
  const [by, setBy] = React.useState({})

  useEffect(() => {
    if (newMode) {
      setBy(userInfo)
    } else {
      setBy(report.by)
    }
  }, [userInfo, newMode, report.by])

  return (
    <React.Fragment>
      <div className="grid__two-columns">
        <div className="report__author">
          <span className="report__user">Created By {by.name}</span>
          <img
            className="report__avatar report__avatar--small"
            src={by.urlImg}
            alt={by.name}
          />
        </div>
        <div className="report__date">
          {report.createdAt && (
            <span className="report__date-text">
              Created At {format(new Date(report.createdAt), 'dd/MM/yyyy')}
            </span>
          )}
        </div>
      </div>
      <form className="form--view-report" onSubmit={onSubmit}>
        <div className="form__group">
          <label htmlFor="title">
            Title
            <input
              type="text"
              className="form__input input--primary"
              name="title"
              defaultValue={report.title}
              disabled={inputsDisabled}
              onChange={onChange}
              required
            />
          </label>
        </div>
        <div className="form__group">
          <label htmlFor="progress">
            Progress
            <input
              type="number"
              className="form__input input--primary"
              name="progress"
              defaultValue={report.progress}
              disabled={inputsDisabled}
              onChange={onChange}
              required
            />
          </label>
        </div>
        <div className="form__group">
          <label htmlFor="state">
            Status
            <select
              className="form__input input--primary"
              name="state"
              defaultValue={report.state || 'pending'}
              disabled={inputsDisabled}
              onChange={onChange}
              required
            >
              <option value="pending">Pending</option>
              <option value="in-progress">In progress</option>
              <option value="completed">Completed</option>
            </select>
          </label>
        </div>
        <div className="form__group">
          <label htmlFor="reportText">
            Report
            <textarea
              className="form__input input--textarea"
              name="report"
              defaultValue={report.report}
              disabled={inputsDisabled}
              onChange={onChange}
              required
            />
          </label>
        </div>
        <div className="form__group btn__group">
          {(editMode || newMode) && (
            <button className="btn btn--primary" type="submit">
              Save
            </button>
          )}
          {!editMode && !newMode && report.isEditable && (
            <button onClick={onEdit} type="button" className="btn btn__alert">
              Edit
            </button>
          )}
          <button
            type="button"
            className="btn btn--primary btn__outline btn__danger"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </form>
      {error && (
        <div className="alert alert--danger">
          <p>
            <strong>{error}</strong>
          </p>
        </div>
      )}
    </React.Fragment>
  )
}

export default FormReport
