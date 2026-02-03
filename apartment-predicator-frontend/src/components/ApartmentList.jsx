export default function ApartmentList({ apartments, onSelect }) {
  return (
<div className="card-grid">
     {apartments.map((apartment) => (
        <div
          key={apartment.id}
          className="apartment-card"
          onClick={() => onSelect(apartment)}
          style={{ cursor: "pointer" }}
        >
          <h3>{apartment.title}</h3>
          <p className="price"> {apartment.price} € /month</p>
          <p className="location">{apartment.location}</p>
          <p className="description">{apartment.description}</p>
        </div>
      ))}
</div>
  );
}
