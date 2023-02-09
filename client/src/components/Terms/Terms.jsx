import React from "react";
import s from './Terms.module.css'
import { useEffect } from "react";

export default function Terms() {

    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    return(
        <div className={s.container}>
            <h2>Terms of use of the Affiliate partner account DreamsFactory.com</h2>
            <p>DreamsFactory.com may offer its business partners access to online user accounts, such as Connect (extranet) and the Affiliate Center 
                (hereinafter "DreamsFactory.com Services"). Persons who have access to these user accounts, whether through a direct agreement with 
                DreamsFactory.com or because they act on behalf of a DreamsFactory.com partner (hereinafter the "Master Agreement"), must comply with the 
                following Terms of use.</p>
            <br />
            <p>You agree not to use, or permit third parties to use, the DreamsFactory.com Services for any purpose other than that agreed to in the Master Agreement, 
                and not to:</p>
            <br />
            <ul>
                <li>Send unsolicited commercial emails to customers.</li>
                <li>Falsifying information, including concealing your identity.</li>
                <li>Upload viruses, malware or any type of malicious code.</li>
                <li>Change, disable or circumvent any process of the DreamsFactory.com systems.</li>
                <li>Damage, disable, impair and/or overload DreamsFactory.com systems.</li>
                <li>Reverse engineer any of the services offered by DreamsFactory.com</li>
                <li>Copy or use DreamsFactory.com trademarks, unless expressly agreed to with DreamsFactory.com</li>
                <li>Reveal, share or resell any of your user data</li>
                <li>Allow third parties access to DreamsFactory.com systems for commercial or any other reason, without the express written consent of DreamsFactory.com</li>
                <li>Use the DreamsFactory.com Services in violation of applicable laws, including those relating to the legal rights of others. 
                    This also includes uploading content that violates the intellectual property rights of third parties</li>
            </ul>
            <br />
            <span>Loss or misuse of user data should be reported immediately to report@DreamsFactory.com.</span>
            <br />
            <span>Failure to comply with these Terms of Use may result in the suspension of your access to the DreamsFactory.com Services. DreamsFactory.com reserves the right to take additional legal action, 
                such as termination of the contract, in accordance with the respective Master Agreement.</span>
            <br />
            <span>Dreams Factory</span>
        </div>
    )
}