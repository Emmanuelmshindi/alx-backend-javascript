export default function guardrail(mathFunction) {
  const queue = []
  try {
    const result = mathFunction();
    queue.push(result, "Guardrail was processed");
  } catch (e) {
    queue.push(e.message, "Guardrail was processed");
  }
  return queue;
}
