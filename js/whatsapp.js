const form = document.getElementById("contact");
const whatsappBtn = document.getElementById("whatsapp-btn");

form.addEventListener("input", () => {
  const userName = document.getElementById("user_name").value.trim();
  const userNumber = document.getElementById("mobile_number").value.trim();

  if (userName && userNumber) {
    const message = `Hello ${userName}, thank you for reaching us. Will get back to you soon.`;
    const encodedMessage = encodeURIComponent(message);
    whatsappBtn.href = `https://wa.me/${userNumber}?text=${encodedMessage}`;
  }
});