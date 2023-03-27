const clearName = () => {
    if (document.getElementById("nameField").value == "First and Last Name") {
        document.getElementById("nameField").value = ""
    }
}

const resetName = () => {
    if (document.getElementById("nameField").value == "") {
        document.getElementById("nameField").value = "First and Last Name"
    }
}

const clearPhone = () => {
    if (document.getElementById("phoneField").value == "example: 212-123-1234") {
        document.getElementById("phoneField").value = ""
    }
}

const resetPhone = () => {
    if (document.getElementById("phoneField").value == "") {
        document.getElementById("phoneField").value = "example: 212-123-1234"
    }
}		

const clearEmail = () => {
    if (document.getElementById("emailField").value == "example: jwick@gmail.com") {
        document.getElementById("emailField").value = ""
    }
}

const resetEmail = () => {
    if (document.getElementById("emailField").value == "") {
        document.getElementById("emailField").value = "example: jwick@gmail.com"
    }
}