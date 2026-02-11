import { Component } from "../core/Component";
import { Form } from "./Form";
import { List } from "./List";
import { ListItem } from "./ListItem";

export class App extends Component {
  setup(props) {
    this.state = {
      total: 0,
      donates: [],
    };

    this.$rootElement = document.createElement("div");
    this.$rootElement.className = "app";

    const totalAmount = document.createElement("h1");
    totalAmount.className = "total-amount";

    const totalAmountSpan = document.createElement("span");
    totalAmountSpan.textContent = `${this.state.total}`;
    totalAmount.textContent = `Итого: $${totalAmountSpan.textContent}`;

    this.$total = totalAmountSpan;
    this.$rootElement.appendChild(totalAmount);
    const donateForm = new Form();
    this.$rootElement.appendChild(donateForm.$rootElement);
    const donateList = new List();
    this.$rootElement.appendChild(donateList.$rootElement);
  }

  onItemCreate(amount) {
    // ...
  }
}
