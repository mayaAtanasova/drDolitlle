export interface IAd {
    _id: string,
    category: string,
    description: string,
    contactPhone: string,
    contactEmail?: string,
    contactName?: string,
    owner: string,
    adImage?: string,
    createdAt: Date,
    updatedAt: Date
}