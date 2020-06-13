import React from 'react';
import Modals from './Modals'
const Product = (props) => {
  return (
      <div className="col-sm-4">
          <div className="card" style={{width: "18rem"}}>
            <img src={props.product.image.downloadUrl} className="card-img-top" alt="shirt" style={{width:"200px", height:"200px"}}/>
            <div className="card-body">
              <h5 className="card-title">{props.product.name}</h5>
              <h6 className="card-title">Rp {props.product.harga}</h6>
              <div className="btn-group">
                <button className="btn btn-primary" type="button" onClick={() => props.addItem(props.product)}>Buy now</button>
                <Modals show={props.show} handleClose={props.handleClose} className="modals">
                <div className="modal-body">
                    <h1>{props.product.deskripsi}</h1>
                </div>
                </Modals>
                {/* <button className="btn btn-primary" type="button" onClick={() => props.showModal(props.product.deskripsi)}>Desc</button> */}
              </div>
            </div>
          </div>
      </div>
  );
}
export default Product;
