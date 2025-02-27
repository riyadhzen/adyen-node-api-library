"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = __importDefault(require("../service"));
const declineThirdParty_1 = __importDefault(require("./resource/payout/declineThirdParty"));
const storeDetail_1 = __importDefault(require("./resource/payout/storeDetail"));
const submitThirdParty_1 = __importDefault(require("./resource/payout/submitThirdParty"));
const confirmThirdParty_1 = __importDefault(require("./resource/payout/confirmThirdParty"));
const payout_1 = __importDefault(require("./resource/payout/payout"));
const storeDetailAndSubmitThirdParty_1 = __importDefault(require("./resource/payout/storeDetailAndSubmitThirdParty"));
const getJsonResponse_1 = __importDefault(require("../helpers/getJsonResponse"));
class Payout extends service_1.default {
    constructor(client) {
        super(client);
        this._storeDetailAndSubmitThirdParty = new storeDetailAndSubmitThirdParty_1.default(this);
        this._confirmThirdParty = new confirmThirdParty_1.default(this);
        this._declineThirdParty = new declineThirdParty_1.default(this);
        this._storeDetail = new storeDetail_1.default(this);
        this._submitThirdParty = new submitThirdParty_1.default(this);
        this._payout = new payout_1.default(this);
    }
    storeDetailAndSubmitThirdParty(request) {
        return (0, getJsonResponse_1.default)(this._storeDetailAndSubmitThirdParty, request);
    }
    confirmThirdParty(request) {
        return (0, getJsonResponse_1.default)(this._confirmThirdParty, request);
    }
    declineThirdParty(request) {
        return (0, getJsonResponse_1.default)(this._declineThirdParty, request);
    }
    storeDetail(request) {
        return (0, getJsonResponse_1.default)(this._storeDetail, request);
    }
    submitThirdparty(request) {
        return (0, getJsonResponse_1.default)(this._submitThirdParty, request);
    }
    payout(request) {
        return (0, getJsonResponse_1.default)(this._payout, request);
    }
}
exports.default = Payout;
//# sourceMappingURL=payout.js.map