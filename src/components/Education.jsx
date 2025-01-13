import { useState } from "react"

export default function EducationalForm({ children, defaultValues, handleSubmit, handleCancel, isEditing = false }) {
  const [errors, setErrors] = useState([])
  if (defaultValues === null || defaultValues === undefined) {
    defaultValues = { id: crypto.randomUUID(), school: "", study: "", start: undefined, end: undefined }
  } else {
    isEditing = true
  }


  function handleValidationAndSubmit() {

  }

  return (
    <div className="form-container education-form">
      <h1>Educational Experience</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="school">School name:
          <input required={true} defaultValue={defaultValues.school} placeholder="School" id="school" name="school" type="text" />
        </label>
        <label htmlFor="study">Study title:
          <input required={true} defaultValue={defaultValues.study} placeholder="Study" id="study" name="study" type="text" />
        </label>
        <label htmlFor="start">Start date:
          <input defaultValue={defaultValues.start} placeholder="Start date" id="start" name="start" type="date" />
        </label>
        <label htmlFor="end">End date:
          <input defaultValue={defaultValues.end} placeholder="End date" id="end" name="end" type="date" />
        </label>
        <button type="submit">{isEditing ? "Change" : "Add"}</button>

        {isEditing && (<button className="warning" onClick={handleCancel}>Cancel</button>)}
      </form>
      {children}
    </div >
  )
}

export function EducationalList({ values, handleEdit, handleDelete }) {
  return (
    <ul className="card-list">
      {values.map(e =>
        <li key={e.id} className="card">
          <div className="card-container">
            <div className="card-info info-primary">
              <span className="card-title">{e.school}</span>
              <span>{e.study}</span>
            </div>
            <div className="card-info info-secondary">
              <span>{e.start ? e.end : "?"}</span>
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