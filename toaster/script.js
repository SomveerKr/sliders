const notifications = document.querySelector('.notifications'),
  buttons = document.querySelectorAll('.buttons .btn');

// Object containing details for different types of toasts
const toastDetails = {
  timer: 5000,
  success: {
    icon: 'fa-circle-check',
    title: 'Success',
    message: 'This is a success toast.',
  }
};

const removeToast = (toast) => {
  toast.classList.add('hide');
  if (toast.timeoutId) clearTimeout(toast.timeoutId); // Clearing the timeout for the toast
  setTimeout(() => toast.remove(), 500); // Removing the toast after 500ms
};

const createToast = (id) => {
  // Getting the icon and text for the toast based on the id passed
  const { icon, title, message } = toastDetails[id];
  const toast = document.createElement('li'); // Creating a new 'li' element for the toast
  toast.className = `toast ${id}`; // Setting the classes for the toast
  // Setting the inner HTML for the toast
  toast.innerHTML = `<div class="column">
                        <div class="toast-icon">
                        <i class="fa-solid ${icon}"></i>
                        </div>
                         
                         <div class="toast-details">

                         <div class="toast-title">
                         ${title}
                         </div>
                         <div class="toast-message">
                         ${message}
                         </div>
                         </div>
                      </div>

                      <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`;
  notifications.appendChild(toast); // Append the toast to the notification ul
  // Setting a timeout to remove the toast after the specified duration
  toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer);
};

// Adding a click event listener to each button to create a toast when clicked
buttons.forEach((btn) => {
  btn.addEventListener('click', () => createToast(btn.id));
});




// ----------------------------FOR GETTING INPUT VALUES------------

// Get the input elements by name
var titleInput = document.querySelector("input[name='title']");
var messageInput = document.querySelector("input[name='message']");

// Get the select elements by name
var colorSelect = document.querySelector("select[name='colors']");
var iconSelect = document.querySelector("select[name='icons']");

// Define a function to handle the input change event
function handleInputChange(event) {
  // Get the name and value of the changed input
  var name = event.target.name;
  var value = event.target.value;

  // Log the name and value to the console
  console.log(name + ": " + value);
}

// Define a function to handle the select change event
function handleSelectChange(event) {
  // Get the name and value of the selected option
  var name = event.target.name;
  var value = event.target.value;

  // Log the name and value to the console
  console.log(name + ": " + value);
}

// Add event listeners to the input and select elements
titleInput.addEventListener("input", handleInputChange);
messageInput.addEventListener("input", handleInputChange);
colorSelect.addEventListener("change", handleSelectChange);
iconSelect.addEventListener("change", handleSelectChange);
