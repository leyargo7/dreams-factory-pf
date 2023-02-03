import React from "react";
import { info } from "./InfoAbout.jsx";
import s from "./About.module.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function About () {
    return (
    <div className={s.about}>
    <h1>TEAM</h1>   
    <div className={s.container}>
            
    {
   info.map((ev) => {
       return(
        <div className={s.shell}>
            <div className={s.decoration}></div>

            <div className={s.imgShell}>
                <img src={ev.image} alt='img not found' />
            </div> 

           <div className={s.header}>
                <h3>{ev.name}</h3>
            <a href={ev.linkedIn}> <button ><AiFillLinkedin/></button> </a>
            <a href={ev.gitHub} > <button ><AiFillGithub/></button> </a>
            </div>
 
            </div>           
        )
    })
    }
        </div>
    </div>

      );

}








// export default function About () {
//     return(
//         <div className="container">
//         {
//         info.map((ev) => {
//             return(
//                 <div className="card">
//                     <h3 className="h11">{ev.name}</h3>
//                     <a className="pp" href={`${ev.linkedIn}`} > {ev.linkedIn}</a>
//                     <a className="p" href={`${ev.gitHub}`} > {ev.gitHub}</a>                      
//                 </div>           
//             )
//         })
//         }
//         </div>
 
//     )
// }