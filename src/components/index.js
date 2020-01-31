import gql from 'graphql-tag'

const PRODUCTS_QUERY = gql `
  query {
    itemsList {
      items {
        id
        name
        harga
        deskripsi
        image {
          downloadUrl
        }
      }
    }
  }
`
export default PRODUCTS_QUERY;
