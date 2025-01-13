export default function GeneralForm({ values, handleChange, backgroundColor = {} }) {
  return (
    <div style={{ backgroundColor: backgroundColor }} className="form-container general-form">
      <h1>General Information</h1>
      <form className="form">
        <label htmlFor="name">Name:
          <input placeholder="Name" onChange={handleChange} value={values.name} id="name" name="name" type="text" />
        </label>
        <label htmlFor="email">Email:
          <input placeholder="Email" onChange={handleChange} value={values.email} id="email" name="email" type="email" />
        </label>
        <label htmlFor="phone">Phone number:
          <input placeholder="Phone" onChange={handleChange} value={values.phone} id="phone" name="phone" type="tel" />
        </label>
        <label htmlFor="summary">Summary:
          <textarea placeholder="Write some more about you..." onChange={handleChange} value={values.summary} id="summary" name="summary" type="textarea" />
        </label>

      </form>

    </div >
  )
}
