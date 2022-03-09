import React from 'react'
 
const FunctionComponent = (props) => {
  const { nome, tarefa } = props;
  
  return (
    <li>{nome} trará {tarefa}</li>
  )
}
export default FunctionComponent
