import styles from "./Navigation.module.css"

const Navigation = () => {
    return(
        <nav className={`${styles.navigation} container`}>
            <div className="logo">
          <img src="/images/logo.png" alt="logo" />
            </div>

            <ul>
                <ul>Home</ul>
                <ul>About</ul>
                <ul>Contact</ul>
            </ul>
        </nav>
    )
};

export default Navigation