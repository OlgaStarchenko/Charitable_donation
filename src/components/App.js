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
    totalAmountSpan.textContent = this.state.total;
    totalAmount.textContent = "Итого: $";
    totalAmount.appendChild(totalAmountSpan);

    this.$total = totalAmountSpan;
    this.$rootElement.appendChild(totalAmount);
    const donateForm = new Form({ onSubmit: this.onItemCreate.bind(this) });
    this.$rootElement.appendChild(donateForm.$rootElement);
    const donateList = new List();
    this.$rootElement.appendChild(donateList.$rootElement);

    this.donateList = donateList;
  }

  onItemCreate(amount) {
    const item = new ListItem({ amount: amount });
    this.state.donates.push(item);
    this.donateList.addItem(item);
    this.state.total += amount;
    this.$total.textContent = this.state.total;
  }
}
