// Function to handle button clicks
function handleButtonClick(){
    document.getElementById('output').textContent='Button was click!';
}
// Function to handle input changes
function handleInputChange(event) {
    document.getElementById('output').textContent = `You typed: ${event.target.value}`;
}

// Function to handle form submissions
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
    const name = event.target.name.value;
    document.getElementById('output').textContent = `Form submitted with name: ${name}`;
    
}

// Add event listeners when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('clickButton').addEventListener('click', handleButtonClick);
    document.getElementById('textInput').addEventListener('input', handleInputChange);
    document.getElementById('myForm').addEventListener('submit', handleFormSubmit);
});