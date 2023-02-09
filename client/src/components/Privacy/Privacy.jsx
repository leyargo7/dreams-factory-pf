import React from "react";
import s from './Privacy.module.css'
import { useEffect } from "react";

export default function Privacy(){

    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    return(
        <div className={s.container}>
            <h2>Privacy Policy</h2>
            <br />
            <h3>Our commitment to comply with the Law</h3>
            <p>This Privacy Policy affects the data you provide us, either through the forms, or through any other means at your disposal (telephone, email, etc.). By accepting this Privacy Policy, you give your consent for the company to process your personal data for the purposes indicated below.</p>
            <br />
            <h3>What information will we collect and what do we use it for?</h3>
            <p>We will ask for your name and your email in case you want to ask us or comment on something. 
                We will only use it to process your queries. We will also collect the necessary information to manage your shopping and to keep you informed of their status. We will ask for your name and surname, address, email, telephone number, credit card information and some other information that may 
                be necessary for said purpose. We will access and we will be able to treat the data that you have provided us in the forms and in the use that you make of the Website for the purposes set forth in this Privacy Policy. In addition, by the use you make of the Page you will be able to provide various personal information, 
                which we will use in a dissociated manner to compile statistics. With this, we intend to improve our services and offer you a personalized navigation. Provided that you have previously 
                allowed it, we will send you offers related to our services, via email.</p>
            <br />
            <h3>Your rights</h3>
            <p>You can exercise your rights of access, rectification, cancellation and opposition according to the law by sending us a written request through the contact email of the page.</p>
            <br />
            <h3>Lenguage</h3>
            <p>The language applicable to this Privacy Policy is English. If you have been offered versions of this Privacy Policy in other languages, it has been for your convenience and you expressly accept that they will always be governed by the English version. 
                If there is any contradiction between what the English version of this Privacy Policy says and what the translation says, in any case the English version will prevail.</p>
            <br />
            <h3>Doubts and queries</h3>
            <p>Of course, if you have doubts or questions about the protection of your data on this hotel website, you can contact us through the contact email and we will try to solve your doubts as soon as possible.</p>
            <br />
            Dreams Factory
        </div>
    )
}