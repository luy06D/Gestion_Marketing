// TOAST IZITOAST
import iziToast from "izitoast";

export const showSuccess = (title) =>{
    iziToast.success({
        title: title,
        message: "Operación exitosa!!",
        timeout: 3000,
        position: "topRight",
      });
}


export const showError = (title) => {
    iziToast.error({
      title: title ,
      message: 'Error al realizar la operación',
      timeout: 3000,
      position: 'topRight',
      backgroundColor: '#F54180',
      titleColor: '#ffffff',
      messageColor: '#ffffff'
    });
}


export const showWarning = (title) => {
    iziToast.warning({
      title: title,
      message: 'Complete todos los campos',
      position: 'topRight',
      backgroundColor: '#F7B750',
      timeout: 2000,
    });
}

