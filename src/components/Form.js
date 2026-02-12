import { Component } from "../core/Component";

export class Form extends Component {
  setup(props) {
    this.state = {
      amount: "",
    };

    this.$rootElement = document.createElement("form");
    this.$rootElement.className = "donate-form";

    const inputLabel = document.createElement("label");
    inputLabel.className = "donate-form__input-label";
    inputLabel.textContent = "Введите сумму в $";

    const input = document.createElement("input");
    input.className = "donate-form__donate-input";
    input.type = "number";
    input.name = "amount";
    input.max = 100;
    input.min = 1;
    input.setAttribute("required", "");

    const submitButton = document.createElement("button");
    submitButton.className = "donate-form__submit-button";
    submitButton.type = "submit";
    submitButton.textContent = "Задонатить";

    this.$input = input;
    this.$button = submitButton;

    this.$input.addEventListener("input", this.handleInput.bind(this));
    this.$rootElement.addEventListener("submit", this.handleSubmit.bind(this));

    inputLabel.appendChild(input);
    this.$rootElement.appendChild(inputLabel);
    this.$rootElement.appendChild(submitButton);
  }

  get isValid() {
    const value = Number(this.state.amount);
    if (value >= 1 && value <= 100) {
      return true;
    } else {
      return false;
    }
  }

  handleInput(event) {
    this.state.amount = event.target.value;
    if (!this.isValid) {
      this.$button.setAttribute("disabled", "true");
    } else {
      this.$button.removeAttribute("disabled");
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.isValid) {
      this.props.onSubmit(Number(this.state.amount));
      this.state.amount = "";
      this.$input.value = "";
    }
  }
}
