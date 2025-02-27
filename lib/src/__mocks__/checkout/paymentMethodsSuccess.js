"use strict";
/*
 *                       ######
 *                       ######
 * ############    ####( ######  #####. ######  ############   ############
 * #############  #####( ######  #####. ######  #############  #############
 *        ######  #####( ######  #####. ######  #####  ######  #####  ######
 * ###### ######  #####( ######  #####. ######  #####  #####   #####  ######
 * ###### ######  #####( ######  #####. ######  #####          #####  ######
 * #############  #############  #############  #############  #####  ######
 *  ############   ############  #############   ############  #####  ######
 *                                      ######
 *                               #############
 *                               ############
 * Adyen NodeJS API Library
 * Copyright (c) 2020 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentMethodsSuccess = void 0;
/* tslint:disable */
exports.paymentMethodsSuccess = JSON.stringify({
    paymentMethods: [
        {
            name: "AliPay",
            type: "alipay",
        },
        {
            name: "AliPay",
            type: "alipay_wap",
        },
        {
            details: [
                {
                    key: "additionalData.card.encrypted.json",
                    type: "cardToken",
                },
            ],
            name: "Credit Card",
            type: "scheme",
        },
        {
            name: "Credit Card via AsiaPay",
            type: "asiapay",
        },
        {
            name: "BancNet",
            type: "bancnet",
        },
        {
            name: "Bank Transfer (BE)",
            type: "bankTransfer_BE",
        },
        {
            name: "Bank Transfer (DE)",
            type: "bankTransfer_DE",
        },
        {
            name: "Bank Transfer (DK)",
            type: "bankTransfer_DK",
        },
        {
            name: "Bank Transfer (GB)",
            type: "bankTransfer_GB",
        },
        {
            name: "SEPA Bank Transfer",
            type: "bankTransfer_IBAN",
        },
        {
            name: "Bank Transfer (NL)",
            type: "bankTransfer_NL",
        },
        {
            name: "Bank Transfer (NO)",
            type: "bankTransfer_NO",
        },
        {
            name: "Bank Transfer (PL)",
            type: "bankTransfer_PL",
        },
        {
            name: "Bank Transfer (SE)",
            type: "bankTransfer_SE",
        },
        {
            name: "Russian Bank Transfer",
            type: "bank_ru",
        },
        {
            details: [
                {
                    key: "additionalData.card.encrypted.json",
                    type: "cardToken",
                },
            ],
            name: "Bancontact card",
            type: "bcmc",
        },
        {
            name: "Boleto Bancario via HSBC",
            type: "boletobancario_hsbc",
        },
        {
            name: "Boleto Bancario via Itau",
            type: "boletobancario_itau",
        },
        {
            name: "Boleto Bancario via Santander",
            type: "boletobancario_santander",
        },
        {
            name: "c_cash",
            type: "c_cash",
        },
        {
            name: "CashU",
            type: "cashu",
        },
        {
            name: "Paiement en 3 fois par Cartes Bancaires",
            type: "cofinoga_3xcb",
        },
        {
            name: "DineroMail",
            type: "dineromail",
        },
        {
            name: "Online bank transfer.",
            type: "directEbanking",
        },
        {
            name: "Direct Debit Brazil - Banco do Brazil",
            type: "directdebit_BR_bancodobrasil",
        },
        {
            name: "Direct Debit Brazil - Bradesco",
            type: "directdebit_BR_bradesco",
        },
        {
            name: "Direct Debit Brazil - Caixa Economica Federal",
            type: "directdebit_BR_caixa",
        },
        {
            name: "Direct Debit Brazil - HSBC",
            type: "directdebit_BR_hsbc",
        },
        {
            name: "Direct Debit Brazil - Itau",
            type: "directdebit_BR_itau",
        },
        {
            name: "Direct Debit Brazil - Santander",
            type: "directdebit_BR_santander",
        },
        {
            name: "Eenmalige machtiging",
            type: "directdebit_NL",
        },
        {
            details: [
                {
                    items: [
                        {
                            id: "11",
                            name: "Bank transfer / postal",
                        },
                        {
                            id: "74",
                            name: "Banki Spółdzielcze",
                        },
                        {
                            id: "73",
                            name: "BLIK",
                        },
                        {
                            id: "32",
                            name: "BNP Paribas",
                        },
                        {
                            id: "16",
                            name: "Credit Agricole",
                        },
                        {
                            id: "83",
                            name: "EnveloBank",
                        },
                        {
                            id: "55",
                            name: "erata - dotpay installment",
                        },
                        {
                            id: "93",
                            name: "eSKOK",
                        },
                        {
                            id: "56",
                            name: "eurobank płatności online",
                        },
                        {
                            id: "76",
                            name: "Getin Bank PBL",
                        },
                        {
                            id: "81",
                            name: "Idea Cloud",
                        },
                        {
                            id: "7",
                            name: "ING Corporate customers",
                        },
                        {
                            id: "35",
                            name: "Kantor Polski",
                        },
                        {
                            id: "44",
                            name: "Millennium - Płatności Internetowe",
                        },
                        {
                            id: "10",
                            name: "Millennium Corporate customers",
                        },
                        {
                            id: "68",
                            name: "mRaty",
                        },
                        {
                            id: "1",
                            name: "mTransfer",
                        },
                        {
                            id: "80",
                            name: "Noble Pay",
                        },
                        {
                            id: "50",
                            name: "Pay Way Toyota Bank",
                        },
                        {
                            id: "45",
                            name: "Pay with Alior Bank",
                        },
                        {
                            id: "65",
                            name: "Paylink Idea Bank",
                        },
                        {
                            id: "36",
                            name: "Pekao24Przelew",
                        },
                        {
                            id: "70",
                            name: "Pocztowy24",
                        },
                        {
                            id: "6",
                            name: "Przelew24",
                        },
                        {
                            id: "46",
                            name: "Płacę z Citi Handlowy",
                        },
                        {
                            id: "38",
                            name: "Płacę z ING",
                        },
                        {
                            id: "2",
                            name: "Płacę z Inteligo",
                        },
                        {
                            id: "4",
                            name: "Płacę z iPKO",
                        },
                        {
                            id: "72",
                            name: "Płacę z Orange",
                        },
                        {
                            id: "66",
                            name: "Płacę z PBS",
                        },
                        {
                            id: "75",
                            name: "Płacę z Plus Bank",
                        },
                        {
                            id: "51",
                            name: "Płać z BOŚ",
                        },
                        {
                            id: "48",
                            name: "R-Przelew",
                        },
                        {
                            id: "88",
                            name: "Raiffeisen",
                        },
                        {
                            id: "52",
                            name: "SkyCash",
                        },
                        {
                            id: "58",
                            name: "Szybkie Platnosci Internetowe z Deutsche Bank PBC",
                        },
                        {
                            id: "60",
                            name: "T-Mobile usługi bankowe",
                        },
                        {
                            id: "21",
                            name: "VIA - Moje Rachunki",
                        },
                        {
                            id: "84",
                            name: "Volkswagen Bank direct",
                        },
                        {
                            id: "31",
                            name: "Zaplac w Zabce i we Freshmarket",
                        },
                        {
                            id: "24",
                            name: "mPay",
                        },
                    ],
                    key: "issuer",
                    type: "select",
                },
            ],
            name: "Local Polish Payment Methods",
            type: "dotpay",
        },
        {
            name: "Finnish E-Banking",
            type: "ebanking_FI",
        },
        {
            name: "Lastschrift (ELV)",
            type: "elv",
        },
        {
            details: [
                {
                    items: [
                        {
                            id: "550",
                            name: "?eská spo?itelna",
                        },
                        {
                            id: "231",
                            name: "POP Pankki",
                        },
                        {
                            id: "551",
                            name: "Kb",
                        },
                        {
                            id: "232",
                            name: "Aktia",
                        },
                        {
                            id: "552",
                            name: "Raiffeisen",
                        },
                        {
                            id: "750",
                            name: "Swedbank",
                        },
                        {
                            id: "211",
                            name: "Nordea",
                        },
                        {
                            id: "233",
                            name: "Säästöpankki",
                        },
                        {
                            id: "553",
                            name: "Csob",
                        },
                        {
                            id: "751",
                            name: "SEB",
                        },
                        {
                            id: "234",
                            name: "S-Pankki",
                        },
                        {
                            id: "554",
                            name: "Moneta",
                        },
                        {
                            id: "752",
                            name: "Nordea",
                        },
                        {
                            id: "235",
                            name: "OmaSP",
                        },
                        {
                            id: "213",
                            name: "Op-Pohjola",
                        },
                        {
                            id: "555",
                            name: "UniCredit",
                        },
                        {
                            id: "753",
                            name: "LHV",
                        },
                        {
                            id: "556",
                            name: "Fio",
                        },
                        {
                            id: "557",
                            name: "mBank",
                        },
                        {
                            id: "216",
                            name: "Handelsbanken",
                        },
                        {
                            id: "260",
                            name: "Länsförsäkringar",
                        },
                        {
                            id: "240",
                            name: "BankDeposit",
                        },
                        {
                            id: "265",
                            name: "Sparbanken",
                        },
                        {
                            id: "640",
                            name: "BankDeposit",
                        },
                        {
                            id: "200",
                            name: "Ålandsbanken",
                        },
                        {
                            id: "720",
                            name: "Swedbank",
                        },
                        {
                            id: "940",
                            name: "Swedbank",
                        },
                        {
                            id: "204",
                            name: "Danske Bank",
                        },
                        {
                            id: "721",
                            name: "SEB",
                        },
                        {
                            id: "941",
                            name: "SEB",
                        },
                        {
                            id: "722",
                            name: "DNB",
                        },
                        {
                            id: "942",
                            name: "Citadele",
                        },
                        {
                            id: "205",
                            name: "Handelsbanken",
                        },
                        {
                            id: "723",
                            name: "Šiaulių Bankas",
                        },
                        {
                            id: "943",
                            name: "DNB",
                        },
                        {
                            id: "206",
                            name: "Nordea",
                        },
                        {
                            id: "724",
                            name: "Nordea",
                        },
                        {
                            id: "207",
                            name: "SEB",
                        },
                        {
                            id: "208",
                            name: "Skandiabanken",
                        },
                        {
                            id: "209",
                            name: "Swedbank",
                        },
                    ],
                    key: "issuer",
                    type: "select",
                },
            ],
            name: "Bank Payment",
            type: "entercash",
        },
        {
            name: "Nationale Entertainment Card",
            type: "entertainmentcard",
        },
        {
            name: "Gall & Gall",
            type: "gallgall",
        },
        {
            name: "Generic GiftCard",
            type: "genericgiftcard",
        },
        {
            details: [
                {
                    key: "bic",
                    type: "text",
                },
            ],
            name: "GiroPay",
            type: "giropay",
        },
        {
            name: "Globe GCash",
            type: "globegcash",
        },
        {
            name: "Hunkemoller Lingerie Card",
            type: "hmlingerie",
        },
        {
            details: [
                {
                    items: [
                        {
                            id: "1121",
                            name: "Test Issuer",
                        },
                        {
                            id: "1154",
                            name: "Test Issuer 5",
                        },
                        {
                            id: "1153",
                            name: "Test Issuer 4",
                        },
                        {
                            id: "1152",
                            name: "Test Issuer 3",
                        },
                        {
                            id: "1151",
                            name: "Test Issuer 2",
                        },
                        {
                            id: "1162",
                            name: "Test Issuer Cancelled",
                        },
                        {
                            id: "1161",
                            name: "Test Issuer Pending",
                        },
                        {
                            id: "1160",
                            name: "Test Issuer Refused",
                        },
                        {
                            id: "1159",
                            name: "Test Issuer 10",
                        },
                        {
                            id: "1158",
                            name: "Test Issuer 9",
                        },
                        {
                            id: "1157",
                            name: "Test Issuer 8",
                        },
                        {
                            id: "1156",
                            name: "Test Issuer 7",
                        },
                        {
                            id: "1155",
                            name: "Test Issuer 6",
                        },
                    ],
                    key: "idealIssuer",
                    type: "select",
                },
            ],
            name: "iDEAL",
            type: "ideal",
        },
        {
            name: "Phone Payment",
            type: "ivr",
        },
        {
            name: "Landline phone",
            type: "ivrLandline",
        },
        {
            name: "Mobile phone",
            type: "ivrMobile",
        },
        {
            details: [
                {
                    details: [
                        {
                            key: "firstName",
                            type: "text",
                        },
                        {
                            key: "infix",
                            optional: "true",
                            type: "text",
                        },
                        {
                            key: "lastName",
                            type: "text",
                        },
                        {
                            items: [
                                {
                                    id: "M",
                                    name: "MALE",
                                },
                                {
                                    id: "F",
                                    name: "FEMALE",
                                },
                            ],
                            key: "gender",
                            type: "radio",
                        },
                        {
                            key: "dateOfBirth",
                            type: "date",
                        },
                        {
                            key: "telephoneNumber",
                            type: "tel",
                        },
                        {
                            key: "socialSecurityNumber",
                            optional: "true",
                            type: "text",
                        },
                        {
                            key: "shopperEmail",
                            type: "emailAddress",
                        },
                    ],
                    key: "personalDetails",
                    type: "fieldSet",
                },
                {
                    details: [
                        {
                            key: "street",
                            type: "text",
                        },
                        {
                            key: "houseNumberOrName",
                            type: "text",
                        },
                        {
                            key: "city",
                            type: "text",
                        },
                        {
                            key: "postalCode",
                            type: "text",
                        },
                        {
                            key: "stateOrProvince",
                            optional: "true",
                            type: "text",
                        },
                        {
                            items: [
                                {
                                    id: "SE",
                                    name: "SWEDEN",
                                },
                                {
                                    id: "NO",
                                    name: "NORWAY",
                                },
                                {
                                    id: "FI",
                                    name: "FINLAND",
                                },
                                {
                                    id: "DK",
                                    name: "DENMARK",
                                },
                                {
                                    id: "AT",
                                    name: "AUSTRIA",
                                },
                                {
                                    id: "DE",
                                    name: "GERMANY",
                                },
                                {
                                    id: "NL",
                                    name: "NETHERLANDS",
                                },
                            ],
                            key: "country",
                            type: "select",
                        },
                    ],
                    key: "billingAddress",
                    type: "address",
                },
                {
                    key: "separateDeliveryAddress",
                    optional: "true",
                    type: "boolean",
                    value: "false",
                },
                {
                    details: [
                        {
                            key: "street",
                            type: "text",
                        },
                        {
                            key: "houseNumberOrName",
                            type: "text",
                        },
                        {
                            key: "city",
                            type: "text",
                        },
                        {
                            key: "postalCode",
                            type: "text",
                        },
                        {
                            key: "stateOrProvince",
                            optional: "true",
                            type: "text",
                        },
                        {
                            items: [
                                {
                                    id: "SE",
                                    name: "SWEDEN",
                                },
                                {
                                    id: "NO",
                                    name: "NORWAY",
                                },
                                {
                                    id: "FI",
                                    name: "FINLAND",
                                },
                                {
                                    id: "DK",
                                    name: "DENMARK",
                                },
                                {
                                    id: "AT",
                                    name: "AUSTRIA",
                                },
                                {
                                    id: "DE",
                                    name: "GERMANY",
                                },
                                {
                                    id: "NL",
                                    name: "NETHERLANDS",
                                },
                            ],
                            key: "country",
                            type: "select",
                        },
                    ],
                    key: "deliveryAddress",
                    optional: "true",
                    type: "address",
                },
            ],
            name: "Pay later with Klarna.",
            type: "klarna",
        },
        {
            name: "Multibanco",
            type: "multibanco",
        },
        {
            name: "Russian Online Payments",
            type: "online_RU",
        },
        {
            name: "Invoice",
            type: "openinvoice",
        },
        {
            name: "PayPal",
            type: "paypal",
        },
        {
            name: "Paysafecard",
            type: "paysafecard",
        },
        {
            name: "POLi",
            type: "poli",
        },
        {
            details: [
                {
                    items: [
                        {
                            id: "+7",
                            name: "RU",
                        },
                        {
                            id: "+9955",
                            name: "GE",
                        },
                        {
                            id: "+507",
                            name: "PA",
                        },
                        {
                            id: "+44",
                            name: "GB",
                        },
                        {
                            id: "+992",
                            name: "TJ",
                        },
                        {
                            id: "+370",
                            name: "LT",
                        },
                        {
                            id: "+972",
                            name: "IL",
                        },
                        {
                            id: "+996",
                            name: "KG",
                        },
                        {
                            id: "+380",
                            name: "UA",
                        },
                        {
                            id: "+84",
                            name: "VN",
                        },
                        {
                            id: "+90",
                            name: "TR",
                        },
                        {
                            id: "+994",
                            name: "AZ",
                        },
                        {
                            id: "+374",
                            name: "AM",
                        },
                        {
                            id: "+371",
                            name: "LV",
                        },
                        {
                            id: "+91",
                            name: "IN",
                        },
                        {
                            id: "+66",
                            name: "TH",
                        },
                        {
                            id: "+373",
                            name: "MD",
                        },
                        {
                            id: "+1",
                            name: "US",
                        },
                        {
                            id: "+81",
                            name: "JP",
                        },
                        {
                            id: "+998",
                            name: "UZ",
                        },
                        {
                            id: "+77",
                            name: "KZ",
                        },
                        {
                            id: "+375",
                            name: "BY",
                        },
                        {
                            id: "+372",
                            name: "EE",
                        },
                        {
                            id: "+40",
                            name: "RO",
                        },
                        {
                            id: "+82",
                            name: "KR",
                        },
                    ],
                    key: "qiwiwallet.telephoneNumberPrefix",
                    type: "select",
                },
                {
                    key: "qiwiwallet.telephoneNumber",
                    type: "text",
                },
            ],
            name: "Qiwi Wallet",
            type: "qiwiwallet",
        },
        {
            name: "RatePay Invoice",
            type: "ratepay",
        },
        {
            name: "SafetyPay",
            type: "safetypay",
        },
        {
            details: [
                {
                    key: "sepa.ownerName",
                    type: "text",
                },
                {
                    key: "sepa.ibanNumber",
                    type: "text",
                },
            ],
            name: "SEPA Direct Debit",
            type: "sepadirectdebit",
        },
        {
            name: "Premium SMS",
            type: "sms",
        },
        {
            name: "TenPay",
            type: "tenpay",
        },
        {
            name: "Russian Cash Terminal Payments",
            type: "terminal_RU",
        },
        {
            name: "Trustly Direct bank e-Payments",
            type: "trustly",
        },
        {
            name: "Online Banking by Trustpay",
            type: "trustpay",
        },
        {
            name: "UnionPay",
            type: "unionpay",
        },
        {
            name: "Russian Wallet Payments",
            type: "wallet_RU",
        },
        {
            name: "Webshop Giftcard",
            type: "webshopgiftcard",
        },
        {
            name: "Your Gift",
            type: "yourgift",
        },
    ],
});
//# sourceMappingURL=paymentMethodsSuccess.js.map