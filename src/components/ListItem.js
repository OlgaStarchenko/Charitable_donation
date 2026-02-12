import { Component } from "../core/Component";

export class ListItem extends Component {
  setup(props) {
    this.state = {
      id: Date.now(),
      date: new Date().toLocaleString("en-US", { hour12: false }),
      amount: props.amount,
    };

    this.$rootElement = document.createElement("div");
    this.$rootElement.className = "donate-item";

    const dateText = document.createTextNode(`${this.state.date} - $`);

    const bold = document.createElement("b");
    bold.textContent = this.state.amount;

    this.$rootElement.appendChild(dateText);
    this.$rootElement.appendChild(bold);
  }
}
