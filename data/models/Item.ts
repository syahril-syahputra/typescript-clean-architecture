import GroupItem from './GroupItem';

interface IItems {
    uuid: string;
    name: string;
    quantity: number;
    group: GroupItem;
}

class Item implements IItems {
    private _uuid: string;
    private _name: string;
    private _quantity: number;
    private _group: GroupItem;

    public get uuid(): string {
        return this._uuid;
    }

    public set uuid(uuid: string) {
        this._uuid = uuid;
    }


    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get quantity(): number {
        return this._quantity;
    }

    public set quantity(quantity: number) {
        this._quantity = quantity;
    }

    public get group(): GroupItem {
        return this._group;
    }

    public set group(group: GroupItem) {
        this._group = group;
    }

    constructor(
        _uuid: string,
        _name: string,
        _quantity: number,
        _group: GroupItem
    ) {
        this._uuid = _uuid
        this._name = _name
        this._quantity = _quantity
        this._group = _group
    }
}
export default Item;