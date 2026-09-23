const contactDialog = document.querySelector("#contact-dialog");
const contactForm = document.querySelector(".contact-form");
const statusMessage = document.querySelector(".form-status");

document.querySelectorAll("[data-open-contact]").forEach((button) => {
  button.addEventListener("click", () => {
    statusMessage.textContent = "";
    contactDialog.showModal();
  });
});

contactDialog.addEventListener("click", (event) => {
  if (event.target === contactDialog) {
    contactDialog.close();
  }
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const recipient = contactForm.dataset.recipient.trim();
  if (!recipient) {
    statusMessage.textContent = "Gunnars e-postadresse må legges inn før skjemaet kan brukes.";
    return;
  }

  const formData = new FormData(contactForm);
  const name = formData.get("name").trim();
  const email = formData.get("email").trim();
  const message = formData.get("message").trim();
  const subject = `Forespørsel fra ${name}`;
  const body = `Hei Gunnar,\n\n${message}\n\nVennlig hilsen\n${name}\n${email}`;

  window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  contactDialog.close();
});
