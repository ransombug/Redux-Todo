import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { FaCheckDouble } from "react-icons/fa"

// Redux
import { connect } from 'react-redux'
import { removeTodo } from '../Action/Todo'

const  Todo = ({todos,markcomplete}) => {
    // console.log("Todo",Todos);
    return (
       <ListGroup className="mt-5 mb-2">
           { todos.map((todo) => (
                 <ListGroupItem key={todo.id}>
                     {todo.title}
                     <span onClick={() => markcomplete(todo.id)} className="float-right">
                         <FaCheckDouble></FaCheckDouble>
                     </span>
                 </ListGroupItem>  
                )
               )
           }  
       </ListGroup>
    )
}

const mapStateToProps = state => ({
    todos : state.todos
})

const mapDispatchToProps = dispatch => ({
    markcomplete : (id) => {
        dispatch(removeTodo(id));
    },
})

export default connect(mapStateToProps, mapDispatchToProps) (Todo);