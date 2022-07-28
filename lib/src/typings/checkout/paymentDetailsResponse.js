"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentDetailsResponse = void 0;
class PaymentDetailsResponse {
}
exports.PaymentDetailsResponse = PaymentDetailsResponse;
(function (PaymentDetailsResponse) {
    let ResultCodeEnum;
    (function (ResultCodeEnum) {
        ResultCodeEnum[ResultCodeEnum["AuthenticationFinished"] = 'AuthenticationFinished'] = "AuthenticationFinished";
        ResultCodeEnum[ResultCodeEnum["Authorised"] = 'Authorised'] = "Authorised";
        ResultCodeEnum[ResultCodeEnum["Cancelled"] = 'Cancelled'] = "Cancelled";
        ResultCodeEnum[ResultCodeEnum["ChallengeShopper"] = 'ChallengeShopper'] = "ChallengeShopper";
        ResultCodeEnum[ResultCodeEnum["Error"] = 'Error'] = "Error";
        ResultCodeEnum[ResultCodeEnum["IdentifyShopper"] = 'IdentifyShopper'] = "IdentifyShopper";
        ResultCodeEnum[ResultCodeEnum["Pending"] = 'Pending'] = "Pending";
        ResultCodeEnum[ResultCodeEnum["PresentToShopper"] = 'PresentToShopper'] = "PresentToShopper";
        ResultCodeEnum[ResultCodeEnum["Received"] = 'Received'] = "Received";
        ResultCodeEnum[ResultCodeEnum["RedirectShopper"] = 'RedirectShopper'] = "RedirectShopper";
        ResultCodeEnum[ResultCodeEnum["Refused"] = 'Refused'] = "Refused";
        ResultCodeEnum[ResultCodeEnum["Success"] = 'Success'] = "Success";
    })(ResultCodeEnum = PaymentDetailsResponse.ResultCodeEnum || (PaymentDetailsResponse.ResultCodeEnum = {}));
})(PaymentDetailsResponse = exports.PaymentDetailsResponse || (exports.PaymentDetailsResponse = {}));
//# sourceMappingURL=paymentDetailsResponse.js.map