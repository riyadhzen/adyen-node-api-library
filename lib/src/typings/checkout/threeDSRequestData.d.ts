export declare class ThreeDSRequestData {
    /**
    * Indicates if [native 3D Secure authentication](https://docs.adyen.com/online-payments/3d-secure/native-3ds2) should be used when available.  Possible values: * **preferred**: Use native 3D Secure authentication when available.
    */
    'nativeThreeDS'?: ThreeDSRequestData.NativeThreeDSEnum;
    /**
    * The version of 3D Secure to use.  Possible values:  * **2.1.0** * **2.2.0**
    */
    'threeDSVersion'?: ThreeDSRequestData.ThreeDSVersionEnum;
}
export declare namespace ThreeDSRequestData {
    enum NativeThreeDSEnum {
        Preferred
    }
    enum ThreeDSVersionEnum {
        _10,
        _20
    }
}
