const Card = ({ item }) => {
  return (
    <div className="card">
      <div className="travel-image">
          <img src={item.imageUrl} alt="travel-image" />
      </div>
      <div className="travel-details">
          <div><span>{item.location}</span> <a href={item.googleMapsUrl}><span>view on google map</span></a></div>
          <div><h1>{item.title}</h1></div>
          {/* <div></div> */}
          <div><p><b>{item.startDate} - {item.endDate}</b></p>{item.description}</div>
      </div>
    </div>
  )
}

export default Card
