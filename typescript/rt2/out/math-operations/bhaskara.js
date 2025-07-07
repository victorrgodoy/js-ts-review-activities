"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bhaskara {
    calcular(numero1, numero2, numero3) {
        let a = numero1;
        let b = numero2;
        let c = numero3;
        let delta = (Math.pow(b, 2)) - 4 * a * c;
        if (delta < 0) {
            throw new Error('Não existem raízes');
        }
        let raizDelta = Math.sqrt(delta);
        let x1 = (-b + raizDelta) / (2 * a);
        let x2 = (-b - raizDelta) / (2 * a);
        return [x1, x2];
    }
}
exports.default = Bhaskara;
