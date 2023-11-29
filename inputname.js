const button = document.getElementById('button');
const username = document.getElementById('username');
const alamatInput = document.getElementById('alamatInput');
const name = document.getElementById('name');
const alamatElement = document.getElementById('alamat');

function showInfo() {
  const inputName = username.value.trim();
  const inputAlamat = alamatInput.value.trim();

  if (inputName !== "" && inputAlamat !== "") {
    name.innerText = `${inputName}`;
    alamatElement.innerText = ` dari ${inputAlamat}`;
  } else {
    Swal.fire({
      title: 'Anda tidak mengisi nama dan alamat anda',
      icon: 'error'
    }).then(() => {
      username.focus();
    });
  }
}

button.addEventListener('click', showInfo);