import type React from 'react';
import type { TabsTriggerProps as RadixTabsTriggerProps } from '@radix-ui/react-tabs';

export interface TriggerProps extends Omit<RadixTabsTriggerProps, 'disabled'> {
  /**
   * The value of the tab.
   */
  value: string;
  /**
   * Content of the tab.
   */
  children: React.ReactNode;
}
