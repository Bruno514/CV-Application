import "../styles/CurricullumPreview.css"
import iconPhone from "../assets/phone.svg"
import iconEmail from "../assets/email.svg"

export default function CurricullumPreview({ generalInfo, educationalInfo = null, professionalInfo = null }) {
  return (<div className="curricullum-container">
    <div className="curricullum">
      <section className="general-info">

        <address>
          <h1 className="name">{generalInfo.name}</h1>

          <div className="address-flex">
            <img className="icon" src={iconEmail} />
            <p>{generalInfo.email}</p>
          </div>

          <div className="address-flex">
            <img className="icon" src={iconPhone} />
            <p>{generalInfo.phone}</p>
          </div>
        </address>

        <h2>About me</h2>

        <p>{generalInfo.summary}</p>
      </section>

      <section className="educational-info">
        <h1>Education</h1>
        {educationalInfo &&
          (<ul>
            {educationalInfo.map(e =>
              <li key={e.id}>
                <h2 className="edu-school">{e.school}</h2>
                <p className="edu-study">{e.study}</p>
                <span>({e.start ? e.start : "?"} - {e.end ? e.end : "Now"})</span>
              </li>
            )}
          </ul>)}
      </section>

      <section className="professional-info">
        <h1>Professional</h1>
        {professionalInfo &&
          (<ul>
            {professionalInfo.map(e =>
              <li key={e.id}>
                <h2 className="pro-company">{e.company}</h2>
                <h3 className="pro-position">{e.position}</h3>
                <p className="pro-responsibilitis">{e.responsibilities}</p>
                <span>({e.start ? e.start : "?"} - {e.end ? e.end : "Now"})</span>
              </li>
            )}
          </ul>)}
      </section>
    </div>
  </div>)
}