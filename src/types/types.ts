import { ChangeEvent } from 'react';

export type handlerChange = (e: ChangeEvent<HTMLInputElement>) => void;

export type handler = () => void;

export type handlerString = (value: string) => void;

export type inputTypes = 'text' | 'tel' | 'password' | 'email';

export type Theme = 'light' | 'dark';

export type DataSelect = 'day' | 'month' | 'year';
