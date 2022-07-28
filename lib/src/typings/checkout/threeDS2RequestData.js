"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreeDS2RequestData = void 0;
class ThreeDS2RequestData {
}
exports.ThreeDS2RequestData = ThreeDS2RequestData;
(function (ThreeDS2RequestData) {
    let AcctTypeEnum;
    (function (AcctTypeEnum) {
        AcctTypeEnum[AcctTypeEnum["_01"] = '01'] = "_01";
        AcctTypeEnum[AcctTypeEnum["_02"] = '02'] = "_02";
        AcctTypeEnum[AcctTypeEnum["_03"] = '03'] = "_03";
    })(AcctTypeEnum = ThreeDS2RequestData.AcctTypeEnum || (ThreeDS2RequestData.AcctTypeEnum = {}));
    let AddrMatchEnum;
    (function (AddrMatchEnum) {
        AddrMatchEnum[AddrMatchEnum["Y"] = 'Y'] = "Y";
        AddrMatchEnum[AddrMatchEnum["N"] = 'N'] = "N";
    })(AddrMatchEnum = ThreeDS2RequestData.AddrMatchEnum || (ThreeDS2RequestData.AddrMatchEnum = {}));
    let ChallengeIndicatorEnum;
    (function (ChallengeIndicatorEnum) {
        ChallengeIndicatorEnum[ChallengeIndicatorEnum["NoPreference"] = 'noPreference'] = "NoPreference";
        ChallengeIndicatorEnum[ChallengeIndicatorEnum["RequestNoChallenge"] = 'requestNoChallenge'] = "RequestNoChallenge";
        ChallengeIndicatorEnum[ChallengeIndicatorEnum["RequestChallenge"] = 'requestChallenge'] = "RequestChallenge";
        ChallengeIndicatorEnum[ChallengeIndicatorEnum["RequestChallengeAsMandate"] = 'requestChallengeAsMandate'] = "RequestChallengeAsMandate";
    })(ChallengeIndicatorEnum = ThreeDS2RequestData.ChallengeIndicatorEnum || (ThreeDS2RequestData.ChallengeIndicatorEnum = {}));
    let ThreeDSRequestorChallengeIndEnum;
    (function (ThreeDSRequestorChallengeIndEnum) {
        ThreeDSRequestorChallengeIndEnum[ThreeDSRequestorChallengeIndEnum["_01"] = '01'] = "_01";
        ThreeDSRequestorChallengeIndEnum[ThreeDSRequestorChallengeIndEnum["_02"] = '02'] = "_02";
        ThreeDSRequestorChallengeIndEnum[ThreeDSRequestorChallengeIndEnum["_03"] = '03'] = "_03";
        ThreeDSRequestorChallengeIndEnum[ThreeDSRequestorChallengeIndEnum["_04"] = '04'] = "_04";
        ThreeDSRequestorChallengeIndEnum[ThreeDSRequestorChallengeIndEnum["_05"] = '05'] = "_05";
    })(ThreeDSRequestorChallengeIndEnum = ThreeDS2RequestData.ThreeDSRequestorChallengeIndEnum || (ThreeDS2RequestData.ThreeDSRequestorChallengeIndEnum = {}));
    let TransTypeEnum;
    (function (TransTypeEnum) {
        TransTypeEnum[TransTypeEnum["_01"] = '01'] = "_01";
        TransTypeEnum[TransTypeEnum["_03"] = '03'] = "_03";
        TransTypeEnum[TransTypeEnum["_10"] = '10'] = "_10";
        TransTypeEnum[TransTypeEnum["_11"] = '11'] = "_11";
        TransTypeEnum[TransTypeEnum["_28"] = '28'] = "_28";
    })(TransTypeEnum = ThreeDS2RequestData.TransTypeEnum || (ThreeDS2RequestData.TransTypeEnum = {}));
    let TransactionTypeEnum;
    (function (TransactionTypeEnum) {
        TransactionTypeEnum[TransactionTypeEnum["GoodsOrServicePurchase"] = 'goodsOrServicePurchase'] = "GoodsOrServicePurchase";
        TransactionTypeEnum[TransactionTypeEnum["CheckAcceptance"] = 'checkAcceptance'] = "CheckAcceptance";
        TransactionTypeEnum[TransactionTypeEnum["AccountFunding"] = 'accountFunding'] = "AccountFunding";
        TransactionTypeEnum[TransactionTypeEnum["QuasiCashTransaction"] = 'quasiCashTransaction'] = "QuasiCashTransaction";
        TransactionTypeEnum[TransactionTypeEnum["PrepaidActivationAndLoad"] = 'prepaidActivationAndLoad'] = "PrepaidActivationAndLoad";
    })(TransactionTypeEnum = ThreeDS2RequestData.TransactionTypeEnum || (ThreeDS2RequestData.TransactionTypeEnum = {}));
})(ThreeDS2RequestData = exports.ThreeDS2RequestData || (exports.ThreeDS2RequestData = {}));
//# sourceMappingURL=threeDS2RequestData.js.map