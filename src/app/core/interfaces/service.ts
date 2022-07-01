import { IServiceBase } from './service-base';

export interface IService extends IServiceBase {
    _id: string,
}

export const ServiceColumns = [
    {
        key: 'isSelected',
        type: 'isSelected',
        label: '',
    },
    {
        key: 'description',
        type: 'text',
        label: 'Описание',
        required: true,
    },
    {
        key: 'price',
        type: 'text',
        label: 'Цена (лв.)',
    },
    {
        key: 'isEdit',
        type: 'isEdit',
        label: '',
    },
]