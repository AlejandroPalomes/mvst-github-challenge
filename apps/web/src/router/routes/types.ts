
export interface BaseRoute {
  route: string;
  /**
   * Used in routes to redirect to a specified detail page through an id
   * @param page
   */
  to?: (_id: string) => string;
}
