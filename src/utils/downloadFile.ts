export function downloadFile(filename: string, blob: string) {
  const link = document.createElement('a');
  link.href = blob;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
