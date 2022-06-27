export default interface UnitRepository {
    get(): Promise<UnitModel[]>;
}