"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DonationResponse = void 0;
class DonationResponse {
}
exports.DonationResponse = DonationResponse;
(function (DonationResponse) {
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Completed"] = 'completed'] = "Completed";
        StatusEnum[StatusEnum["Pending"] = 'pending'] = "Pending";
        StatusEnum[StatusEnum["Refused"] = 'refused'] = "Refused";
    })(StatusEnum = DonationResponse.StatusEnum || (DonationResponse.StatusEnum = {}));
})(DonationResponse = exports.DonationResponse || (exports.DonationResponse = {}));
//# sourceMappingURL=donationResponse.js.map