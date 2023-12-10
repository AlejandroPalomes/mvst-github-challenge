import dayjs, { Dayjs } from 'dayjs';

/**
 * DateHelper, to format dates using Day.js
 */
export class DateHelper {
  private date: Dayjs;

  private constructor(newDate: Dayjs) {
    this.date = newDate;
  }

  static fromString(stringDate: string): DateHelper {
    return new DateHelper(dayjs(stringDate));
  }

  format(format: string) {
    return this.date.format(format);
  }
}