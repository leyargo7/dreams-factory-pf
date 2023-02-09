import React from "react";
import s from "./Acordeon.module.css";
import { useState } from "react";

export default function Acordeon() {
  const [selected, setSelected] = useState(null);
  const data = [
    {
      question: "Way to pay",
      answer:
        "3 installments throughout the site without interest! You can pay with debit card, credit or cash",
    },

    {
      question: "Delivery time",
      answer:
        "2 to 5 business days Free shipping with your purchase over $1000",
    },

    {
      question: "Change",
      answer:
        "You can make the change of your purchase online by contacting info@dreamsFactory.com",
    },

    {
      question:
        "I made a purchase and I did not receive the new order confirmation email, what do I do?",
      answer:
        "Make sure that the email you are checking matches the address with which you registered your account in Shop Online. Also check that the email is not in the SPAM or Junk Mail folder. If this is not the case, contact us by calling: 08008880088 or send an email to ventaonline@dreamsFactory.com",
    },

    {
      question: "How do I cancel my purchase?",
      answer:
        "To cancel your purchase, you must contact us by calling:08008880088. Don't forget to have your order number handy",
    },
  ];

  const toggle = (id) => {
    if (selected) {
      setSelected(null);
    }else{
      setSelected(id);
    }
  };

  return (
    <div className={s.wrapper}>
      <h1>FREQUENT QUESTIONS</h1>
      <div className={s.accordion}>
        {data.map((item, id) => {
          return (
            <div key={id} className={s.item}>
              <div className={s.title} onClick={() => toggle(id)}>
                <h2>{item.question}</h2>
                <span>+</span>
              </div>
              <div className={selected === id ? s.containerShow : s.container}>{item.answer}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
