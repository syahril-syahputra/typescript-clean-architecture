import fakestore from "../datasource/fakestore/item";
import Item from "../models/Item";

class ItemRepositoryImpl {

    public async getAll(): Promise<Item[]> {
        const fakeStore = new fakestore()
        return await fakeStore.get()
    }
}
export default ItemRepositoryImpl