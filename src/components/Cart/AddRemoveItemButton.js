import classes from "./addRemoveItemButton.module.css";

const AddRemoveItemButton = ({ title, onClick }) => {
  return <button className={classes.add_remove_button} onClick={onClick}>{title}</button>;
};

export default AddRemoveItemButton;
