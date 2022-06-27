import { UnitModel } from '../../models/Unit';
import { IUnitDataSource } from './UnitDataSource.d';
// class UnitDataSource implements IUnitDataSource {
//     get(): Promise<UnitModel[]> {
//         const sample = [
//             {
//                 "name": "bottle",
//                 "group": "uncountables",
//                 "uuid": "06773af8-7270-4859-871e-c945f9e1e357",
//                 "created_at": "2021-09-02 06:57:46",
//                 "custom": false
//             },
//             {
//                 "name": "m^3",
//                 "group": "volume",
//                 "uuid": "0f61cf2c-6bb2-4ea1-b1ea-5395036a932a",
//                 "created_at": "2022-03-29 16:19:16",
//                 "custom": false
//             },
//             {
//                 "name": "in^2",
//                 "group": "area",
//                 "uuid": "10700cb3-2efc-4861-a6e4-0fac36399117",
//                 "created_at": "2021-09-02 06:57:46",
//                 "custom": false
//             },
//             {
//                 "name": "fl oz",
//                 "group": "volume",
//                 "uuid": "212a2cc4-6c9e-4664-96f4-4b1a16e54007",
//                 "created_at": "2021-09-02 06:57:46",
//                 "custom": false
//             },
//             {
//                 "name": "mg",
//                 "group": "mass",
//                 "uuid": "2168e3c4-ae45-45b6-b45a-fcd40b9cf9cf",
//                 "created_at": "2021-09-02 06:57:46",
//                 "custom": false
//             },
//             {
//                 "name": "sack",
//                 "group": "uncountables",
//                 "uuid": "3a04d010-1f98-4c08-837c-03a25ed91619",
//                 "created_at": "2021-09-02 06:57:46",
//                 "custom": false
//             },
//             {
//                 "name": "sachet",
//                 "group": "uncountables",
//                 "uuid": "43f94741-b0df-441a-adce-3a8b3a16c3a0",
//                 "created_at": "2021-09-02 06:57:46",
//                 "custom": false
//             },
//             {
//                 "name": "ton",
//                 "group": "mass",
//                 "uuid": "46568d9b-fcd2-41ca-bac5-7248c26f1f06",
//                 "created_at": "2021-09-02 06:57:46",
//                 "custom": false
//             },
//             {
//                 "name": "tsp",
//                 "group": "volume",
//                 "uuid": "4c11651b-6eab-4e5e-95d0-d3c3328bbeb8",
//                 "created_at": "2021-09-02 06:57:46",
//                 "custom": false
//             },
//             {
//                 "name": "g",
//                 "group": "mass",
//                 "uuid": "608433a4-f928-40db-9276-5f22fa5b070a",
//                 "created_at": "2021-09-02 06:57:46",
//                 "custom": false
//             },
//             {
//                 "name": "rim",
//                 "group": "uncountables",
//                 "uuid": "60ef689e-ff15-4224-857b-3f8d30348bdb",
//                 "created_at": "2022-01-14 05:30:47",
//                 "custom": false
//             },
//             {
//                 "name": "m",
//                 "group": "length",
//                 "uuid": "6e57c357-de60-4dbc-8ec6-cf85238764b0",
//                 "created_at": "2021-09-02 06:57:46",
//                 "custom": false
//             },
//             {
//                 "name": "in^3",
//                 "group": "volume",
//                 "uuid": "7926b3fb-02b2-4d68-96f8-852f7d094e61",
//                 "created_at": "2021-09-02 06:57:46",
//                 "custom": false
//             },
//             {
//                 "name": "lmbr",
//                 "group": "uncountables",
//                 "uuid": "7e9aa2c7-2d8a-4cc3-8f73-3e731a708787",
//                 "created_at": "2021-12-16 07:18:39",
//                 "custom": false
//             },
//             {
//                 "name": "cm^2",
//                 "group": "area",
//                 "uuid": "83c03aee-aea5-4155-a942-5415f8100bb3",
//                 "created_at": "2021-09-02 06:57:46",
//                 "custom": false
//             },
//             {
//                 "name": "oz",
//                 "group": "mass",
//                 "uuid": "9156c848-d90f-4820-8550-2613d49856db",
//                 "created_at": "2021-09-02 06:57:46",
//                 "custom": false
//             },
//             {
//                 "name": "ltr",
//                 "group": "volume",
//                 "uuid": "98c3a1e0-fae9-428f-a941-a7ba87ab3255",
//                 "created_at": "2021-09-02 06:57:46",
//                 "custom": false
//             },
//             {
//                 "name": "ft",
//                 "group": "length",
//                 "uuid": "9edbb25a-a4d3-4798-9111-f0423382ce61",
//                 "created_at": "2021-09-02 06:57:46",
//                 "custom": false
//             },
//             {
//                 "name": "ft^2",
//                 "group": "area",
//                 "uuid": "a2ec73f6-de5e-4492-b07c-7a12d587f838",
//                 "created_at": "2021-09-02 06:57:46",
//                 "custom": false
//             },
//             {
//                 "name": "roll",
//                 "group": "uncountables",
//                 "uuid": "aec3f815-4f81-4600-bf51-cb39251239b3",
//                 "created_at": "2021-12-16 07:19:01",
//                 "custom": false
//             },
//             {
//                 "name": "cm^3",
//                 "group": "volume",
//                 "uuid": "c605bc34-0b92-46d5-bad9-d59eb82b9f36",
//                 "created_at": "2021-09-02 06:57:46",
//                 "custom": false
//             },
//             {
//                 "name": "in",
//                 "group": "length",
//                 "uuid": "c7c8e19f-1b0e-4ae8-a14b-559460707c0f",
//                 "created_at": "2021-09-02 06:57:46",
//                 "custom": false
//             },
//             {
//                 "name": "pt",
//                 "group": "volume",
//                 "uuid": "cb7de18b-5d14-48cf-9c48-a123cbd71050",
//                 "created_at": "2021-09-02 06:57:46",
//                 "custom": false
//             },
//             {
//                 "name": "cm",
//                 "group": "length",
//                 "uuid": "d17a60ce-5ae0-4245-a0ab-90d703e57486",
//                 "created_at": "2021-09-02 06:57:46",
//                 "custom": false
//             },
//             {
//                 "name": "kg",
//                 "group": "mass",
//                 "uuid": "d853bef3-94d8-4bd4-95ce-52c65dd8e4c5",
//                 "created_at": "2021-09-02 06:57:46",
//                 "custom": false
//             },
//             {
//                 "name": "bundle",
//                 "group": "uncountables",
//                 "uuid": "dbc8f3f5-e3b1-4fe5-93be-a2e7406863bb",
//                 "created_at": "2021-09-23 03:45:22",
//                 "custom": false
//             },
//             {
//                 "name": "cup",
//                 "group": "volume",
//                 "uuid": "de5415da-b7ce-486d-80aa-103861131869",
//                 "created_at": "2021-09-02 06:57:46",
//                 "custom": false
//             },
//             {
//                 "name": "m^2",
//                 "group": "area",
//                 "uuid": "e1659da5-c25e-4209-b275-400616f0ec1f",
//                 "created_at": "2021-09-02 06:57:46",
//                 "custom": false
//             },
//             {
//                 "name": "tbsp",
//                 "group": "volume",
//                 "uuid": "e19dd054-b164-4d1c-aa2c-9e4264cd8400",
//                 "created_at": "2021-09-02 06:57:46",
//                 "custom": false
//             },
//             {
//                 "name": "count",
//                 "group": "uncountables",
//                 "uuid": "e69f7bcc-8497-47e7-856b-6bf494f24c8b",
//                 "created_at": "2021-09-02 06:57:46",
//                 "custom": false
//             },
//             {
//                 "name": "pcs",
//                 "group": "uncountables",
//                 "uuid": "e7789883-5f29-454f-8bdc-f8971f09f307",
//                 "created_at": "2021-09-02 06:57:46",
//                 "custom": false
//             },
//             {
//                 "name": "gal",
//                 "group": "volume",
//                 "uuid": "e87e5401-af1e-49a6-aea7-475db20bfabc",
//                 "created_at": "2021-09-02 06:57:46",
//                 "custom": false
//             },
//             {
//                 "name": "lb",
//                 "group": "mass",
//                 "uuid": "fbc9f67e-ddd0-43cd-b11a-b350be2e5f9d",
//                 "created_at": "2021-09-02 06:57:46",
//                 "custom": false
//             }
//         ]

//         sample.map((item) => {
//             item.custom = false
//             item.created_at = new Date()
//             item.uuid = uuid()
//         })
//     }
// }