"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationData = void 0;
class AuthenticationData {
}
exports.AuthenticationData = AuthenticationData;
(function (AuthenticationData) {
    let AttemptAuthenticationEnum;
    (function (AttemptAuthenticationEnum) {
        AttemptAuthenticationEnum[AttemptAuthenticationEnum["Always"] = 'always'] = "Always";
        AttemptAuthenticationEnum[AttemptAuthenticationEnum["Never"] = 'never'] = "Never";
        AttemptAuthenticationEnum[AttemptAuthenticationEnum["PreferNo"] = 'preferNo'] = "PreferNo";
    })(AttemptAuthenticationEnum = AuthenticationData.AttemptAuthenticationEnum || (AuthenticationData.AttemptAuthenticationEnum = {}));
})(AuthenticationData = exports.AuthenticationData || (exports.AuthenticationData = {}));
//# sourceMappingURL=authenticationData.js.map