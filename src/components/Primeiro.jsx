import React from 'react';



//jeito 'normal' de fazer o component
// export default function Primeiro(){
//     return <h1>Primeiro Componente</h1>
// }

//modo sem nomear a função
// export default function(){
//     return <h1>Primeiro Componente</h1>
// }


//arrow function
export default (props) =>
<h1>{props.value} Componente</h1>
    // console.log(parametro);