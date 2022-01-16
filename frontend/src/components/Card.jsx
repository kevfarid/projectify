const Card = ({ data, title, description, percentage }) => {
  return (
    <div className="card">
      <div className="card__info">
        <h2>{title}</h2>
        <h3>{description}</h3>
        <h4>{data}</h4>
      </div>
      <div className="card__percentage">
        <h2>{percentage}%</h2>
        <p>Total developed</p>
      </div>
    </div>
  )
}

export default Card
