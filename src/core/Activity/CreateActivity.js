import { ActivityDB } from '../../db/ActivityDB.js';

export async function CreateActivity(req, res) {
    const { activityID } = req.body;

    // Verifique se o req.body foi corretamente interpretado
    if (!activityID) {
        return res.status(400).send({ message: "It's required an activity id." });
    }

    const activityDB = ActivityDB.getInstance();

    // Verifique se a atividade já existe
    if (activityDB.get(activityID)) {
        return res.status(400).send({ message: "Activity already exists." });
    }

    // Cria a nova atividade
    activityDB.create({
        id: activityID,
        name: 'Bug Management Exercise',
        bugs_identified: 5,
        classification_accuracy: 85,
        time_spent_per_bug: 10,
        documentation_quality: 'Good',
        access_to_test_environment: true,
    });


    // Retorna o URL da atividade criada
    res.status(200).send({
        deployURL: `${req.headers.host}/fetch-activity/${activityID}`,
    });
}
