import { fetch } from '@tauri-apps/plugin-http'
import type { ResponseData } from '@/lib/schema'

export async function sendRequest(
  httpMethod: string,
  requestUrl: string,
): Promise<ResponseData> {
  const response: Response = await fetch(
    requestUrl,
    {
      method: httpMethod,
    },
  )
  const responseBody = await response.text()
  const responseHeaders = Object.fromEntries(response.headers.entries())
  return {
    body: responseBody,
    headers: responseHeaders,
  }
}
