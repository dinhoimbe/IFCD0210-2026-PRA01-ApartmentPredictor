import { useState } from "react";

export default function ApartmentForm({ initialData, onSave, onCancel }) {
  const [formData, setFormData] = useState(
    initialData || {
    title: "",
    price: "",
    rooms: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const apartmentToSave = {
      ...initialData,
      id: Date.now(),
      title: formData.title,
      price: Number(formData.price),
      rooms: Number(formData.rooms),
      location: formData.location,
    };

    onSave(apartmentToSave);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>New Apartment</h2>

      <div className="form-group">
        <label>Title</label>
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Price</label>
        <input
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Rooms</label>
        <input
          name="rooms"
          type="number"
          value={formData.rooms}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Location</label>
        <input
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
      </div>

   <div className="form-actions">
       <button type="submit">Save</button>
      <button type="button" onClick={onCancel} style={{ marginLeft: "10" }}>
        Cancel
      </button>
   </div>
    </form>
  );
}
