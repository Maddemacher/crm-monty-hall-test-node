import React from 'react';
import axios from 'axios';
import { render, fireEvent } from '@testing-library/react';

import ServerHealth from './serverhealth/ServerHealth';
import App from './App';

jest.mock('./serverhealth/ServerHealth');

describe('<App />', () => {
  let getMock;

  beforeEach(() => {
    getMock = jest.fn();
    jest.spyOn(axios, 'get').mockImplementation(getMock);

    ServerHealth.mockReturnValue(null);
  });

  it('should send simulation request default values', async () => {
    getMock.mockResolvedValue({ data: {} });

    const { getByText } = render(<App />);

    fireEvent.submit(getByText('Simulera'));
    expect(getMock).toHaveBeenCalledWith(`/simulate?games=100&changing=false&doors=3`);
  });

  it('should update games and send simulation request with updated value', () => {
    getMock.mockResolvedValue({ data: {} });

    const { getByText, getByLabelText } = render(<App />);

    fireEvent.input(getByLabelText('Games'), { target: { value: 1337 } });

    fireEvent.submit(getByText('Simulera'));
    expect(getMock).toHaveBeenCalledWith(`/simulate?games=1337&changing=false&doors=3`);
  });

  it('should update doors and send simulation request with updated value', () => {
    getMock.mockResolvedValue({ data: {} });

    const { getByText, getByLabelText } = render(<App />);

    fireEvent.input(getByLabelText('Doors'), { target: { value: 1337 } });

    fireEvent.submit(getByText('Simulera'));
    expect(getMock).toHaveBeenCalledWith(`/simulate?games=100&changing=false&doors=1337`);
  });

  it('should not send request when games is to low', () => {
    getMock.mockResolvedValue({ data: {} });

    const { getByText, getByLabelText } = render(<App />);

    fireEvent.input(getByLabelText('Games'), { target: { value: 0 } });

    fireEvent.submit(getByText('Simulera'));
    expect(getMock).not.toHaveBeenCalled();
  });

  it('should not send request when doors is to low', () => {
    getMock.mockResolvedValue({ data: {} });

    const { getByText, getByLabelText } = render(<App />);

    fireEvent.input(getByLabelText('Doors'), { target: { value: 0 } });

    fireEvent.submit(getByText('Simulera'));
    expect(getMock).not.toHaveBeenCalled();
  });

  it('should update changing to yes and send simulation request with updated value', () => {
    getMock.mockResolvedValue({ data: {} });

    const { getByText, getByLabelText } = render(<App />);

    fireEvent.click(getByLabelText('Yes'));

    fireEvent.submit(getByText('Simulera'));
    expect(getMock).toHaveBeenCalledWith(`/simulate?games=100&changing=true&doors=3`);
  });

  it('should update changing to no and send simulation request with updated value', () => {
    getMock.mockResolvedValue({ data: {} });

    const { getByText, getByLabelText } = render(<App />);

    fireEvent.click(getByLabelText('No'));

    fireEvent.submit(getByText('Simulera'));
    expect(getMock).toHaveBeenCalledWith(`/simulate?games=100&changing=false&doors=3`);
  });
});
