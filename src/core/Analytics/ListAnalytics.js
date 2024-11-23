export function ListAnalytics(req, res) {
    const params = {
        quantAnalytics: [
            { name: "bugs_identified", type: "integer" },
            { name: "classification_accuracy", type: "percentage" },
            { name: "time_spent_per_bug", type: "integer" }
        ],
        qualAnalytics: [
            { name: "documentation_quality", type: "text/plain" },
            { name: "access_to_test_environment", type: "boolean" }
        ]
    };
    res.json(params)
}