export default function ApartmentDetail({ apartment, onBack, onDelete, onEdit }) {
  return (
    <div className="detail-card">
      <h2>{apartment.title}</h2>
      <p>Price: {apartment.price} €</p>
      <p>Rooms: {apartment.rooms}</p>
      <p>Location: {apartment.location}</p>

     <div className="form-actions">
       <button onClick={onBack}>Back</button>
      <button onClick={() => onEdit(apartment)}>Edit</button>
      <button onClick={() => onDelete(apartment.id)}>Delete</button>
     </div>
    </div>
  );
}
