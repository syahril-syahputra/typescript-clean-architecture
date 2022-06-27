import Item from "../../data/models/Item";

export default interface ItemRepository{
    // add : (item : Item) => Promise<Item>
    // update : (item : Item) => Promise<Item>
    // delete : (item : Item) => Promise<boolean>
    // detail : (uuid : string) => Promise<Item>
    get : () => Promise<Item[]>
}