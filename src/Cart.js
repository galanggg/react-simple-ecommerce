import React from 'react'

const Cart = ({handleClose, show, items}) => {
  return (
    <div className={show ? "modal display-block" : "modal display-none"}>
      <section className="modal-main">
        {items.map(item =>
          <div className="card" style={{width: "12rem"}}>
            <img src={item.image.downloadUrl} className="card-img-top" alt="outfit"></img>
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <h6 className="card-title">Rp {item.harga}</h6>
              </div>
          </div>
        )}
        Total items :   {items.length}
        <button className="btn btn-warning btn-sm" id="button-cart" onClick={handleClose}>Close</button>
      </section>
    </div>
  )
}

export default Cart