import { v4 as uuidv4 } from 'uuid';
import Activity from './Activity.js';


class ActivityFactory {
    static createActivity(data) {
        const id = uuidv4();
        const createdAt = new Date().toISOString();
        const activityData = { id, createdAt, ...data };
        return new Activity(activityData)
    }
}

export default ActivityFactory;