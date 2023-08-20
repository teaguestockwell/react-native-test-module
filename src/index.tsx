import { NativeModules } from 'react-native';

export function multiply(a: number, b: number): Promise<number> {
  return NativeModules.TestModule.multiply(a, b);
}

export const createCalendarEvent = (
  name: string,
  location: string
): Promise<string> => {
  return NativeModules.CalendarModule.createCalendarEvent(name, location);
};
