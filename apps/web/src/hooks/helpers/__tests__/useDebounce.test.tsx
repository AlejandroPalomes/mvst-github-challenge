import { useDebounce } from '../useDebounce.ts';
import { sleep } from '../../../utils/testing/testHelper.tsx';
import { renderHook } from '@testing-library/react';

const CUSTOM_MS = 800;
const DEFAULT_MS = 500;

const mockedCallback = {
  debouncedCall: (value: string) => { value },
}

vi.spyOn(mockedCallback, 'debouncedCall');
vi.spyOn(window, 'clearTimeout');

describe('useDebounce', () => {

  afterEach(() => {
    vi.clearAllMocks();
  })

  it('should useDebounce', () => {
    const { result: { current } } = renderHook(() => useDebounce(() => {}));

    expect(current).toBeTypeOf('function');
  });

  it('should debounce callback with default ms', async () => {
    const { result: { current } } = renderHook(() => useDebounce(mockedCallback.debouncedCall));
    current();
    expect(mockedCallback.debouncedCall).not.toHaveBeenCalled();
    await sleep(DEFAULT_MS);
    expect(mockedCallback.debouncedCall).toHaveBeenCalled();
  });

  it('should debounce callback with custom ms', async () => {
    const { result: { current } } = renderHook(() => useDebounce(mockedCallback.debouncedCall, CUSTOM_MS));
    current();
    await sleep(DEFAULT_MS)
    expect(mockedCallback.debouncedCall).not.toHaveBeenCalled();
    await sleep(300);
    expect(mockedCallback.debouncedCall).toHaveBeenCalled();
  });

  it('should restart debounce when callback is invoked before debounce time', async () => {
    const { result: { current } } = renderHook(() => useDebounce(mockedCallback.debouncedCall, CUSTOM_MS));
    current('one');
    expect(window.clearTimeout).toHaveBeenCalledOnce();
    current('two');
    expect(window.clearTimeout).toHaveBeenCalledTimes(2);
  });
})