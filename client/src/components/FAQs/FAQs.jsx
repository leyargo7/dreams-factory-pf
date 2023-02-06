import React from "react";
import s from "./FAQs.module.css";

export default function Faqs() {
    return (
        <div className={s.shell}>

            <div className={s.header}>
                <h2>FREQUENT QUESTIONS</h2>
                <div className="accordion"  id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                               <strong>Way to pay</strong> 
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>3 installments throughout the site without interest!</p>
                                <p>You can pay with debit card, credit or cash</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                <strong>Delivery time</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>2 to 5 business days</p>
                                <p>Free shipping with your purchase over $1000</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                <strong>Change</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>You can make the change of your purchase online by contacting info@dreamsFactory.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                               <strong> I made a purchase and I did not receive the new order confirmation email, what do I do?</strong>
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Make sure that the email you are checking matches the address with which you registered your account in Shop Online. Also check that the email is not in the "SPAM" or "Junk Mail" folder. If this is not the case, contact us by calling: 08008880088 or send an email to ventaonline@dreamsFactory.com
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFive">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                <strong>How do I cancel my purchase?</strong>
                            </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>To cancel your purchase, you must contact us by calling:08008880088</p>
                                <p>Don't forget to have your order number handy</p>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}