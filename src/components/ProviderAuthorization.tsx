import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
export const ProviderAuthorization = ({ children }: {children: ReactNode}) => {
  return (
    <Provider store={store}>{children}</Provider>
  )
}

