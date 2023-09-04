import React, { useEffect } from "react";
import Loader from "rsuite/Loader";
import toast from 'react-hot-toast';

const Load = ({ onClose }) => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomValue = Math.random();

      if (randomValue < 0.5) {
        toast.success("¡Transacción realizada!");
      } else {
        toast.error("Error con la transacción, intente de nuevo mas tarde...");
      }
      onClose();
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <Loader size="lg" content="Cargando información..." />;
};

export default Load;
