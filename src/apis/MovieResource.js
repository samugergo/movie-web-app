import { Resource } from './Resource';

export class MovieResource extends Resource {
  constructor() {
    super(
      import.meta.env.VITE_MOVIE_DB_BASE_URL, 
      import.meta.env.VITE_MOVIE_DB_API_KEY
    );
  }

  async doApiCall(endpoint, params) {
    const commonParams = [
      { key: 'lang', value: import.meta.env.LANG },
      { key: 'region', value: import.meta.env.REGION }
    ];
    return await super.doApiCall(endpoint, [...params, ...commonParams]);
  }
}