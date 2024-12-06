
class FetchActivitiesActivitiesUseCase {
    constructor(database) {
       this.database = database
    }

    execute() {
        return this.database.getAll();
    }
}

export default FetchActivitiesActivitiesUseCase;

