import useFetch from "../../../composible/useFetch";
import GroupItems from "../../models/GroupItem";
import Item from "../../models/Item";

class ServerStoreItem {
    public async get(): Promise<void> {
        const data = await useFetch('http://api.lucy.test/inventory/units', {
            withCredentials: true,
            credentials: 'include',
            headers: {
                'Authorization': "2187|eC6nSRMTIDwRw2b1qiHhWJ2DkkSiVIUXNYRe3uxX",
                'Content-Type': 'application/json'
            }
        })
    }

    public async update(item: Item): Promise<Item> {
        return item
    }

    public async delete(item: Item): Promise<boolean> {
        return false
    }
    public async detail(uuid: string): Promise<Item> {
        const groupexample = new GroupItems("xxx-xxx", "Peralatan")
        const example = new Item("xxx-xxx-xxx", "Bootle", 12, groupexample)
        return example
    }
    public async add(item: Item): Promise<Item> {
        return item
    }
}
export default ServerStoreItem