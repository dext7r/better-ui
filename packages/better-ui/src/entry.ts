import { App } from "vue";
import Button from "./button";

export { Button };
export default {
  install(app: App): void {
    app.component(Button.name, Button);
  },
};
