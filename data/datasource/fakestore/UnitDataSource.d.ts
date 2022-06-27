import { UnitModel } from './../../models/Unit';
export interface IUnitDataSource {
    get(): Promise<UnitModel[]>;
}