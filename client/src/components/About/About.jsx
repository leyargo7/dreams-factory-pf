import React from "react";
import { info } from "./InfoAbout.jsx";
import "./About.css"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function About () {
    return(
        <div className="abaut">
            <div className="header">
                <h1 className="title">ABOUT US</h1>               
                <p>
                Hello! We are the creators of Dreams Factory, a website where you can build your pc gamer, and meet their properties. We studied at "SoyHenry" to become Full Stack Developers, learning various technologies and tools to perform successfully in the workplace. In this section you will find the information of each one of us, and our respective links to Linkedin and GitHub. Thank you for visiting our website!
                </p>
            </div>
            <div className="cardsAbout">
                {info.map((user) => {
                    return(
                        <div>
                        
                        <div className="cardsInfo">
                            <div className="logos">
                                <a href={user.linkedIn} target="_blanck" id='icono' className="logo-container">
                                    <AiFillLinkedin id="contenedor"/>
                                </a>
                                <a href={user.gitHub} target="_blanck" id="icono" className="logo-container">
                                    <AiFillGithub id="contenedor"/>
                                </a>
                            </div>
                            <h3>Full Stack Developer</h3>
                            <h2 className="letraName">{user.name}</h2>
                            <img src={user.image} width="195" alt="profile" />
                        </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )

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