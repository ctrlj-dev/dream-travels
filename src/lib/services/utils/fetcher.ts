import { API_URL, FailedToFetchError } from '@/lib/constants';

class Fetcher {
  private async request<T>(method: string, url: string, body?: any): Promise<T> {
    const response = await fetch(`${API_URL}${url}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      throw new Error(FailedToFetchError);
    }

    const data: T = await response.json();
    return data;
  }

  get<T>(url: string): Promise<T> {
    return this.request<T>('GET', url);
  }

  post<T>(url: string, body: any): Promise<T> {
    return this.request<T>('POST', url, body);
  }

  put<T>(url: string, body: any): Promise<T> {
    return this.request<T>('PUT', url, body);
  }

  delete<T>(url: string, body?: any): Promise<T> {
    return this.request<T>('DELETE', url, body);
  }

  patch<T>(url: string, body: any): Promise<T> {
    return this.request<T>('PATCH', url, body);
  }
}

export default new Fetcher();
