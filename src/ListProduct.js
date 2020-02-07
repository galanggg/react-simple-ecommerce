import React from 'react'
import {Query} from 'react-apollo'
import PRODUCTS_QUERY from './components/index'
import Navbar from './Navbar'
import Product from './Product'
import Cart from './Cart'

class ListProduct extends React.Component {
  state = {
    cartItems:[],
    show: false,
    selectedData: {}
  }

  addItem = item => {
    this.setState({
      cartItems: this.state.cartItems.concat([item])
    })
  }

  showModal = () => {
    this.setState({
      show: true
    })
  }

  hideModal = () => {
    this.setState({
      show: false
    });
  };

  render() {
    return (
      <Query query={PRODUCTS_QUERY}>
        {({loading, error, data}) => {
          if (loading) return <div>Fetching Api Sabar...</div>
          if(error) return <div>Error Fetching Api <span role="img" aria-label="desc emoticon">😞</span></div>

          const items = data.itemsList.items
          const itemssent = this.state.cartItems
          return (
            <div>
            <Navbar cart={itemssent} show={this.showModal} />
            <Cart show={this.state.show} items={itemssent} handleClose={this.hideModal}></Cart>
            <div className="container mt-4">
              <div className="row">
                 {items.map(item => <Product key={item.id} product={item} addItem={this.addItem}  />)}
              </div>
            </div>
          </div>
        )
        }}
      </Query>
    )
  }
}

export default ListProduct