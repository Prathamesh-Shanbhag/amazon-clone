import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='home__image'
          src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
          alt=''
        />

        <div className='home__row'>
          <Product
            title='The Lean Startup'
            price={29.99}
            image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQHLJh5zuZ7UkeojV9C7zTPxCR3GTG1HcyrTaA3GmQWKc0aHw4S0Nar1KFBlGGW4VBn9tUc4Wr6&usqp=CAc'
            rating={5}
          />
          <Product
            title='Kenwood kMix Stand Mixer, 5 Litre, 1000 W, Color: Red, 220V'
            price={239.0}
            image='https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._SL1500_.jpg'
            rating={4}
          />
        </div>
        <div className='home__row'>
          <Product
            title='Samsung Galaxy Watch Active (Green), SM-R500NZGAINU'
            price={98.99}
            image='https://images-na.ssl-images-amazon.com/images/I/71G0vBexcwL._SL1500_.jpg'
            rating={4}
          />

          <Product
            title='Introducing Echo Show 5 - Smart display with Alexa '
            price={98.99}
            image='https://images-na.ssl-images-amazon.com/images/I/61vBJYawGvL._SL1000_.jpg'
            rating={5}
          />
          <Product
            title='Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Grey (Latest Model)'
            price={99.99}
            image='https://images-na.ssl-images-amazon.com/images/I/71TJA%2BsJv2L._SL1500_.jpg'
            rating={3}
          />
        </div>
        <div className='home__row'>
          <Product
            title='Samsung 49-Inch CRG9 Curved Gaming Monitor'
            price={1199.99}
            image='https://images-na.ssl-images-amazon.com/images/I/71916r38cNL._AC_SL1500_.jpg'
            rating={3}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
