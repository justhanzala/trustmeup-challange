import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import siteSlice from "../redux/site/slice";

const Toast = () => {
  const { message } = useSelector((state) => state.site);
  const dispatch = useDispatch();
  const notify = () => toast(message);

  React.useEffect(() => {
    if (message) {
      notify();
      dispatch(siteSlice.actions.setMessageData(""));
    }
  }, [message]);

  return (
    <div>
      <ToastContainer position="bottom-left" />
    </div>
  );
};

export default Toast;
