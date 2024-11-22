document.addEventListener("DOMContentLoaded", function () {
  // Обработка отправки формы
  document
    .querySelectorAll(".input_form").forEach(form => form.addEventListener("submit", function (event) {
      event.preventDefault();
     

      const formData = new FormData(this);

      fetch("assets/mailer.php", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.text())
        .then((data) => {
          document.querySelector(".input_form").innerHTML =
            '<p class="popap-form__subtitle">Спасибо! Ваша заявка отправлена</p>';
        })
        .catch((error) => console.error("Error:", error))
        .finally(() => {
          this.reset();
        });
    }));

  // Инициализация Fancybox
  document.querySelectorAll(".popup-modal").forEach((popup) => {
    Fancybox.bind(popup, {
      type: "inline",
      mainClass: popup.getAttribute("data-effect"),
      on: {
        reveal: (fancybox, slide) => {
          document.body.classList.add("modal-open");
        },
        closing: (fancybox, slide) => {
          document.body.classList.remove("modal-open");
        },
      },
    });
  });

  // Закрытие модального окна
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("modal-close")) {
      e.preventDefault();
      Fancybox.close();
    }
  });
});
