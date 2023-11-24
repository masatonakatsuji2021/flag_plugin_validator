"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ValidateRule_1 = require("./ValidateRule");
const RulePresetList_1 = require("./RulePresetList");
class Validator {
    verify(inputData) {
        return Validator.verify(inputData, this.rules, this);
    }
    /**
     *
     * example:)
     *
     * name: [
     *      {
     *          rule: "notEmpty",
     *          message: "name is empty.",
     *      },
     *      {
     *          rule: "maxLength",
     *          args: [255],
     *          message: "over 255 charcter.",
     *      },
     * ],
     *
     */
    /**
     *
     * @param inputData
     * @param validateRule
     */
    static verify(inputData, validateRule, context) {
        let vResult = null;
        let vrule = new ValidateRule_1.default(inputData);
        const c = Object.keys(validateRule);
        for (let n = 0; n < c.length; n++) {
            const field = c[n];
            const rules = validateRule[field];
            const rc = Object.keys(rules);
            for (let n2 = 0; n2 < rc.length; n2++) {
                const rIndex = rc[n2];
                const rule = rules[rIndex];
                const ruleName = rule.rule;
                const rArgs = rule.args;
                const rErrorMessage = rule.message;
                const value = inputData[field];
                let result;
                if (typeof ruleName == "string") {
                    if (vrule[ruleName]) {
                        result = vrule[ruleName](value, rArgs);
                    }
                    else {
                        if (context) {
                            if (context[ruleName]) {
                                result = context[ruleName](value, rArgs);
                            }
                        }
                    }
                }
                else if (typeof ruleName == "function") {
                    result = ruleName(value, rArgs);
                }
                if (!result) {
                    if (!vResult) {
                        vResult = {};
                    }
                    if (!vResult[field]) {
                        vResult[field] = [];
                    }
                    vResult[field].push(rErrorMessage);
                }
            }
        }
        return vResult;
    }
    ruleAdd(field, arg1, arg2, arg3) {
        let buffer = {};
        buffer.rule = arg1;
        buffer.args = null;
        if (typeof arg2 == "string") {
            buffer.message = arg2;
        }
        else {
            buffer.args = arg2;
            buffer.message = arg3;
        }
        if (!this.rules[field]) {
            this.rules[field] = [];
        }
        this.rules[field].push(buffer);
        return this;
    }
}
Validator.Rule = RulePresetList_1.default;
exports.default = Validator;
