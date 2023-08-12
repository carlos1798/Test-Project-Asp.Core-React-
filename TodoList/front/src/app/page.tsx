import { Container } from "@mui/material"
import { ToDoBoard } from "./Components/BoardComponent"
import { Todo } from "./Model/ToDo"
import MenuAppBar from "./Components/NavBar"



export default function Home() {

  return (

    <div>
      <MenuAppBar />

      <ToDoBoard />
    </div >

  )
}
