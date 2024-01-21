const wrapper = document.querySelector(".wrapper"),
  inputFiled = wrapper.querySelector("input"),
  btngenerate = wrapper.querySelector(".btn"),
  imgEl = wrapper.querySelector("img");

btngenerate.addEventListener("click", () => {
  let inputValue = inputFiled.value;
  if (!inputValue) return;
  btngenerate.innerText = "Wait For Generate QR Code...";
  setTimeout(() => {
    imgEl.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
    imgEl.addEventListener("load", () => {
      btngenerate.innerText = "Generate QR Code";
      wrapper.classList.add("active");
    });
  }, 1000);
});

inputFiled.addEventListener("keyup", () => {
  if (!inputFiled.value) {
    wrapper.classList.remove("active");
  }
});
