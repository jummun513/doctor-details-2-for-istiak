const inputName = document.getElementById('inputName');
const inputAge = document.getElementById('inputAge');
const inputEmail = document.getElementById('inputEmail3');
const inputNumber = document.getElementById('inputPhoneNumber');
const inputAddress = document.getElementById('inputAddress');
const check1 = document.getElementById('gridCheck4');
const check20 = document.getElementById('gridCheck16');



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