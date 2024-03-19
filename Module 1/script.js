function validateSyntax() {
  let input = document.getElementById("petInput").value;
  // Validation logic goes here
  let result = ""; // Placeholder for validation result

  // TODO: Write your validation logic here
  // Check if input starts with 'pet_' and followed by alphanumeric characters
  if (/^pet_\d+[a-zA-Z]+$/.test(input)) {
    result = "Valid Syntax 🟢"; //If the input matches the specified pattern, assign "Valid Syntax 🟢" to the result variable.
  } else {
    result = "Invalid Syntax 🔴"; // If the input does not match the specified pattern, assign "Invalid Syntax 🔴" to the result variable.
  }

  document.getElementById("result").innerText = result;
}
