import React from 'react'
import '../styles/PaymentSection.css'

function PaymentSection(props) {
  let display = props.selected === false ? 'none' : '';
  return (
    <section
      className="PaymentSection"
      style={{display: display, height: props.height}}>
      {props.children}
    </section>
  );
}

PaymentSection.propTypes = {
  height: React.PropTypes.string.isRequired
};

export default PaymentSection;