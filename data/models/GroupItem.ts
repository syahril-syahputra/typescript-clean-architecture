interface IGroupItems {
    uuid: string,
    name: string,
}

class GroupItems implements IGroupItems {
    private _uuid: string;
    private _name: string;

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


    constructor(_uuid: string, _name: string) {
        this._uuid = _uuid
        this._name = _name
    }



}

export default GroupItems