// =====================================================
// PAD.JS
// Sistema independente do Phaser
//
// TAPETE 1 → WASD
// TAPETE 2 → SETAS
// =====================================================

console.log("====================================");
console.log("SISTEMA DE TAPETES INICIADO");
console.log("====================================");

// =====================================================
// CONFIGURAÇÃO DAS TECLAS
// =====================================================

// PRIMEIRO TAPETE
// 0 = esquerda
// 1 = baixo
// 2 = cima
// 3 = direita

const TECLAS_TAPETE_1 = {
  0: {
    key: "a",
    code: "KeyA",
  },

  1: {
    key: "s",
    code: "KeyS",
  },

  2: {
    key: "w",
    code: "KeyW",
  },

  3: {
    key: "d",
    code: "KeyD",
  },
};

// SEGUNDO TAPETE

const TECLAS_TAPETE_2 = {
  0: {
    key: "ArrowLeft",
    code: "ArrowLeft",
  },

  1: {
    key: "ArrowDown",
    code: "ArrowDown",
  },

  2: {
    key: "ArrowUp",
    code: "ArrowUp",
  },

  3: {
    key: "ArrowRight",
    code: "ArrowRight",
  },
};

// =====================================================
// TAPETES
// =====================================================

let tapete1 = null;
let tapete2 = null;

// Guarda quais botões estavam apertados

let botoesAnteriores = {
  0: [],

  1: [],
};

// =====================================================
// CRIAR TECLA VIRTUAL
// =====================================================

function apertarTecla(tecla) {
  console.log("TECLA VIRTUAL:", tecla.key);

  const evento = new KeyboardEvent("keydown", {
    key: tecla.key,
    code: tecla.code,
    bubbles: true,
    cancelable: true,
  });

  // =================================================
  // COLOCA O KEYCODE QUE O PHASER ESPERA
  // =================================================

  const keyCodes = {
    a: 65,
    s: 83,
    w: 87,
    d: 68,

    ArrowLeft: 37,
    ArrowUp: 38,
    ArrowRight: 39,
    ArrowDown: 40,
  };

  const codigo = keyCodes[tecla.key];

  try {
    Object.defineProperty(evento, "keyCode", {
      value: codigo,
    });

    Object.defineProperty(evento, "which", {
      value: codigo,
    });

    Object.defineProperty(evento, "charCode", {
      value: codigo,
    });
  } catch (erro) {
    console.log("Não foi possível definir keyCode:", erro);
  }

  window.dispatchEvent(evento);
}

// =====================================================
// SOLTAR TECLA VIRTUAL
// =====================================================

function soltarTecla(tecla) {
  const evento = new KeyboardEvent("keyup", {
    key: tecla.key,
    code: tecla.code,
    bubbles: true,
    cancelable: true,
  });

  const keyCodes = {
    a: 65,
    s: 83,
    w: 87,
    d: 68,

    ArrowLeft: 37,
    ArrowUp: 38,
    ArrowRight: 39,
    ArrowDown: 40,
  };

  const codigo = keyCodes[tecla.key];

  try {
    Object.defineProperty(evento, "keyCode", {
      value: codigo,
    });

    Object.defineProperty(evento, "which", {
      value: codigo,
    });

    Object.defineProperty(evento, "charCode", {
      value: codigo,
    });
  } catch (erro) {
    console.log("Não foi possível definir keyCode:", erro);
  }

  window.dispatchEvent(evento);
}

// =====================================================
// CADASTRAR TAPETE
// =====================================================

function cadastrarTapete(pad) {
  // Já está cadastrado?
  if (tapete1 === pad || tapete2 === pad) {
    return;
  }

  // PRIMEIRO TAPETE

  if (!tapete1) {
    tapete1 = pad;

    botoesAnteriores[0] = [];

    console.log("====================================");

    console.log("TAPETE 1 DETECTADO → WASD");

    console.log("ID:", pad.id);

    console.log("INDEX:", pad.index);

    console.log("BOTÕES:", pad.buttons.length);

    console.log("====================================");

    return;
  }

  // SEGUNDO TAPETE

  if (!tapete2) {
    tapete2 = pad;

    botoesAnteriores[1] = [];

    console.log("====================================");

    console.log("TAPETE 2 DETECTADO → SETAS");

    console.log("ID:", pad.id);

    console.log("INDEX:", pad.index);

    console.log("BOTÕES:", pad.buttons.length);

    console.log("====================================");

    return;
  }
}

// =====================================================
// VERIFICAR GAMEPADS
// =====================================================

function procurarTapetes() {
  const gamepads = navigator.getGamepads();

  for (let i = 0; i < gamepads.length; i++) {
    const pad = gamepads[i];

    if (!pad) {
      continue;
    }

    cadastrarTapete(pad);
  }
}

// =====================================================
// PROCESSAR BOTÕES
// =====================================================

function processarTapete(pad, numeroTapete, mapaTeclas) {
  if (!pad) {
    return;
  }

  for (let i = 0; i < pad.buttons.length; i++) {
    const botao = pad.buttons[i];

    const estavaApertado = botoesAnteriores[numeroTapete][i] || false;

    // =============================================
    // APERTOU
    // =============================================

    if (botao.pressed && !estavaApertado) {
      const tecla = mapaTeclas[i];

      if (tecla) {
        apertarTecla(tecla);
      }
    }

    // =============================================
    // SOLTOU
    // =============================================

    if (!botao.pressed && estavaApertado) {
      const tecla = mapaTeclas[i];

      if (tecla) {
        soltarTecla(tecla);
      }
    }

    // Guarda o estado atual

    botoesAnteriores[numeroTapete][i] = botao.pressed;
  }
}

// =====================================================
// LOOP PRINCIPAL
// =====================================================

function atualizarTapetes() {
  // Procura os tapetes continuamente.
  //
  // Isso é importante porque alguns navegadores
  // só disponibilizam o Gamepad depois que ele
  // recebe uma entrada.

  procurarTapetes();

  // Processa TAPETE 1

  if (tapete1) {
    processarTapete(tapete1, 0, TECLAS_TAPETE_1);
  }

  // Processa TAPETE 2

  if (tapete2) {
    processarTapete(tapete2, 1, TECLAS_TAPETE_2);
  }
}

// =====================================================
// GAMEPAD CONECTADO
// =====================================================

window.addEventListener("gamepadconnected", function (evento) {
  const pad = evento.gamepad;

  console.log("GAMEPAD CONECTADO!");

  console.log("ID:", pad.id);

  console.log("INDEX:", pad.index);

  cadastrarTapete(pad);
});

// =====================================================
// GAMEPAD DESCONECTADO
// =====================================================

window.addEventListener("gamepaddisconnected", function (evento) {
  const pad = evento.gamepad;

  console.log("GAMEPAD DESCONECTADO:", pad.id);

  if (tapete1 === pad) {
    tapete1 = null;

    console.log("Tapete 1 desconectado.");
  }

  if (tapete2 === pad) {
    tapete2 = null;

    console.log("Tapete 2 desconectado.");
  }
});

// =====================================================
// RODA 60 VEZES POR SEGUNDO
// =====================================================

setInterval(atualizarTapetes, 16);

console.log("Sistema aguardando os tapetes...");
