import React from 'react'
import '../styles/TotalPayable.css'

class TotalPayable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {discount: false, discountRate: 150};
    this.onClick = this.onClick.bind(this);
  }

  onClick = () => this.setState({discount: !this.state.discount});

  render() {
    return (
      <section className="TotalPayable">
        <h2 className="TotalPayable-section-name">Итого к оплате (за {this.props.period})</h2>
        <p className="TotalPayable-final-total">
          {this.state.discount ? this.props.value.toLocaleString() + ` + ${this.state.discountRate}` : ''}
          <span className="TotalPayable-resulted-amount">
            {this.state.discount
              ? ` = ${(this.props.value + this.state.discountRate).toLocaleString()}`
              : this.props.value.toLocaleString()}
            <span className="TotalPayable-currency"> руб.</span>
        </span>
        </p>
        <p className="TotalPayable-monthly-subs">Далее 120 руб. в месяц</p>
        <div>
          <input onClick={this.onClick} type="checkbox" id="discount" className="TotalPayable-input-checkbox"/>
          <label className="TotalPayable-add-discount" htmlFor="discount">
            Добавить подписку на скидку 5% на весь ассортимент товаров
          </label>
          <p className="TotalPayable-subscription-details">
            Срок действия подписки 6 месяцев. Стоимость подписки 150 руб.
          </p>
        </div>
      </section>
    );
  }
}

export default TotalPayable;