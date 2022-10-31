import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.btn-change-name": this.onBtnChangeName,
      "click:.btn-set-age": this.onBtnSetAgeClick,
      "click:.btn-save": this.onBtnSaveClick,
    };
  }

  onBtnChangeName = (): void => {
    const input = this.parent.querySelector("input");
    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  };

  onBtnSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  onBtnSaveClick = (): void => {
    this.model.save();
  };

  template(): string {
    return `
        <div>
            <div>
                <input placeholder="${this.model.get("name")}" />
                <button  class="btn-change-name">Change Name</button>
            </div>
            <div>
                <button  class="btn-set-age">Set Random Age</button>
                <button class="btn-save">Save</button>
            </div>
        <div>
        `;
  }
}
