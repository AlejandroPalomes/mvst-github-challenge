
export interface BaseRoute {
  route: string;
  to?: (_id: string) => string;
  /**
   * Used in routes to redirect to a specified page
   * @param page
   */
  toPage?: (page: number) => string;
}
