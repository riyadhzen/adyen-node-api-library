"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getJsonResponse_1 = __importDefault(require("../helpers/getJsonResponse"));
const service_1 = __importDefault(require("../service"));
const amountUpdates_1 = __importDefault(require("./resource/modification/amountUpdates"));
const cancels_1 = __importDefault(require("./resource/modification/cancels"));
const captures_1 = __importDefault(require("./resource/modification/captures"));
const refunds_1 = __importDefault(require("./resource/modification/refunds"));
const reversals_1 = __importDefault(require("./resource/modification/reversals"));
const cancelsStandalone_1 = __importDefault(require("./resource/modification/cancelsStandalone"));
class Modification extends service_1.default {
    constructor(client) {
        super(client);
    }
    amountUpdates(paymentPspReference, amountUpdatesRequest, requestOptions) {
        const amountUpdates = new amountUpdates_1.default(this, paymentPspReference);
        return (0, getJsonResponse_1.default)(amountUpdates, amountUpdatesRequest, requestOptions);
    }
    cancelsStandalone(cancelsStandaloneRequest, requestOptions) {
        const cancelsStandalone = new cancelsStandalone_1.default(this);
        return (0, getJsonResponse_1.default)(cancelsStandalone, cancelsStandaloneRequest, requestOptions);
    }
    cancels(paymentPspReference, cancelsRequest, requestOptions) {
        const cancels = new cancels_1.default(this, paymentPspReference);
        return (0, getJsonResponse_1.default)(cancels, cancelsRequest, requestOptions);
    }
    captures(paymentPspReference, capturesRequest, requestOptions) {
        const captures = new captures_1.default(this, paymentPspReference);
        return (0, getJsonResponse_1.default)(captures, capturesRequest, requestOptions);
    }
    refunds(paymentPspReference, refundsRequest, requestOptions) {
        const refunds = new refunds_1.default(this, paymentPspReference);
        return (0, getJsonResponse_1.default)(refunds, refundsRequest, requestOptions);
    }
    reversals(paymentPspReference, reversalsRequest, requestOptions) {
        const refunds = new reversals_1.default(this, paymentPspReference);
        return (0, getJsonResponse_1.default)(refunds, reversalsRequest, requestOptions);
    }
}
exports.default = Modification;
//# sourceMappingURL=modification.js.map