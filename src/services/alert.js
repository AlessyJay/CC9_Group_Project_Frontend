import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "bottom",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: false,
});

export { Toast };
