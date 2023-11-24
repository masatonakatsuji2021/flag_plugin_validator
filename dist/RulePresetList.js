"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RulePresetList = {
    /**
     * ***notEmpty*** :
     * 値が空またはnullかundefinedの状態の場合にエラー判定します
     */
    notEmpty: "notEmpty",
    /**
     * ***length*** :
     * 値(文字列)が指定長さでない場合にエラー判定します
     */
    length: "length",
    /**
     * ***minLength*** :
     * 値(文字列)が指定長さより小さい場合にエラー判定します
     */
    minLength: "minLength",
    /**
     * ***maxLength*** :
     * 値(文字列)が指定長さより大きい場合にエラー判定します
     */
    maxLength: "maxLength",
    /**
     * ***maxLength*** :
     * 値(文字列)が指定長さの範囲外の場合にエラー判定します
     */
    betweenLength: "betweenLength",
    /**
     * ***value*** :
     * 値(数値)が指定値ではない場合にエラー判定します
     */
    value: "value",
    /**
     * ***minValue*** :
     * 値(数値)が指定値より小さい場合にエラー判定します
     */
    minValue: "minValue",
    /**
     * ***maxValue*** :
     *
     */
    maxValue: "maxValue",
    betweenValue: "betweenValue",
};
exports.default = RulePresetList;
