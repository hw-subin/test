import React from "react";

function Book(props){
   return (
       <div>
           <h1>{`나의 이름은 ${props.name}입니다.`}</h1>
      

       </div>

   );
}

export default Book; 