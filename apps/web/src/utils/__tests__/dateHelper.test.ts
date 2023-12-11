import { DateHelper } from "../dateHelper.ts";

describe('dateHelper test', () => {
  it('should create with a date string', async () => {
    const dateHelper = DateHelper.fromString('2023-12-10');
    expect(dateHelper).toBeDefined();
  });

  it('should return a formatted date', async () => {
    const dateHelper = DateHelper.fromString('2023-12-10');
    expect(dateHelper.format('MMM DD, YYYY')).toBe('Dec 10, 2023');
  });
})