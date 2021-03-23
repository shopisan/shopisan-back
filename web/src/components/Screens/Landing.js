import React, {useState} from 'react'
import axios, { post } from 'axios'

function getCookie(key) {
  var b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
  return b ? b.pop() : "";
}

export default function Landing() {
  const [file, setFile] = useState(null)

  console.log(getCookie('csrftoken'));

  function onFormSubmit(e){
    e.preventDefault() // Stop form submit
    fileUpload(file).then((response) => {
      console.log(response.data);
    })
  }

  function onChange(e) {
    setFile(e.target.files[0])
  }

  function fileUpload(file){
    const url = 'http://127.0.0.1:8000/api/files/';
    const formData = new FormData();
    formData.append('file', file)
    formData.append('file_type', "test2")

    /* let formData = {
      "file_type": "test2",
      "file": file,
      "csrf": getCookie('csrftoken')
    } */

    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    console.log(formData);
    return post(url, formData /* , config */)
  }

  return (
    <form onSubmit={onFormSubmit}>
      <h1>File Upload</h1>
      <input type="file" onChange={onChange} />
      <button type="submit">Upload</button>
    </form>
  )
}
