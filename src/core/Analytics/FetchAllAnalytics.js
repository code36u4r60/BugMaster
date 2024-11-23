import { randomUUID } from 'crypto';
import { ActivityDB } from '../../db/ActivityDB.js';

export async function FetchAllAnalytics(req, res) {
    const { activityID } = req.params;

    const activityDB = ActivityDB.getInstance();

    // Validate if activityID is provided
    if (!activityID) {
        return res.status(400).send({ message: 'Activity ID is required.' });
    }

    // Fetch the activity
    const activity = activityDB.get(activityID);
    if (!activity) {
        return res.status(404).send({ message: 'Activity not available.' });
    }


    activity_analytics = {
        id: '12345',
        name: 'Bug Management Exercise',
        bugs_identified: 5,
        classification_accuracy: 85,
        time_spent_per_bug: 10,
        documentation_quality: 'Good',
        access_to_test_environment: true,
    }

    // Build the analytics response based on the document
    const analytics = {
        activityID: `${activityID}`,
        'Inven!RAStdID': `${randomUUID()}`,
        quantAnalytics: [
            { name: 'bugs_identified', type: 'integer', value: activity_analytics.bugs_identified || 0 },
            { name: 'classification_accuracy', type: 'percentage', value: activity_analytics.classification_accuracy || 0 },
            { name: 'time_spent_per_bug', type: 'integer', value: activity_analytics.time_spent_per_bug || 0 },
        ],
        qualAnalytics: [
            { name: 'documentation_quality', type: 'text/plain', value: activity_analytics.documentation_quality || 'Not evaluated' },
            { name: 'access_to_test_environment', type: 'boolean', value: activity_analytics.access_to_test_environment || false },
        ],
    };

    res.status(200).send(analytics);
}
