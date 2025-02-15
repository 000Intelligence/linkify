// captcha generator for sign up & sign in pages
const captchaContainer = document.getElementById("captcha-container");
const captchaInput = document.getElementById("captcha-input");
const captchaRefresh = document.getElementById("captcha-refresh");

function captchaGenerator() {
	let captcha = Math.floor(Math.random() * 90000) + 10000;
	return captcha;
}

captchaContainer.textContent = captchaGenerator();

captchaRefresh.addEventListener("click", () => {
	captchaContainer.classList.add("glitch");
	setTimeout(() => {
		captchaContainer.classList.remove("glitch");
	}, 300);
	captchaContainer.textContent = captchaGenerator();
	captchaInput.value = "";
});
