import React from "react";
import { info } from "./InfoAbout.jsx";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import s from './About.module.css'

export default function About () {
    return(
        <div className={s.abaut}>
        <div className={s.header}>
            <h1 className={s.title}>ABOUT US</h1>               
            <p>
            Hello! We are the creators of Dreams Factory, a website where you can build your pc gamer, and meet their properties. We studied at "SoyHenry" to become Full Stack Developers, learning various technologies and tools to perform successfully in the workplace. In this section you will find the information of each one of us, and our respective links to Linkedin and GitHub. Thank you for visiting our website!
            </p>
        </div>
            <ul className={s.cards}>
                {info.map((user) => {
                    return(
                        <li>
                            <div className={s.card}>
                                <img src="https://blog.soyhenry.com/content/images/2022/01/Currcula-Henry.png" className={s.card_image}alt=""/>
                                <div className={s.card_overlay}>
                                    <div className={s.card_header}>
                                        
                                        <img src={user.image} alt="profile" className={s.card_thumb}/>
                                        <div className={s.card_header_text}>
                                            {user.name}
                                        </div>
                                    </div>
                                    <div className={s.card_description}>
                                        Full Stack Developer
                                        <div className={s.container_link}>
                                        <a href={user.linkedIn} target="_blanck" id='icono' className="logo-container">
                                            <AiFillLinkedin id="contenedor"/>
                                        </a>
                                        <a href={user.gitHub} target="_blanck" id="icono" className="logo-container">
                                            <AiFillGithub id="contenedor"/>
                                        </a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        

                        </li>
                    )
                })}
            </ul>
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