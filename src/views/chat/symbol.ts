import { provideKeyFactory } from '@/utils';

const generateKey = provideKeyFactory('Chat');

export const SESSION_SYMBOL = generateKey('SESSION');
export const AUTO_SCROLL_TO_BOTTOM = generateKey('AUTO_SCROLL_TO_BOTTOM');