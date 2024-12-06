import ActivityFactory from '../../model/ActivityFactory.js';


class CreateActivityUseCase {
    constructor(database) {
        this.database = database
    }

    execute(data) {
        const activity = ActivityFactory.createActivity(data);
        this.database.create(activity);
        return activity;
    }
}

export default CreateActivityUseCase;
