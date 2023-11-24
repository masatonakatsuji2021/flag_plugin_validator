"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ValidateRule {
    constructor(inputData) {
        this.inputData = inputData;
    }
    notEmpty(value) {
        if (value === undefined ||
            value === null ||
            value === false ||
            value === "") {
            return false;
        }
        return true;
    }
    length(value, arg) {
        if (!this.notEmpty(value)) {
            return true;
        }
        const length = arg[0];
        if (value.toString().length != length) {
            return false;
        }
        return true;
    }
    minLength(value, arg) {
        if (!this.notEmpty(value)) {
            return true;
        }
        const length = arg[0];
        if (value.toString().length < length) {
            return false;
        }
        return true;
    }
    maxLength(value, arg) {
        if (!this.notEmpty(value)) {
            return true;
        }
        const length = arg[0];
        if (value.toString().length > length) {
            return false;
        }
        return true;
    }
    betweenLength(value, arg) {
        if (!this.notEmpty(value)) {
            return true;
        }
        const min = arg[0];
        const max = arg[1];
        if (value.toString().length < min) {
            return false;
        }
        if (value.toString().length > max) {
            return false;
        }
        return true;
    }
    value(value, arg) {
        if (!this.notEmpty(value)) {
            return true;
        }
        const length = arg[0];
        if (parseInt(value.toString()) != length) {
            return false;
        }
        return true;
    }
    minValue(value, arg) {
        if (!this.notEmpty(value)) {
            return true;
        }
        const length = arg[0];
        if (parseInt(value.toString()) < length) {
            return false;
        }
        return true;
    }
    maxValue(value, arg) {
        if (!this.notEmpty(value)) {
            return true;
        }
        const length = arg[0];
        if (parseInt(value.toString()) > length) {
            return false;
        }
        return true;
    }
    betweenValue(value, arg) {
        if (!this.notEmpty(value)) {
            return true;
        }
        const length = arg[0];
        if (parseInt(value.toString()) > length) {
            return false;
        }
        return true;
    }
}
exports.default = ValidateRule;
