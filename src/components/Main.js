import React from 'react'
import PayType from './PayType'
import SubscriptionPeriod from './SubscriptionPeriod'
import TotalPayable from './TotalPayable'
import SubmitPayment from './SubmitPayment'
import PaymentSection from './PaymentSection'
import '../styles/Main.css'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      payType: {selected: false, checked: false},
      subsPeriod: {selected: false, checked: false, value: 0},
      totalPayable: {checked: false},
      display: 'none',
      disabled: true,
      activateAutoProlongation: true
    };
  }

  handleSelect(elem, value, period, display, disabled, activateAutoProlongation) {
    this.setState({
      [elem]: {
        selected: true,
        checked: this.state.payType.checked,
        value: +value,
        period: period
      },

      display: display,
      disabled: disabled,
      activateAutoProlongation: activateAutoProlongation
    });
  }

  handlePayTypeSelect = (activateAutoProlongation) => {
    this.handleSelect('payType', null, null, 'inline-block', true, activateAutoProlongation);
  };
  handleSubsPeriodSelect = (value, period) => {
    this.handleSelect('subsPeriod', value, period, null, false);
  };

  render() {
    return (
      <div className="Main">
        <p className="Main-slogan">Клуб выгодных покупок</p>

        <PaymentSection height='373px'>
          <PayType handleSelect={this.handlePayTypeSelect.bind(this)}/>
        </PaymentSection>

        <PaymentSection height='373px' selected={this.state.payType.selected}>
          <SubscriptionPeriod
            handleSelect={this.handleSubsPeriodSelect.bind(this)}
            activateAutoProlongation={this.state.activateAutoProlongation}/>
        </PaymentSection>

        <PaymentSection height='280px' selected={this.state.subsPeriod.selected}>
          <TotalPayable
            value={this.state.subsPeriod.value}
            period={this.state.subsPeriod.period}/>
        </PaymentSection>

        <SubmitPayment display={this.state.display} disabled={this.state.disabled}/>
      </div>
    );
  }
}

export default Main;