const url = "https://hookb.in/G9jbwj0gQpSWGGeQY3R0";
const formEl = document.querySelector("form");
formEl.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(formEl);
    const formDataSerialized = Object.fromEntries(formData);
    const jsonObject = {
        ...formDataSerialized
        };
        try {
            const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(jsonObject),
            headers: {
                "Content-Type": "application/json",
            },
          });
          const json = await response.json();
          console.log(json);
        } catch (e) {
        console.error(e);
        alert("Ocorreu um erro, tente eniar o formulário novamente!");
    }
});