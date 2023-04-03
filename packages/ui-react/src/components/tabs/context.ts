import { createContext } from 'react';

export type TContext = 'pane' | 'page' | 'section';
export const context = createContext<TContext>('pane');
