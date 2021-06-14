import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getItem } from '../redux-saga/actions/menuAction'

function Menu ({ ItemData, fetchItemAction }) {
  useEffect(() => {
    fetchItemAction()
  }, [fetchItemAction])
 
  return(
    <div className="App">
      <center><h1>Menu Page</h1></center>
      {ItemData.item_error ? (
        <p>{ItemData.item_error}</p>
      ):(
        <div>
          {ItemData && 
          ItemData.item.map(item => <p>{item.itemname} ====
          Price:{item.price}</p>)}
        </div>
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    ItemData: state.menu,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchItemAction: () => dispatch(getItem())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu)


