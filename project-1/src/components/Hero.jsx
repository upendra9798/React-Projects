const HeroSection = () => {
    return(
      <main className="hero container">
        <div className="hero-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>
            YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH YOUR SHOE NEEDS.
            YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH YOUR SHOE NEEDS.
            </p>

     <div className="hero-btn">
        <button>Shop Now</button>
        <button className="second-btn">Category</button>
     </div>
     
        <div className="shopping">
            <p>Also Available On</p>
            
            <div className="brand-icons">
              <img src="/images/amazon.png" alt="amazon-logo" />
              <img src="/images/flipkart.png" alt="flipkart-logo" />
            </div>
        </div>
        </div>


        <div className="hero-img">
        <img src="/images/shoe_image.png" alt="hero-image" />
        </div>
      </main>
    )
}

export default HeroSection;