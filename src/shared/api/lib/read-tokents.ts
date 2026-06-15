import type { LoginTokensBody } from "../types";

export function readAccessToken(body: unknown): string {
  if (!body || typeof body !== 'object') {
    throw new Error('Некорректный ответ сервера');
  }
  const o = body as LoginTokensBody;
  const access = o.accessToken ?? o.access_token;
  if (!access || typeof access !== 'string') {
    throw new Error('В ответе нет access-токена');
  }
  return access;
}

export function readLoginTokens(body: unknown): { access: string; refresh?: string } {
  const o = body as LoginTokensBody;
  const access = readAccessToken(body);
  const refresh = o.refreshToken ?? o.refresh_token;
  return {
    access,
    ...(typeof refresh === 'string' ? { refresh } : {}),
  };
}
