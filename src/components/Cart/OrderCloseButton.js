import classes from "./orderCloseButton.module.css";

const OrderCloseButton = ({ onClick, title, class_style, style }) => {
  return (
    <button
      onClick={onClick}
      style={style}
      className={`${classes[class_style]} ${classes.order_close_button}`}
    >
      {title}
    </button>
  );
};

export default OrderCloseButton;
