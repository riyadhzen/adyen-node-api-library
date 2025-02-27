/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
export * from './address';
export * from './amount';
export * from './bankAccount';
export * from './card';
export * from './disableRequest';
export * from './disableResult';
export * from './name';
export * from './notifyShopperRequest';
export * from './notifyShopperResult';
export * from './recurring';
export * from './recurringDetail';
export * from './recurringDetailsRequest';
export * from './recurringDetailsResult';
export * from './scheduleAccountUpdaterRequest';
export * from './scheduleAccountUpdaterResult';
export * from './serviceError';
export * from './recurringDetailContainer';
import * as fs from 'fs';
export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    };
}
export declare type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;
export declare class ObjectSerializer {
    static findCorrectType(data: any, expectedType: string): any;
    static serialize(data: any, type: string): any;
    static deserialize(data: any, type: string): any;
}
