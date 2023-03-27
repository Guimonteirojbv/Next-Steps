const steps = document.querySelectorAll("#steps");
const progress = document.querySelector("#progress");
const BtnPrev = document.querySelector("#btn-prev");
const BtnNext = document.querySelector("#btn-next");
let currentStep = 0;

if (currentStep != 0) {
  BtnPrev.removeAttribute("disabled", "disabled");
}

function showStep(n) {
  steps[n].classList.add("active");
  if (currentStep != 0) {
    progress.style.width = (currentStep + 1) * 33.33 + "%";
  } else {
    progress.style.width = 33.33 + "%";
  }

  currentStep = n;
  if (currentStep > 0) {
    BtnPrev.removeAttribute("disabled");
  } else {
    BtnPrev.setAttribute("disabled", "true");
  }

  if (!steps.length - 1) {
    BtnNext.removeAttribute("disabled");
  }
}

function nextStep() {
  if (currentStep < steps.length - 1) {
    BtnNext.setAttribute("disabled", "true");
    showStep(currentStep + 1);
  } else {
    BtnNext.setAttribute("disabled", "true");
  }
}

function prevStep() {
  if (currentStep > 0) {
    steps[currentStep].classList.remove("active");
    showStep(currentStep - 1);

    progress.style.width = currentStep * 33.33 + "%";
    if (currentStep === 0) {
      BtnPrev.setAttribute("disabled", "true");
    }
  }
}

BtnNext.addEventListener("click", nextStep);
BtnPrev.addEventListener("click", prevStep);
