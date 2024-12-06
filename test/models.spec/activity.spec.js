import Activity from '../../src/model/Activity';

import { ZodError } from 'zod';

describe('Activity Class', () => {
    const validData = {
        activity_name: 'Sample Activity',
        bug_scenario: 'Sample Bug Scenario',
        description: 'Sample Description',
        severity_levels: ['low', 'medium'],
        priority_levels: ['low', 'medium'],
        test_params: ['param1', 'param2'],
    };

    test('should create an Activity instance with valid data', () => {
        const activity = new Activity(validData);
        expect(activity).toBeInstanceOf(Activity);
        expect(activity.activity_name).toBe(validData.activity_name);
        expect(activity.bug_scenario).toBe(validData.bug_scenario);
        expect(activity.description).toBe(validData.description);
        expect(activity.severity_levels).toEqual(validData.severity_levels);
        expect(activity.priority_levels).toEqual(validData.priority_levels);
        expect(activity.test_params).toEqual(validData.test_params);
    });

    test('should create an Activity instance with default test_params when not provided', () => {
        const { test_params, ...dataWithoutTestParams } = validData;
        const activity = new Activity(dataWithoutTestParams);
        expect(activity.test_params).toEqual([]);
    });

    test('should throw an error if activity_name is missing', () => {
        const invalidData = { ...validData };
        delete invalidData.activity_name;

        expect(() => new Activity(invalidData)).toThrow(ZodError);
        expect(() => new Activity(invalidData)).toThrow("Activity name is required.");
    });

    test('should throw an error if bug_scenario is not a string', () => {
        const invalidData = { ...validData, bug_scenario: 123 };

        expect(() => new Activity(invalidData)).toThrow(ZodError);
        expect(() => new Activity(invalidData)).toThrow("Bug scenario must be a string");
    });

    test('should throw an error if severity_levels is empty', () => {
        const invalidData = { ...validData, severity_levels: [] };

        expect(() => new Activity(invalidData)).toThrow(ZodError);
        expect(() => new Activity(invalidData)).toThrow("Severity levels are required.");
    });

    test('should throw an error if priority_levels contain invalid values', () => {
        const invalidData = { ...validData, priority_levels: ['invalid'] };

        expect(() => new Activity(invalidData)).toThrow(ZodError);
    });

    test('should throw an error if test_params is not an array of strings', () => {
        const invalidData = { ...validData, test_params: [123, 'valid'] };

        expect(() => new Activity(invalidData)).toThrow(ZodError);
    });
});
