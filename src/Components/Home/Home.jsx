import React from 'react'

function Home(props) {
  return (
    <div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/reno6pro-5g-oversea/listpage/Phone-List-Page-product-list-Aurora-427-x-600.png.thumb.webp" />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price: $1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={() => {
              props.addToCartHandler({ pice: 1000, name: 'i phone 11' })
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
