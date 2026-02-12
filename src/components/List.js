import { Component } from "../core/Component";

export class List extends Component {
  setup() {
    this.$rootElement = document.createElement("div");
    this.$rootElement.className = "donates-container";

    const donatesContainerTtitle = document.createElement("h2");
    donatesContainerTtitle.className = "donates-container__title";
    donatesContainerTtitle.textContent = "Список донатов";

    const donatesContainer = document.createElement("div");
    donatesContainer.className = "donates-container__donates";

    this.$listContainer = donatesContainer;
    this.$rootElement.appendChild(donatesContainerTtitle);
    this.$rootElement.appendChild(donatesContainer);
  }

  addItem(item) {
    // ...
  }
}
