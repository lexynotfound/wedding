document
    .querySelector("form")
    .addEventListener("submit", handleSubmit);

    handleSubmit = (e) => {
    e.preventDefault();
    let myForm = document.getElementById("form-inline");
    let formData = new FormData(myForm);
    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
    })
        .then(() => console.log("Form successfully submitted"))
        .catch((error) => alert(error));
};