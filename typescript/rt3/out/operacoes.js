"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Multiplicador = exports.Divisor = exports.Subtrador = exports.Somador = void 0;
class Somador {
    calcular = (n1, n2) => {
        return n1 + n2;
    };
}
exports.Somador = Somador;
class Subtrador {
    calcular = (n1, n2) => {
        return n1 - n2;
    };
}
exports.Subtrador = Subtrador;
class Divisor {
    calcular = (n1, n2) => {
        return n1 / n2;
    };
}
exports.Divisor = Divisor;
class Multiplicador {
    calcular = (n1, n2) => {
        return n1 * n2;
    };
}
exports.Multiplicador = Multiplicador;
