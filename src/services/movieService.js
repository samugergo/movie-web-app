import { MovieResource } from "@/resources/MovieResource";

const resource = new MovieResource();

export async function get(page, type, order) {
  const response = await resource.doApiCall(
    `${type}/${order}`, 
    [{ key: 'page', value: page + 1 }]
  );

  return response.results;
}