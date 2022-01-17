const ReportCard = ({ title, createdAt, nameUser, avatar, state }) => {
  return (
    <div className="report report--clickable">
      <span className="report__title">{title}</span>
      <span className="report__date">{createdAt}</span>
      <div className="report__author">
        <img className="report__avatar" src={avatar} alt="avatar" />
        <span className="report__user">{nameUser}</span>
      </div>
      <span className="report__status">{state}</span>
    </div>
  )
}

export default ReportCard
