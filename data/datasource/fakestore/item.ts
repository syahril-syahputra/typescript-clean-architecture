import useFetch from "../../../composible/useFetch";
import GroupItems from "../../models/GroupItem";
import Item from "../../models/Item";

class fakestore {
    public async get(): Promise<Item[]> {

        const data: Item[] = []
        data.push(new Item("xxx-xxx-xxx", "bootler", 12, new GroupItems("xxx-xxx", "Peralatan")))
        data.push(new Item("xxx-xxx-xxx", "Bootle", 12, new GroupItems("xxx-xxx", "Peralatan")))
        data.push(new Item("xxx-xxx-xxx", "Bootle", 12, new GroupItems("xxx-xxx", "Peralatan")))
        data.push(new Item("xxx-xxx-xxx", "Bootle", 12, new GroupItems("xxx-xxx", "Peralatan")))
        data.push(new Item("xxx-xxx-xxx", "Bootle", 12, new GroupItems("xxx-xxx", "Peralatan")))
        data.push(new Item("xxx-xxx-xxx", "Bootle", 12, new GroupItems("xxx-xxx", "Peralatan")))
        data.push(new Item("xxx-xxx-xxx", "Bootle", 12, new GroupItems("xxx-xxx", "Peralatan")))
        data.push(new Item("xxx-xxx-xxx", "Bootle", 12, new GroupItems("xxx-xxx", "Peralatan")))
        return data
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
export default fakestore