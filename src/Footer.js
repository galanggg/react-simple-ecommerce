import React from 'react';

const Footer = () => {
  return (
      <footer id="footer" className="page-footer font-small bg-blue pt-4">
        <div className="container text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <h5 className="text-uppercase font-weight-bold">Contact Us</h5>
              <p><span role="img" aria-label="desc emoticon">☎️</span> 081-123-456</p>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center py-3">© 2019 Copyright:
          <span> Simple Shooping Cart</span>
        </div>
      </footer>
  );
};
export default Footer;