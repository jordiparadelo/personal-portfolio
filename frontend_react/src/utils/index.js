// Lib
import Splitting from "splitting";

export function scrollToTarget(event, target) {
  event.preventDefault();
  const selectedTarget =
    document.querySelector(target) ||
    document.querySelector(event.currentTarget.hash);
  // window.location.hash = event.currentTarget.hash

  console.log({selectedTarget})

  selectedTarget?.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
}

export const formValidator = {
  checkFormFieldsValidation(form) {
    let validation = {};
    let isValid;

    [...form.elements]
      .filter((field) => field.dataset.required)
      .forEach((field, index) => {
        Object.assign(validation, { [index]: this.validate(field) });
      });

    isValid = Object.values(validation).every(
      ({ validated, required }) => validated && required
    ); // Check if both keys ( validated && required ) are true

    return { validation, isValid };
  },
  validate(input) {
    const hasValue = input.value !== "";
    const required = input.dataset.required || false;

    hasValue
      ? this.clearValidationMessage(input)
      : this.validationMessage(input);

    return { input, name: input.name, validated: hasValue, required };
  },
  clearValidationMessage(input) {
    const attributeLabel = "data-input-status";
    const formGroupEl = input.closest(`[${attributeLabel}]`);
    const hasAttributeLabel = formGroupEl !== null;

    if (!hasAttributeLabel) return;

    formGroupEl.removeAttribute(attributeLabel);
  },
  validationMessage(input, message = "") {
    const formGroupEl = input.parentElement;
    const hasStatusMessage =
      formGroupEl.querySelector(".status_message") !== null;
    formGroupEl.dataset.inputStatus = "error";

    if (hasStatusMessage) return;

    const messageEl = document.createElement("div");
    let ERROR_MESSAGE =
      message !== "" ? message : `Please, enter your ${input.name} `;

    formGroupEl.appendChild(messageEl);
    messageEl.classList.add("status_message");
    messageEl.innerText = ERROR_MESSAGE;

    formGroupEl.scrollIntoView({ block: "center", behavior: "smooth" });
  },
  inputValueValidator(input) {
    switch (input.name) {
      case "email":
        if (!input.value.includes("@")) {
          const message = `${input.name} at least needs to have @`;
          this.validationMessage(input, message);
        }
        break;

      default:
        break;
    }
  },
};

export const splitContent = ({content, type = 'chars'}) => {
  const split = Splitting({ target: content, by: type });
  const words = split[0].words;

  return words
}