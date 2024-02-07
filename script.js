const getColor = () => {
    const randomCode = Math.floor(Math.random() * 16777215);
    const hexCode = "#" + randomCode.toString(16);

    document.body.style.backgroundColor = hexCode ;
    document.getElementById("color-code").innerText = hexCode;


}

document.getElementById("btn").addEventListener("click",getColor);

getColor();