import React from 'react'
import '../styles/Footer.css'

function Footer(props) {
  return (
    <footer className="Footer">
      <span>
        &#169; 2010-2016 Домашний Магазин
        <a className="Footer-service-desk" href={props.href}>Служба поддержки</a>
      </span>
    </footer>
  );
}

Footer.defaultProps = {
  href: 'https://moikrug.ru/etnolover'
};

Footer.propTypes = {
  href: React.PropTypes.string
};

export default Footer;