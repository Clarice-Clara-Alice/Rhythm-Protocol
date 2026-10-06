class GamepadInput {
  constructor({ target = window, onInput = () => {} } = {}) {
    this.target = target;
    this.onInput = onInput;
    this.pressed = new Map();
    this.running = false;
    this.frame = null;

    this.handleKey = (event) => this.onInput(event);
    this.poll = this.poll.bind(this);
  }

  start() {
    if (this.running) return;
    this.running = true;
    this.target.addEventListener("keydown", this.handleKey);
    this.target.addEventListener("keyup", this.handleKey);
    this.poll();
  }

  stop() {
    if (!this.running) return;
    this.running = false;
    this.target.removeEventListener("keydown", this.handleKey);
    this.target.removeEventListener("keyup", this.handleKey);
    if (this.frame !== null) cancelAnimationFrame(this.frame);
    this.frame = null;
    for (const key of this.pressed.keys()) this.dispatchKey(key, "keyup");
    this.pressed.clear();
  }

  poll() {
    if (!this.running) return;

    const pads = navigator.getGamepads ? navigator.getGamepads() : [];
    for (let index = 0; index < 2; index += 1) {
      const pad = pads[index];
      if (!pad) continue;

      const directions =
        index === 0
          ? ["KeyA", "KeyS", "KeyW", "KeyD"]
          : ["ArrowLeft", "ArrowDown", "ArrowUp", "ArrowRight"];
      // Standard Gamepad button order: up, down, left, right, select, start.
      const mappings = [
        [0, directions[0]],
        [1, directions[1]],
        [2, directions[2]],
        [3, directions[3]],
        [12, directions[0]],
        [13, directions[1]],
        [14, directions[2]],
        [15, directions[3]],
        [8, "Escape"],
        [9, "Enter"],
      ];

      for (const [buttonIndex, code] of mappings) {
        const button = pad.buttons[buttonIndex];
        this.setPressed(
          `${index}:${buttonIndex}`,
          code,
          Boolean(button && button.pressed),
        );
      }
    }

    this.frame = requestAnimationFrame(this.poll);
  }

  setPressed(id, code, isPressed) {
    const wasPressed = this.pressed.has(id);
    if (isPressed === wasPressed) return;

    const codeWasPressed = [...this.pressed.values()].includes(code);
    if (isPressed) this.pressed.set(id, code);
    else this.pressed.delete(id);
    const codeStillPressed = [...this.pressed.values()].includes(code);
    if (isPressed && !codeWasPressed) this.dispatchKey(code, "keydown");
    if (!isPressed && !codeStillPressed) this.dispatchKey(code, "keyup");
  }

  dispatchKey(code, type) {
    const key = code.startsWith("Key")
      ? code.slice(3).toLowerCase()
      : code === "Escape"
        ? "Escape"
        : code === "Enter"
          ? "Enter"
          : code.replace("Arrow", "Arrow");
    const keyCode = {
      KeyA: 65,
      KeyD: 68,
      KeyS: 83,
      KeyW: 87,
      ArrowDown: 40,
      ArrowLeft: 37,
      ArrowRight: 39,
      ArrowUp: 38,
      Enter: 13,
      Escape: 27,
    }[code];
    const event = new KeyboardEvent(type, {
      key,
      code,
      bubbles: true,
      cancelable: true,
    });
    Object.defineProperty(event, "keyCode", { get: () => keyCode });
    Object.defineProperty(event, "which", { get: () => keyCode });
    this.target.dispatchEvent(event);
    this.onInput(event);
  }
}

export default GamepadInput;
