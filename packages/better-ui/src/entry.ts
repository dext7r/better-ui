import { App } from "vue";
import Button from "./button";
import Icon from "./icon";
export { Button };
export default {
  install(app: App): void {
    app.component(Button.name, Button);
    app.component(Icon.name, Icon);
  },
};
