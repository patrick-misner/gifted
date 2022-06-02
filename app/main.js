import { GifsController } from "./Controllers/GifsController.js";
import { SandboxesController } from "./Controllers/SandboxesController.js";

class App {
  // valuesController = new ValuesController();
  gifsController = new GifsController();
  sandboxesController = new SandboxesController();
}

window["app"] = new App();
