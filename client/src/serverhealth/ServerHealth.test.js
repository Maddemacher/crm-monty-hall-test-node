import React from 'react';
import axios from 'axios';
import { render, waitForDomChange } from '@testing-library/react';

import ServerHealth from './ServerHealth';

jest.useFakeTimers();

describe('<ServerHealth />', () => {
  let getMock;

  beforeEach(() => {
    getMock = jest.fn(() => ({ status: 200 }));
    jest.spyOn(axios, 'get').mockImplementation(getMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should request searver health on mount', () => {
    render(<ServerHealth />);

    expect(getMock).toHaveBeenCalledWith('/health');
  });

  it('should set server health to UP on 200 from /health', async () => {
    const { getByTestId } = render(<ServerHealth />);

    await waitForDomChange();

    expect(getMock).toHaveBeenCalledWith('/health');
    expect(getByTestId('serverHealth').textContent).toBe('UP');
  });

  it('should set server health to DOWN on not 200 from /health', async () => {
    getMock.mockResolvedValue({ status: 400 });

    const { getByTestId } = render(<ServerHealth />);

    await waitForDomChange();

    expect(getMock).toHaveBeenCalledWith('/health');
    expect(getByTestId('serverHealth').textContent).toBe('DOWN');
  });

  it('should set server health to DOWN on not error from /health', async () => {
    getMock.mockRejectedValue();

    const { getByTestId } = render(<ServerHealth />);

    await waitForDomChange();

    expect(getMock).toHaveBeenCalledWith('/health');
    expect(getByTestId('serverHealth').textContent).toBe('DOWN');
  });

  it('should setup interval timer on mount', async () => {
    render(<ServerHealth />);

    expect(setInterval).toHaveBeenCalledTimes(1);
    expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 3000);

    jest.advanceTimersByTime(3000);

    expect(getMock).toHaveBeenCalledTimes(2);
    expect(getMock).toHaveBeenCalledWith('/health');
  });
});
