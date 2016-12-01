import React from 'react'
import '../styles/SubmitPayment.css'

function SubmitPayment(props) {
  return (
    <section className="SubmitPayment">
      <a href="#"
         className="SubmitPayment-submit"
         style={{display: props.display, disabled: props.disabled}}>Оплатить</a>
      <div>
        <p className="SubmitPayment-footer SubmitPayment-footer__no-fee">
          Нет комиссий при оплате банковскими картами Яндекс.Деньгами и Qiwi</p>
        <p className="SubmitPayment-footer SubmitPayment-footer__protection">
          Все платежи надёжно защищены и соответствуют международным стандартам</p>
      </div>
    </section>
  );
}

export default SubmitPayment;