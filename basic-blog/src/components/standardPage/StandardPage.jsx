import classes from "./standardPage.module.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StandardPage = ({ children }) => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>{children}</div>
      <ToastContainer />
    </div>
  );
};

export default StandardPage;
