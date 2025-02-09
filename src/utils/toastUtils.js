// TOAST IZITOAST
import iziToast from "izitoast";

export const showSuccess = (title, ) =>{
    iziToast.success({
        title: title,
        message: "Registro exitoso!",
        timeout: 3000,
        position: "topRight",
      });
}

