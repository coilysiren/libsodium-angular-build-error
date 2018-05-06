import * as _uninitalizedSodiumDoNotUse from "libsodium-wrappers";

export async function readySodium(): Promise<void> {
  await _uninitalizedSodiumDoNotUse.ready;
  const sodium: any = undefined;
}
