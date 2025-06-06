// JavaScript code
function changeProfilePicture() {
    // Code to implement the picture change functionality
    // Here's an example that updates the profile picture with a user-selected image
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.onchange = function () {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('profilePicture').src = e.target.result;
        };
        reader.readAsDataURL(fileInput.files[0]);
    };
    fileInput.click();
}

function saveProfile(event) {
    event.preventDefault(); // Prevent form submission
    // Code to save the profile data
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;

    // Example code to display the profile data
    console.log('Name:', name);
    console.log('Phone Number:', phone);
    console.log('Email:', email);
    console.log('Address:', address);
}

const profileForm = document.getElementById('profileForm');
profileForm.addEventListener('submit', saveProfile);