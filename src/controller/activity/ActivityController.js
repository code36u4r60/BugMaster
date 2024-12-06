import { ActivityDB } from '../../db/ActivityDB.js';
import CreateActivityUseCase from './CreateActivityUseCase.js';
import FetchActivitiesActivitiesUseCase from './FetchActivitiesActivitiesUseCase.js';
import FetchActivityByIDUseCase from './FetchActivityByIDUseCase.js';

class ActivityController {
    constructor() {
        this.activityDB = ActivityDB.getInstance();
    }

    createActivity = (req, res) => {
        const createActivityUseCase = new CreateActivityUseCase(this.activityDB)

        try {
            const activity = createActivityUseCase.execute(req.body);

            res.status(201).json(activity);
        } catch (error) {
            res.status(400).json({ error: error.errors || error.message });
        }
    }

    fetchActivities = (req, res) => {
        const fetchActivitiesActivitiesUseCase = new FetchActivitiesActivitiesUseCase(this.activityDB)

        try {
            const activities = fetchActivitiesActivitiesUseCase.execute();
            res.status(200).json(activities);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    fetchActivityByID = (req, res) => {
        const fetchActivityByIDUseCase = new FetchActivityByIDUseCase(this.activityDB)
        try {
            const { id } = req.params;
            console.log(req.params)
            const activity = fetchActivityByIDUseCase.execute(id);
            res.status(200).json(activity);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

}

export default new ActivityController();
