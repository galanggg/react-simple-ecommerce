import React from 'react'
import {Query} from 'react-apollo'
import PRODUCTS_QUERY from './components/index'
// import Navbar from './Navbar'
import Product from './Product'

class ListProduct extends React.Component {
  state = {
    cartItems:[]
  }

  addItem = item => {
    this.setState({
      cartItems: this.state.cartItems.concat(item)
    })
  }

  render() {
    return (
      <Query query={PRODUCTS_QUERY}>
        {({loading, error, data}) => {
          if (loading) return <div>Fetching Api Sabar...</div>
          if(error) return <div>Error Fetching Api <span role="img" aria-label="desc emoticon">😞</span></div>

          const items = data.itemsList.items
          return (
            <div>
            <div className="container mt-4">
              <div className="row">
                 {items.map(item => <Product key={item.id} product={item} addItem={this.addItem} />)}
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