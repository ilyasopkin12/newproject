export type SlotTimeInput = Date | string | number | null | undefined

export function formatSlotLabels(startTime: SlotTimeInput, endTime: SlotTimeInput): {
  startLabel: string | null
  endLabel: string
} {
  const endLabel =
    endTime != null ? new Date(endTime).toLocaleTimeString("ru-RU") : ""

  const startLabel =
    startTime != null
      ? new Date(startTime).toLocaleString("ru-RU", {
          dateStyle: "medium",
          timeStyle: "short",
        })
      : null

  return { startLabel, endLabel }
}