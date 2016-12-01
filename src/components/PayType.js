import React from 'react'
import '../styles/PayType.css'

class PayType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      giftCode: false,
      subsGift: false,
      checked: false,
      activateAutoProlongation: true
    };
    this.handleSelect = props.handleSelect;
    this.handleClick = this.handleClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleClick() {
    this.handleSelect(this.state.activateAutoProlongation);
  }

  onChange(e) {
    e.target.value === 'gift-code'
      ? this.setState({subsGift: true, giftCode: false, checked: false, activateAutoProlongation: false})
      : e.target.value === 'gift'
        ? this.setState({
          subsGift: false, giftCode: !this.state.checked, checked: !this.state.checked,
          activateAutoProlongation: !this.state.checked
        })
        : this.setState({subsGift: false, giftCode: this.state.checked, activateAutoProlongation: true});
  }

  render() {
    return (
      <section className="PayType">
        <h2 className="PayType-section-name">Выберите способ оплаты</h2>
        <fieldset className="PayType-types">
          <div className="PayType-option-wrapper">
            <input onClick={this.handleClick} onChange={this.onChange} name="paytype" id="credit-card" value="credit-card" type="radio" className="PayType-input-radio"/>
            <label className='PayType-type PayType-cards' htmlFor="credit-card"/>
          </div>
          <div className="PayType-option-wrapper">
            <input onClick={this.handleClick} onChange={this.onChange} name="paytype" id="yandex-money" value="yandex-money" type="radio" className="PayType-input-radio"/>
            <label className='PayType-type PayType-yandex' htmlFor="yandex-money"/>
          </div>
          <div className="PayType-option-wrapper">
            <input onClick={this.handleClick} onChange={this.onChange} name="paytype" id="paypal" value="paypal" type="radio" className="PayType-input-radio"/>
            <label className='PayType-type PayType-paypal' htmlFor="paypal"/>
          </div>
          <div className="PayType-option-wrapper">
            <input onClick={this.handleClick} onChange={this.onChange} name="paytype" id="webmoney" value="webmoney" type="radio" className="PayType-input-radio"/>
            <label className='PayType-type PayType-webmoney' htmlFor="webmoney"/>
          </div>
          <div className="PayType-option-wrapper">
            <input onClick={this.handleClick} onChange={this.onChange} name="paytype" id="sms" value="sms" type="radio" className="PayType-input-radio"/>
            <label className='PayType-type PayType-sms' htmlFor="sms">
              SMS<div className="PayType-sms__russia-only">Только для России</div>
            </label>
          </div>
          <div className="PayType-option-wrapper">
            <input onClick={this.handleClick} onChange={this.onChange} name="paytype" id="qiwi" value="qiwi" type="radio" className="PayType-input-radio"/>
            <label className='PayType-type PayType-qiwi' htmlFor="qiwi"/>
          </div>
          <div className="PayType-option-wrapper">
            <input disabled={this.state.giftCode}
                   onClick={this.handleClick}
                   onChange={this.onChange}
                   name="paytype" id="gift-code" value="gift-code" type="radio"
                   className="PayType-input-radio PayType-input-radio_disabled"/>
            <label className='PayType-type PayType-gift-code' htmlFor="gift-code">
              Подарочный<br/>код
            </label>
          </div>
        </fieldset>
        <div className="PayType-disabled-color">
          <input checked={this.state.checked} disabled={this.state.subsGift} onChange={this.onChange} type="checkbox" id="gift" value="gift" className="PayType-input-checkbox"/>
          <label className="PayType-gift-subscription" htmlFor="gift">Покупаю подписку в подарок</label>
        </div>
      </section>
    );
  }
}

export default PayType;