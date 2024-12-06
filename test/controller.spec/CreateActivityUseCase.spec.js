import CreateActivityUseCase from '../../src/controller/activity/CreateActivityUseCase';
import Activity from '../../src/model/Activity';

describe('CreateActivityUseCase Integration', () => {
    const validData = {
        activity_name: 'Sample Activity',
        bug_scenario: 'Sample Bug Scenario',
        description: 'Sample Description',
        severity_levels: ['low', 'medium'],
        priority_levels: ['low', 'medium'],
        test_params: ['param1', 'param2'],
    };

    let createActivityUseCase;

    beforeEach(() => {
        createActivityUseCase = new CreateActivityUseCase();
    });

    test('should create a valid Activity instance with correct data', () => {
        const result = createActivityUseCase.execute(validData);

        expect(result).toBeInstanceOf(Activity);
        expect(result.activity_name).toBe(validData.activity_name);
        expect(result.bug_scenario).toBe(validData.bug_scenario);
        expect(result.description).toBe(validData.description);
        expect(result.severity_levels).toEqual(validData.severity_levels);
        expect(result.priority_levels).toEqual(validData.priority_levels);
        expect(result.test_params).toEqual(validData.test_params);
    });

    test('should throw an error if required fields are missing', () => {
        const invalidData = { ...validData };
        delete invalidData.activity_name;

        expect(() => createActivityUseCase.execute(invalidData)).toThrowError(
            'Activity name is required.'
        );
    });

    test('should throw an error if severity_levels is empty', () => {
        const invalidData = { ...validData, severity_levels: [] };

        expect(() => createActivityUseCase.execute(invalidData)).toThrowError(
            'Severity levels are required.'
        );
    });

    test('should handle optional test_params field correctly', () => {
        const dataWithoutTestParams = { ...validData };
        delete dataWithoutTestParams.test_params;

        const result = createActivityUseCase.execute(dataWithoutTestParams);

        expect(result).toBeInstanceOf(Activity);
        expect(result.test_params).toEqual([]);
    });
});

