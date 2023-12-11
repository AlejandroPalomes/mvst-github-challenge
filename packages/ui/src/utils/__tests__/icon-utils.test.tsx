import { Icons } from '../icon-types';
import { getIcon } from '../icon-utils';

describe('icon-utils', () => {
  it('should returns all the icons correctly', () => {
    Icons.forEach(iconName => {
      expect(getIcon(iconName)).toBeDefined();
    });
  });
});
