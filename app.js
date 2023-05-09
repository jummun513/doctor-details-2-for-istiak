function myFunction(x) {
    const pagination = document.getElementById('pagination');
    if (x.matches) {
        pagination.classList.add('pagination-sm');
        pagination.classList.remove('pagination-lg');
    } else {
        pagination.classList.remove('pagination-sm');
        pagination.classList.add('pagination-lg'); Color = "pink";
    }
}

var x = window.matchMedia("(max-width: 560px)");
myFunction(x);
x.addListener(myFunction);

const inputName = document.getElementById('inputName');
const inputAge = document.getElementById('inputAge');
const inputEmail = document.getElementById('inputEmail3');
const inputNumber = document.getElementById('inputPhoneNumber');
const inputAddress = document.getElementById('inputAddress');
const check1 = document.getElementById('gridCheck1');
const check20 = document.getElementById('gridCheck20');



const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', function (event) {
    if ((inputAge.value != null) && (inputEmail.value != '') && (inputNumber.value != null) && (inputAddress.value != '') && (inputName.value != '') && (check1.checked == true)) {
        document.getElementById('exampleModalToggle2').classList.remove('d-none');
        document.getElementById('doctor-2').style.display = 'none';
    }
    else if ((inputAge.value != null) && (inputEmail.value != '') && (inputNumber.value != null) && (inputAddress.value != '') && (inputName.value != '') && (check20.checked == true)) {
        document.getElementById('exampleModalToggle2').classList.remove('d-none');
        document.getElementById('doctor-1').style.display = 'none';
    }
    else {
        document.getElementById('exampleModalToggle2').classList.add('d-none');
        alert('সকল তথ্য দিয়ে ফর্ম পূরন করুন।');
        location.reload();
    }
})