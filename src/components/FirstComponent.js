import React, {useState} from 'react';


export const FirstComponent = () => {

  //let name = "Mila";
  let web = "https://www.milasweb.com";

  const [name, setName] = useState("Mila");

  let courses = [
    "React",
    "Angular",
    "Vue",
    "Node",
    "MongoDB",
    "MySQL",
    "PHP",
    "Python",
    "Java",
    "Ionic",
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "Sass",
    "Laravel",
    "Django;"
  ]

  const changeName = (newName) => {
    setName("Mila Data");
  }

  return (
    <div>
        <h1>My first component </h1>
        <p>My name is {name} and I am a web developer. </p>
        <p>My website is {web} </p>

        <input type="text" onChange={e => changeName(e.target.value)} placeholder="New" />

        <button onClick={ e => changeName("Mila Data")}>Change name</button>

        <h2>Courses  </h2>
        <ul>
          {courses.map((course, index) => {
            return (<li key={index}>{course}</li>)
          })}
        </ul>

    </div>
  )
}
