import React,{useState,useEffect} from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./index.scss"


function AddPages() {
const [table, setTable] = useState([])
    function handleAdd(val) {
        fetch("http://localhost:3000/", {
            method: "POST",
            body: JSON.stringify({val}),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          }
        )
    }

    useEffect(() => {
    getAll()
    }, [])
    

    function getAll() {
      fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((data) => setTable(data))
    }

    function Delete(id) {
      fetch("http://localhost:3000/",{method:"DELETE"})
      .then((res) => res.json())
      .then((data) => getAll())
    }
  return (
    <div className='formik'> <Formik
    initialValues={{ name: '', time: '', comment: '',folder: '', image: '', description: '' }}
    validationSchema={Yup.object({
      name: Yup.string().required('Required'),
      time: Yup.string().required('Required'),
      comment: Yup.string().required('Required'),
      folder: Yup.string().required('Required'),
      image: Yup.string().required('Required'),
      description: Yup.string().required('Required'),
    })}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        handleAdd(values)
        setSubmitting(false);
      }, 400);
    }}
  >
    <Form>
      <label htmlFor="name">Name</label>
      <Field name="name" type="text" />
      <ErrorMessage name="name" />

      <label htmlFor="time">Time</label>
      <Field name="time" type="text" />
      <ErrorMessage name="time" />

      <label htmlFor="comment">Comment</label>
      <Field name="comment" type="text" />
      <ErrorMessage name="comment" />

      <label htmlFor="folder">Folder</label>
      <Field name="folder" type="text" />
      <ErrorMessage name="folder" />

      <label htmlFor="image">Image</label>
      <Field name="image" type="text" />
      <ErrorMessage name="image" />

      <label htmlFor="description">Description</label>
      <Field name="description" type="text" />
      <ErrorMessage name="description" />

      <button type="submit">Submit</button>
    </Form>
  </Formik>
    {table.map((x)=>
    <table>
    <tr>
      <th>Name</th>
      <th>Time</th>
      <th>Comment</th>
      <th>Folder</th>
      <th>Image</th>
      <th>Description</th>

    </tr>
    <tr>
      <td>{x.name}</td>
      <td>{x.time}</td>
      <td>{x.comment}</td>
      <td>{x.folder}</td>
      <td><img src={x.image}  /></td>
      <td>{x.description}</td>
      <i onClick={()=>Delete(x._id)} class="fa-solid fa-trash"></i>
  
    </tr> 
  </table>)}
  
  </div>
  )
}

export default AddPages