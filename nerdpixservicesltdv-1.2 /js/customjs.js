window.onload = function () {
  document.querySelectorAll(".counter").forEach(function (counter) {
    let endValue = parseInt(counter.getAttribute("data-end"));
    let startValue = 0;
    let duration = 5000; // 5 seconds
    let range = endValue - startValue;
    let stepTime = Math.abs(Math.floor(duration / range));

    let current = startValue;
    let timer = setInterval(function () {
      current += 1;
      counter.textContent = current;
      if (current == endValue) {
        clearInterval(timer);
      }
    }, stepTime);
  });
};

(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      // Fetch all forms with the class 'needs-validation'
      var forms = document.getElementsByClassName("needs-validation");
      Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();
