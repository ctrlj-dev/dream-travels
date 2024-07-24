export interface ServerConfig {
  apiBaseUrl?: string;
  mediaUrl?: string;
}

export interface AppConfig {
  server: ServerConfig | null;
}
