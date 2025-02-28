import { MdMessage } from "react-icons/md";  // Importing an icon from react-icons
import styles from "./Button.module.css";    // Importing CSS module for styling

const Button = ({ isOutline, icon, text, ...rest }) => {
    return (
        <button 
            {...rest}  // Passing additional props like onClick, type, etc.
            className={isOutline ? styles.outline_btn : styles.primary_btn} // Conditional styling
        >
            {icon}  {/* Displays the icon if provided */}
            {text}  {/* Displays the button text */}
        </button>
    );
};

export default Button;
