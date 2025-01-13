import { useState } from 'react'

import FormsContainer from './components/FormsContainer'

import GeneralForm from './components/General'
import EducationalForm, { EducationalList } from './components/Education'
import ProfessionalForm, { ProfessionalList } from './components/Professional'

import CurricullumPreview from './components/CurricullumPreview'

import './App.css'

import "./styles/Form.css"
import "./styles/Card.css"
import "./styles/Button.css"

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "", email: "", phone: "", summary: ""
  })

  const [educationInfos, setEducationInfo] = useState([])
  const [editingEduID, setEditingEduID] = useState(null)

  const [professionalInfos, setProfessionalInfos] = useState([])
  const [editingProID, setEditingProID] = useState(null)

  function handleGeneralInfoChange(e) {
    setGeneralInfo({ ...generalInfo, [e.target.name]: e.target.value })
  }

  function handleEducationInfoSubmit(e) {
    e.preventDefault()

    const formData = new FormData(e.target);

    const school = formData.get('school');
    const study = formData.get('study');
    const start = formData.get('start');
    const end = formData.get('end');

    let info = { id: Math.random(), school, study, start, end }

    if (editingEduID !== null) {
      let newEducationInfos = educationInfos.filter(e => e.id !== editingEduID)
      info.id = editingEduID

      setEditingProID(null)
      setEducationInfo([...newEducationInfos, info])

    } else {
      setEducationInfo([...educationInfos, info])
    }

    e.target.reset()
  }

  function handleEducationInfoEdit(id) {
    setEditingEduID(id)
  }

  function handleEducationInfoDelete(id) {
    if (id !== editingEduID) {
      setEditingEduID(null)
    }

    setEducationInfo(educationInfos.filter(e => e.id !== id))
  }

  function handleEducationInfoCancel() {
    setEditingEduID(null)
  }

  function handleProfessionalSubmit(e) {
    e.preventDefault()

    const formData = new FormData(e.target);

    const company = formData.get('company');
    const position = formData.get('position');
    const responsibilities = formData.get('responsibilities');
    const start = formData.get('start');
    const end = formData.get('end');


    let info = { id: crypto.randomUUID(), company, position, responsibilities, start, end }

    if (editingProID !== null) {
      let newProfessionalInfos = professionalInfos.filter(e => e.id !== editingProID)
      info.id = editingProID

      setEditingProID(null)
      setProfessionalInfos([...newProfessionalInfos, info])
    } else {
      setProfessionalInfos([...professionalInfos, info])
    }

    e.target.reset()
  }

  function handleProfessionalEdit(id) {
    setEditingProID(id)
  }

  function handleProfessionalDelete(id) {
    if (id !== editingEduID) {
      setEditingProID(null)
    }

    setProfessionalInfos(educationInfos.filter(e => e.id !== id))
  }

  function handleProfessionalCancel(id) {
    setEditingProID(null)
  }

  const currentEduEditing = educationInfos.find(e => e.id === editingEduID)
  const currentProEditing = professionalInfos.find(e => e.id === editingProID)

  return (
    <>
      <FormsContainer>
        <GeneralForm values={generalInfo} handleChange={handleGeneralInfoChange} />

        <EducationalForm defaultValues={currentEduEditing} handleSubmit={handleEducationInfoSubmit} handleCancel={handleEducationInfoCancel} >
          <EducationalList values={educationInfos} handleDelete={handleEducationInfoDelete} handleEdit={handleEducationInfoEdit} />
        </EducationalForm>

        <ProfessionalForm defaultValues={currentProEditing} handleSubmit={handleProfessionalSubmit} handleCancel={handleProfessionalCancel} >
          <ProfessionalList values={professionalInfos} handleDelete={handleProfessionalDelete} handleEdit={handleProfessionalEdit} />
        </ProfessionalForm>
      </FormsContainer>

      <CurricullumPreview generalInfo={generalInfo} educationalInfo={educationInfos} professionalInfo={professionalInfos} />
    </>
  )
}

export default App
