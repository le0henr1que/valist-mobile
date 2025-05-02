export const formatDate = (date: string | Date): string => {
  if (!date) return "Sem data";

  const parsedDate = typeof date === "string" ? new Date(date) : date;

  const day = parsedDate?.getDate()?.toString()?.padStart(2, "0");
  const month = (parsedDate?.getMonth() + 1)?.toString()?.padStart(2, "0");
  const year = parsedDate?.getFullYear();
  return `${day}/${month}/${year}`;
};
