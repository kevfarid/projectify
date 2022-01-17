import { format } from 'date-fns'
import ReportCard from 'Components/ReportCard'

import sorts from 'Utils/sorts'

const ReportTable = ({ reportList }) => {
  return reportList ? (
    <div className="report-table">
      <div className="report text__center report--table__header">
        <span className="report__title">Report Name</span>
        <span className="report__date">Date</span>
        <span className="report__author">Author</span>
        <span className="report__status">Status</span>
      </div>
      {reportList
        .sort((a, b) => sorts.dateByDesc(a.createdAt, b.createdAt))
        .map((report) => (
          <ReportCard
            key={report._id}
            title={report.title}
            createdAt={format(new Date(report.createdAt), 'dd/MM/yyyy')}
            nameUser={report.by.name}
            avatar={report.by.urlImg}
            state={report.state}
          />
        ))}
    </div>
  ) : null
}

export default ReportTable
