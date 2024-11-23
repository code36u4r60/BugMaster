import { randomUUID } from 'crypto';
import { ActivityDB } from '../../db/ActivityDB.js';

export async function FetchActivity(req, res) {
  const { activityID } = req.params;

  // Validate if activityID is provided
  if (!activityID) {
    return res.status(400).send({ message: 'Activity ID is required.' });
  }

  const activityDB = ActivityDB.getInstance();

  // Fetch the activity
  const activity = activityDB.get(activityID);
  if (!activity) {
    return res.status(404).send({ message: 'Activity not found.' });
  }

  // Prepare the response as per the document
  const response = {
    activityID: `${activityID}`,
    'Inven!RAStdID': `${randomUUID()}`,
    json_params: {
      activity_name: activity.name || 'Default Activity Name',
      bug_scenario: activity.bug_scenario || 'Default Bug Scenario',
      description: activity.description || 'Default Description',
      severity_levels: activity.severity_levels || ['low', 'medium', 'high', 'critical'],
      priority_levels: activity.priority_levels || ['low', 'medium', 'high'],
      test_params: activity.test_params || ['test_1', 'test_2', 'test_3'],
    }
  };

  res.json(response);
}
