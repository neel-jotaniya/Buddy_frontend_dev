import { useEffect, useState } from "react";

const Preloader = ({ message, isLoading }) => {
  // let [active, setActive] = useState(true);
  // useEffect(() => {
  //   setTimeout(function () {
  //     setActive(false);
  //   }, 500);
  // }, []);

  useEffect(() => {
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <div className="preloader">
          <img src="assets/images/icon/Fountain.gif" alt="" />
        </div>

      ) : (
        <div></div>
      )}
    </>
  );
};

export default Preloader;
