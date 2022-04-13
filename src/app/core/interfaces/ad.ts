import { IAdBase } from "./ad-base";

export interface IAd extends IAdBase{
    _id: string,
    createdAt: Date,
    updatedAt: Date
}