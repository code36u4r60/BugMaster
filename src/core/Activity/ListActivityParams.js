export function GetActivityParams(req, res) {
 
  const ALLOWED_VALUES = {
    severity_levels: ['low', 'medium', 'high', 'critical'],
    priority_levels: ['low', 'medium', 'high'],
  };

  const params = [
    {
      name: "activity_name",
      type: "text/plain",
      description: "Nome da atividade configurada."
    },
    {
      name: "bug_scenario",
      type: "text/plain",
      description: "Descrição do cenário de bugs a ser analisado."
    },
    {
      name: "description",
      type: "text/plain",
      description: "Descrição geral da atividade."
    },
    {
      name: "severity_levels",
      type: "array[text/plain]",
      description: "Lista de níveis de severidade configuráveis.",
      allowed_values: ALLOWED_VALUES.severity_levels
    },
    {
      name: "priority_levels",
      type: "array[text/plain]",
      description: "Lista de níveis de prioridade configuráveis.",
      allowed_values: ALLOWED_VALUES.priority_levels
    },
    {
      name: "test_params",
      type: "array[text/plain]",
      description: "Parâmetros de teste específicos da atividade."
    }
  ];

  res.json(params);
}
