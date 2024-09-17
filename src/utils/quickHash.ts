export async function quickHash(file: File): Promise<string> {
  const arrayBuffer = await file.arrayBuffer();
  const hash = await crypto.subtle.digest("SHA-256", arrayBuffer);
  const hashArray = Array.from(new Uint8Array(hash));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return hashHex;
}
