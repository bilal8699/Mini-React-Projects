import React from 'react'
import './App.css'

function App() {
  let [inputData, setInputData] = React.useState([])

  let SaveToDo = (event) => {

    let inputTask = event.target.toname.value;
    if (!inputData.includes(inputTask)) {
      setInputData([...inputData, inputTask])
    }
    else {
      alert("This item already exists");
    }


    event.preventDefault();
    event.target.reset()



  }


  let list = inputData.map((value, index) => {
    return (
      <ListsData
        value={value}
        key={index}
        indexNumber={index}
        inputData={inputData}
        setInputData={setInputData} />
    )
  })


  return (
    <div className='container'>
      <div className='App'>
        <div className='header'>
          <h1>Luminous Tasks</h1>
          <p>Illuminate your productivity</p>
        </div>
        <form action="" onSubmit={SaveToDo}>
          <input type="text" name='toname' placeholder='Add a new task...' />
          <button><i class="fas fa-plus"></i></button>
        </form>

        <div className='outerDiv'>
          <ul>
            {list}
          </ul>
        </div>
      </div>

    </div>
  )
}

export default App


function ListsData(props) {

  let [taskCom, setTaskCom] = React.useState(false)

  let deleteList = () => {
    let finalData = props.inputData.filter((v, i) => i != props.indexNumber)
    props.setInputData(finalData)
  }

  let check = () => {
    return (
      setTaskCom(!taskCom)
    )
  }

  return (
    <li
      onClick={check}
      className={taskCom ? 'completetodo' : ''}>
      {props.value}
      <span
        onClick={deleteList}>
        <i style={{ color: "#00B894" }}
          class="fa-solid fa-trash delet-icon delete-icon"></i>
      </span>
    </li>
  );
}