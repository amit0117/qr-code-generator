const wrapper=document.querySelector(".wrapper" ),
qrInput=wrapper.querySelector(".form input"),
genereratorBtn=wrapper.querySelector(".form button"),
qrImg=wrapper.querySelector(".qr-code img");
genereratorBtn.addEventListener("click",()=>{
    let qrvalue=qrInput.value;
    if(!qrvalue)return;
    genereratorBtn.innerText="Generating QR Code... ";
    qrImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrvalue} `
    console.log(qrvalue);
    qrImg.addEventListener("load",()=>{

        wrapper.classList.add("active");
        genereratorBtn.innerText="Generated QR Code "
    })
})
qrInput.addEventListener("keyup",()=>{
    if(qrInput.value){
        wrapper.classList.remove("active");
        genereratorBtn.innerText="Create QR Code ";
        
    }
})