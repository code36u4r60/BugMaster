export function GetActivityParams(req, res) {
    const params = [
        { name: "activity_name", type: "text/plain", description: "Nome da atividade configurada." },
        { name: "bug_scenario", type: "text/plain", description: "Descrição do cenário de bugs a ser analisado." },
        { name: "description", type: "text/plain", description: "Descrição geral da atividade." },
        { name: "severity_levels", type: "array[text/plain]", description: "Lista de níveis de severidade configuráveis." },
        { name: "priority_levels", type: "array[text/plain]", description: "Lista de níveis de prioridade configuráveis." },
        { name: "test_params", type: "array[text/plain]", description: "Parâmetros de teste específicos da atividade." }
      ];
    res.json(params)
  }