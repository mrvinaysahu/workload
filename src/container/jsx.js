
let name = "vinay";
let num=4;
// function checkNum(num) {
// if (num%2===0) {return <div>Even</div>;} else{
//   return <div>odd</div>
// }
// }
const user=[
  {name:"vinay",id:"01"},
  {name:"praful",id:"02"},
  {name:"jay",id:"03"},
]
let a="vovels";
let b="consonent";
function alphacheck(str){
   switch (str)
 {
  case 'a': 
  case 'e':  
  case 'i':  
  case 'o':  
  case 'u':
    return a;
  
  default:  return b;


 } 
}
function Jsx() {
  return (
    <div>
          <h2>loop</h2>
      {
        user.map((item,index)=>{
          return<div key={index}> {item.name}-{item.id}</div>
        })
      }
     <h2>{name}</h2>

     <h2>if else statement</h2>
     <div>{
      // (
      //   (num)=>{
      //     if (num%2===0) {return <div>Even</div>;} else{
      //       return <div>odd</div>
      //     }
      //   }
      // )(2)
      
      num%2===0?<div>Even</div>:<div>odd</div>
      }
      {/* {num%2===0} */}
  
       <h2>alphacheck</h2>
      {alphacheck('a')}
      </div>
    </div>
  );
}

export default Jsx;


export function Gereet(){
    return <h1>hello world</h1>
}
