import React from 'react'
import '../styles/SubscriptionPeriod.css'

class SubscriptionPeriod extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      disabled: !props.activateAutoProlongation,
      checked: false
    };
    this.handleSelect = props.handleSelect;
    this.handleClick = this.handleClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleClick(e) {
    this.handleSelect(e.target.value, e.target.id);
  }

  onChange() {
    this.state.disabled ? this.setState({checked: false}) : this.setState({checked: !this.state.checked})
  }

  render() {
    return (
      <section className="SubsPeriod">
        <h2 className="SubsPeriod-section-name">На какой срок</h2>
        <fieldset className="SubsPeriod-options">
          <div className="SubsPeriod-option-wrapper">
            <input onClick={this.handleClick} name="period" id="2 года" value="2880" type="radio" className="SubsPeriod-input-radio"/>
            <label className="SubsPeriod-option SubsPeriod-2y" htmlFor="2 года">
              <div className="SubsPeriod-option__period">2 года</div>
              <div className="SubsPeriod-option__cost-total">2 880 руб.</div>
              <div className="SubsPeriod-option__cost-per-month">
                120 <span className="SubsPeriod-option__currency-month">руб. / месяц</span>
              </div>
            </label>
          </div>
          <div className="SubsPeriod-option-wrapper">
            <input onClick={this.handleClick} name="period" id="1 год" value="1500" type="radio" className="SubsPeriod-input-radio"/>
            <label className="SubsPeriod-option SubsPeriod-1y" htmlFor="1 год">
              <div className="SubsPeriod-option__period">1 год</div>
              <div className="SubsPeriod-option__cost-total">1 500 руб.</div>
              <div className="SubsPeriod-option__cost-per-month">
                125 <span className="SubsPeriod-option__currency-month">руб. / месяц</span></div>
            </label>
          </div>
          <div className="SubsPeriod-option-wrapper">
            <input onClick={this.handleClick} name="period" id="6 месяцев" value="780" type="radio" className="SubsPeriod-input-radio"/>
            <label className="SubsPeriod-option SubsPeriod-6m" htmlFor="6 месяцев">
              <div className="SubsPeriod-option__period">6 месяцев</div>
              <div className="SubsPeriod-option__cost-total">780 руб.</div>
              <div className="SubsPeriod-option__cost-per-month">
                130 <span className="SubsPeriod-option__currency-month">руб. / месяц</span></div>
            </label>
          </div>
        </fieldset>
        <p className="SubsPeriod-auto-subs-desc">В конце срока подписка продлится автоматически. Вы можете выключить
          автопродление в любой момент в настройках или отменить его.</p>
        <div>
          <input checked={this.state.checked} onChange={this.onChange} disabled={this.state.disabled} type="checkbox" id="auto-subs" className="SubsPeriod-input-checkbox"/>
          <label className="SubsPeriod-auto-subscription" htmlFor="auto-subs">
            Продлевать подписку автоматически
          </label>
          <p className="SubsPeriod-auto-subscription-details">
            Оплачивая подписку, я принимаю условия оплаты, указанные в оферте и условия автоматического
            продления подписки на месяц вперёд
          </p>
        </div>
      </section>
    );
  }
}

export default SubscriptionPeriod;