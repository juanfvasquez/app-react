import React, { Component } from 'react'

// class Tarea extends Component {
//   render() {
//     const { texto, eventoClick } = this.props
//     return <li>
//       <button onClick={eventoClick}>
//         { texto }
//       </button>
//     </li>
//   }
// }

function Tarea({ eventoClick, texto }) {
  // const { eventoClick, texto } = props
  return <li>
      <button onClick={eventoClick}>
        { texto }
      </button>
      <input type="checkbox" />
    </li>
}

export default Tarea