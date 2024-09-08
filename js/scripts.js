const button = document.querySelector("#button-qr");
const linkInput = document.querySelector("#link");
const getElementDiv = document.querySelector(".qr-code-div");
const img = document.querySelector("#qrimg");


button.addEventListener("click", () => {
    createQrCode(link);
})

linkInput.addEventListener("keydown", (e) => {
    if(e.code === "Enter"){
        createQrCode(link);
    }
})

linkInput.addEventListener("keyup", (e) => {
    if(!linkInput.value){
        getElementDiv.classList.remove("active");
    }
})



function createQrCode(){

    const link = linkInput.value;
    
    if(!link) return;



    

    button.innerText = "Gerando QR Code";


    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${link}`;
    
    img.addEventListener("load", () => {
        getElementDiv.classList.add("active");
    })
}
