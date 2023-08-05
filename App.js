import React,{useState}from "react";
import ListTodo from "./listTodo";
import "./index.css"



function App(){
const [task,setTask]= useState("");
const [todos,setTodos]= useState([]); 
const changeHandler = e =>{
    setTask(e.target.value)
}
const sumbitHandler = e=>{
    e.preventDefault();
   const newTodos = [...todos,task]
   setTodos(newTodos);
   setTask("");
}
const deleteHandler = (indexValue)=>{
    const newTodos = todos.filter((todos,index) => index !==indexValue)
   setTodos(newTodos);
}
    return(
    <div>
<center>
<h1>Todo Application</h1><br/>
<form onSubmit={sumbitHandler}>
<input size="30" type="text" name="task"   value={task} onChange={changeHandler}/>  &nbsp;&nbsp;
<input type="submit" name="Add" value="Add"/>
</form>
<ListTodo todolist={todos} deleteHandler={deleteHandler}/>


</center>
    </div>


          

       
    )
}

export default App














































// import React ,{useState}from 'react'
// import axios from 'axios';
// import GalleryApp from './galleryApp';

// const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";

// const App = ()=>{
//      const [search,setSearch]= useState("");
//      const [data,setData] = useState([]);
//      const changeHandler = e =>{
//         setSearch(e.target.value);
//      }
//      const sumbitHandler = e =>{
//         e.preventDefault();
//         axios
//     .get(
//       `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
//     )
//     .then(res => setData(res.data.photos.photo))
   
//      }
//     return(
//         <div>
//        <center>
//         <h2>Gallery</h2>
//         <form onSubmit={sumbitHandler}>
//             <input type='text'  value={search} onChange={changeHandler}/> <br/> <br/>
//             <input type='submit'/>
//         </form>
//         <br/>
//         {data.length>=1?<GalleryApp data={data}/>:<h4>no data</h4>}

//        </center>

//         </div>
//     )
// }

// export default App
































// // import React from 'react'
// // import View from './view'



// // export const UserContext = React.createContext();

// // const App = ()=>{
// //   return(
// //     <div>
// //   <center>
// //     <UserContext.Provider value={"ciao"}>
// //     <View />

// //     </UserContext.Provider>
// //   </center>
// //     </div>
// //   )
// // }

// // export default App

































// // // import React, {Component} from "react";
// // // import View from "./view";
// // // import './App.css'

 
// // // export default class App extends Component{
// // //   state ={
// // //     name: "classprops",
// // //     age: 18
// // //   }
// // //   render(){
// // //     return(
// // //       <div>

// // //         <View name={this.state.name} age= {this.state.age}/>

// // //         <button className="button1" onClick={()=> console.log("clicked")}>Click here</button>
// // //       </div>
// // //     )
// // //   }
// // // }
 