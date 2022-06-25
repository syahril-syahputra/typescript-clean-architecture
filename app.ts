import ItemRepositoryImpl from "./data/repository/ItemRepository.impl";


async function show()
{
    const dataItem = new ItemRepositoryImpl()
    console.log(await dataItem.getAll())
}
show()
