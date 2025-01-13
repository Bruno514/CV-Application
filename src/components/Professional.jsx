export default function ProfessionalForm({ children, defaultValues, handleSubmit, handleCancel, isEditing }) {
  if (defaultValues === null || defaultValues === undefined) {
    defaultValues = { id: Math.random(), company: "", position: "", responsibilities: "", start: undefined, end: undefined }
  } else {
    isEditing = true
  }

  return (
    <div className="form-container professional-form">
      <h1>Professional Experience</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="company">Company name:
          <input required={true} defaultValue={defaultValues.company} placeholder="Company" id="company" name="company" type="text" />
        </label>
        <label htmlFor="position">Position title:
          <input required={true} defaultValue={defaultValues.position} placeholder="Position" id="position" name="position" type="text" />
        </label>
        <label htmlFor="responsibilities">Responsibilities:
          <input required={true} defaultValue={defaultValues.responsibilities} placeholder="Responsibilities" id="responsibilities" name="responsibilities" type="text" />
        </label>

        <label htmlFor="start">Start date:
          <input defaultValue={defaultValues.start} placeholder="Start" id="start" name="start" type="date" />
        </label>
        <label htmlFor="end">End date:
          <input defaultValue={defaultValues.end} placeholder="End" id="end" name="end" type="date" />
        </label>
        <button type="submit">{isEditing ? "Change" : "Add"}</button>

        {isEditing && (<button className="warning" onClick={handleCancel}>Cancel</button>)}

      </form>

      {children}
    </div>

  )
}

export function ProfessionalList({ values, handleEdit, handleDelete }) {
  return (
    <ul className="card-list">
      {values.map(e =>
        <li key={e.id} className="card card-pro">
          <div className="card-container">
            <div className="card-info info-primary">
              <span className="card-title">{e.company}</span>
              <span>{e.position}</span>
            </div>
            <div className="card-info info-secondary">
              <span>{e.start ? e.start : "?"}</span>
              {" - "}
              <span>{e.end ? e.end : "Now"}</span>
            </div>

            <div className="action-buttons">
              <button onClick={() => handleEdit(e.id)}>Edit</button>
              <button className="warning" onClick={() => handleDelete(e.id)}>Delete</button>
            </div>
          </div>
        </li>
      )}
    </ul>
  )
}