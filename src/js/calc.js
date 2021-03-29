window.addEventListener("load", function () {
  if (document.querySelector(".calc")) {
    var loanAmount = 0;
    var loanTenure = 0;
    var interest = 0;
    var nIntP = 0;
    var tPay = 0;
    var tInt = 0;
    var emiCalc = 0;

    Number.prototype.format = function (n, x) {
      var re = "\\d(?=(\\d{" + (x || 3) + "})+" + (n > 0 ? "\\." : "$") + ")";
      return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, "g"), "$&,");
    };

    function percentage(partialValue, totalValue) {
      return (100 * partialValue) / totalValue;
    }

    function formatNumber(num) {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    }

    function formatMoney(n, c, d, t) {
      var c = isNaN((c = Math.abs(c))) ? 2 : c,
        d = d == undefined ? "." : d,
        t = t == undefined ? "," : t,
        s = n < 0 ? "-" : "",
        i = String(parseInt((n = Math.abs(Number(n) || 0).toFixed(c)))),
        j = (j = i.length) > 3 ? j % 3 : 0;

      return (
        s +
        (j ? i.substr(0, j) + t : "") +
        i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) +
        (c
          ? d +
            Math.abs(n - i)
              .toFixed(c)
              .slice(2)
          : "")
      );
    }

    function fCalculate() {
      loanAmount = document.getElementById("loan-amount").value;
      loanTenure = document.getElementById("loan-tenure").value;

      interest = document.querySelector('input[name="interest"]:checked').value;
      nIntP = interest / 100;
      loanAmount = parseFloat(loanAmount);
      tInt = parseFloat(tInt);

      emiCalc =
        (loanAmount * nIntP * parseFloat(Math.pow(1 + nIntP, loanTenure))) /
        parseFloat(Math.pow(1 + nIntP, loanTenure) - 1);
      emiCalc = emiCalc.toFixed(2);

      tInt = emiCalc * loanTenure - loanAmount;

      tPay = loanAmount + tInt;

      document.querySelector("#month-output").textContent = "$" + formatMoney(emiCalc);
      document.querySelector("#interest-output .val").textContent = "$" + formatMoney(tInt);
      document.querySelector("#total-output .val").textContent = "$" + formatMoney(tPay);

      // Set percent text
      document.querySelector("#interest-output .percent").textContent = `(${Math.round(
        percentage(tInt, tInt + tPay)
      )}%)`;

      document.querySelector("#total-output .percent").textContent = `(${Math.round(percentage(tPay, tInt + tPay))}%)`;
    }

    fCalculate();

    // Range Slider Background changes
    const calculateButton = document.querySelector("#calculate");

    const plusButtons = document.querySelectorAll(".calc__field-button--plus");
    const minusButtons = document.querySelectorAll(".calc__field-button--minus");

    const loanAmountRange = document.querySelector("#loan-amount");
    const loanTenureRange = document.querySelector("#loan-tenure");

    calculateButton.addEventListener("click", function () {
      fCalculate();

      // Show the result card
      document.querySelector(".calc__result").classList.add("calc__result--active");
    });

    // Buttons
    plusButtons.forEach(function (el) {
      el.addEventListener("click", function () {
        this.previousElementSibling.value = Number(this.previousElementSibling.value) + Number(this.dataset.num);
        this.previousElementSibling.dispatchEvent(new Event("input"));
      });
    });

    minusButtons.forEach(function (el) {
      el.addEventListener("click", function () {
        this.nextElementSibling.value = Number(this.nextElementSibling.value) - Number(this.dataset.num);
        this.nextElementSibling.dispatchEvent(new Event("input"));
      });
    });

    // Ranges
    loanAmountRange.addEventListener("input", function () {
      document.querySelector(".amount-show").textContent = formatNumber(this.value);
      this.style.background =
        "linear-gradient(to right, #5AD9AC 0%, #5AD9AC " +
        this.value / 1000 +
        "%, #E5E7EB " +
        this.value / 1000 +
        "%, #E5E7EB 100%)";
    });

    loanTenureRange.addEventListener("input", function () {
      document.querySelector(".tenure-show").textContent = this.value;

      this.style.background =
        "linear-gradient(to right, #5AD9AC 0%, #5AD9AC " +
        (percentage(this.value, 36) - 5) +
        "%, #E5E7EB " +
        (percentage(this.value, 36) - 5) +
        "%, #E5E7EB 100%)";
    });
  }
});
