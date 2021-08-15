let btn = document.getElementById("btn");
let input = document.querySelector(".input");
let output = document.getElementById("output");
let toast = document.getElementById("toast");

let qrcode = new QRCode("output", {
	width: 200,
	height: 200,
	colorDark: "#000000",
	colorLight: "#ffffff",
	correctLevel: QRCode.CorrectLevel.H,
});

btn.addEventListener("click", () => {
	let data = input.value;
	qrcode.makeCode(data);
	toastDiv();
});

function toastDiv() {
	toast.className = "show";
	setTimeout(function () {
		toast.className = toast.className.replace("show", "");
	}, 2000);
}
