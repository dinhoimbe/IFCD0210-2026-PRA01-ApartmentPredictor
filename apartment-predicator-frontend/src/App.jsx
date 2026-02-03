import { useState } from "react";

import { initialApartments } from "./data/apartments";

import ApartmentList from "./components/ApartmentList";
import ApartmentDetail from "./components/ApartmentDetail";
import ApartmentForm from "./components/ApartmentForm";

export default function App() {
  const [apartments, setApartments] = useState(initialApartments);
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [editingApartment, setEditingApartment] = useState(null);
  const [mode, setMode] = useState("list"); // list | detail | form

  // DELETE
  const handleDeleteApartment = (id) => {
    const updatedApartments = apartments.filter(
      (apartment) => apartment.id !== id
    );

    setApartments(updatedApartments);
    setSelectedApartment(null);
    setEditingApartment(null);
    setMode("list");
  };

  return (
    <div className="app">
      <h1 className="app-title">Apartment Predictor</h1>
    
      {mode === "list" && (
        <>
          <button className="add-button"
            onClick={() => {
              setEditingApartment(null); 
              setMode("form");
            }}
          >
            Add apartment
          </button>

          <ApartmentList
            apartments={apartments}
            onSelect={(apartment) => {
              setSelectedApartment(apartment);
              setMode("detail");
            }}
          />
        </>
      )}

      {/* DETAIL */}
      {mode === "detail" && selectedApartment && (
        <ApartmentDetail
          apartment={selectedApartment}
          onBack={() => {
            setSelectedApartment(null);
            setMode("list");
          }}
          onDelete={handleDeleteApartment}
          onEdit={(apartment) => {
            setEditingApartment(apartment);
            setMode("form");
          }}
        />
      )}

      {/* FORM (CREATE + EDIT) */}
      {mode === "form" && (
        <ApartmentForm
          initialData={editingApartment}
          onSave={(apartmentToSave) => {
            if (editingApartment) {
              // EDIT
              const updated = apartments.map((apt) =>
                apt.id === apartmentToSave.id ? apartmentToSave : apt
              );
              setApartments(updated);
            } else {
              // CREATE
              setApartments([...apartments, apartmentToSave]);
            }

            setEditingApartment(null);
            setSelectedApartment(null);
            setMode("list");
          }}
          onCancel={() => {
            setEditingApartment(null);
            setMode("list");
          }}
        />
      )}
    </div>
  );
}
