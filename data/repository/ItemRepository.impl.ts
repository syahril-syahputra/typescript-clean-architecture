import ItemRepository from "../../domain/repository/ItemRepository";
import fakestore from "../datasource/fakestore/item";
import Item from "../models/Item";

class ItemRepositoryImpl implements ItemRepository{



    public async get(): Promise<Item[]> {
        const fakeStore = new fakestore()
        return await fakeStore.get()
    }
}
export default ItemRepositoryImpl