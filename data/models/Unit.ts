interface IUnit {
    name: string,
    group: string
    uuid: string,
    created_at: Date,
    custom: boolean
}

export class UnitModel implements IUnit {
    private _name: string
    public get name(): string {
        return this._name
    }
    public set name(value: string) {
        this._name = value
    }
    private _group: string
    public get group(): string {
        return this._group
    }
    public set group(value: string) {
        this._group = value
    }
    private _uuid: string
    public get uuid(): string {
        return this._uuid
    }
    public set uuid(value: string) {
        this._uuid = value
    }
    private _created_at: Date
    public get created_at(): Date {
        return this._created_at
    }
    public set created_at(value: Date) {
        this._created_at = value
    }
    private _custom: boolean
    public get custom(): boolean {
        return this._custom
    }
    public set custom(value: boolean) {
        this._custom = value
    }

    constructor(
        _name: string,
        _group: string,
        _uuid: string,
        _created_at: Date,
        _custom: boolean
    ) {
        this._name = _name
        this._group = _group
        this._uuid = _uuid
        this._created_at = _created_at
        this._custom = _custom
    }


}