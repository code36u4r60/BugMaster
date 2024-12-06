import { z } from 'zod';

const ActivitySchema = z.object({
    id: z.string().uuid(),
    createdAt: z.string().datetime(),
    activity_name: z.string({
        required_error: "Activity name is required.",
        invalid_type_error: "Activity name must be a string",
    }),
    bug_scenario: z.string({
        required_error: "Bug scenario is required.",
        invalid_type_error: "Bug scenario must be a string",
    }),
    description: z.string({
        required_error: "Description is required.",
        invalid_type_error: "Description must be a string",
    }),
    severity_levels: z
        .array(z.enum(['low', 'medium', 'high', 'critical']))
        .nonempty("Severity levels are required."),
    priority_levels: z
        .array(z.enum(['low', 'medium', 'high']))
        .nonempty("Priority levels are required."),
    test_params: z.array(z.string()).optional(),
});

class Activity {
    constructor(data) {
        const parsedData = ActivitySchema.parse(data);
        this.id = parsedData.id;
        this.createdAt = parsedData.createdAt;
        this.activity_name = parsedData.activity_name;
        this.bug_scenario = parsedData.bug_scenario;
        this.description = parsedData.description;
        this.severity_levels = parsedData.severity_levels;
        this.priority_levels = parsedData.priority_levels;
        this.test_params = parsedData.test_params || [];
    }
}



export default Activity;
