export class Resource {
  constructor(baseUrl, apiKey) {
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
  }

  async doApiCall(endPoint, parameters) {
    const url = this.createUrl(endPoint, parameters);
    try {
      const response = await fetch(url);
      return response.json();
    } catch (e) {
      print(e);
    }
  }

  createUrl(endpoint, params) {
    if (params.lenght) {
      const paramsString = params
        .map((p) => p.toString())
        .reduce((value, element) => `${value}&${element}`);
      return `${this.baseUrl}/${endpoint}?${paramsString}&api_key=${this.apiKey}`;
    }
    return `${this.baseUrl}/${endpoint}?api_key=${this.apiKey}`;
  }
}