export function generatePayload(data: { [key: string]: unknown }): {
  [key: string]: unknown;
} {
  const dataObj: { [key: string]: unknown } = {};

  for (const key in data) {
    if (key.startsWith('regula') || key === 'file_upload') continue;
    dataObj[key] = data[key];
  }

  return dataObj;
}
