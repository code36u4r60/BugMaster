class FetchActivityByIDUseCase {
    
    constructor(database) {
        this.database = database
    }


    execute(id) {
        const activity = this.database.get(id);
        if (!activity) {
            throw new Error(`Activity with ID ${id} not found.`);
        }
        return activity;
    }
}

export default FetchActivityByIDUseCase;
