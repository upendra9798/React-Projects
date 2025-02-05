const Navigation = () => {
    return(
        <nav className="container">
        {/* in js classname is used in place of class in html */}
        <div className="logo">
          <img src="/images/brand_logo.png" alt="logo" /> 
          {/* alt-attribute is used to show the text when image is not loaded */}
          </div>   
  
          <ul>
            <li href='#'>Menu</li>
            <li href='#'>Location</li>
            <li href='#'>About</li>
            <li href='#'>Contact</li>
          </ul>
  
          <button>Login</button>
       </nav>
    );
};

export default Navigation;