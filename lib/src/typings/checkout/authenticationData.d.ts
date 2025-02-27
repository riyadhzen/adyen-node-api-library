import { ThreeDSRequestData } from './threeDSRequestData';
export declare class AuthenticationData {
    /**
    * Indicates when 3D Secure authentication should be attempted. This overrides all other rules, including [Dynamic 3D Secure settings](https://docs.adyen.com/risk-management/dynamic-3d-secure).  Possible values:  * **always**: Perform 3D Secure authentication. * **never**: Don\'t perform 3D Secure authentication. If PSD2 SCA or other national regulations require authentication, the transaction gets declined. * **preferNo**: Do not perform 3D Secure authentication if not required by PSD2 SCA or other national regulations.
    */
    'attemptAuthentication'?: AuthenticationData.AttemptAuthenticationEnum;
    /**
    * If set to true, you will only perform the [3D Secure 2 authentication](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only), and not the payment authorisation. Default: *false**.
    */
    'authenticationOnly'?: boolean;
    'threeDSRequestData'?: ThreeDSRequestData;
}
export declare namespace AuthenticationData {
    enum AttemptAuthenticationEnum {
        Always,
        Never,
        PreferNo
    }
}
