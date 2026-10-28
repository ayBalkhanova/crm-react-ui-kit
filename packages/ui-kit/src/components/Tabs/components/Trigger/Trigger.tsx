import React, { forwardRef } from 'react';
import { Trigger as RadixTabsTrigger } from '@radix-ui/react-tabs';
import cx from 'classnames';

import { type TriggerProps } from './Trigger.props';

import s from './Trigger.module.css';

type El = HTMLButtonElement;

export const Trigger = forwardRef<El, TriggerProps>((props, ref) => {
  const { className, children, ...rest } = props;

  return (
    <RadixTabsTrigger
      ref={ref}
      className={cx(s.trigger, className)}
      {...rest}
      /**
       * The mockup has no disabled tab, so `disabled` is omitted from the
       * props and also overridden here in case it comes past the types.
       */
      disabled={false}
    >
      {children}
    </RadixTabsTrigger>
  );
});

Trigger.displayName = 'Tabs.Trigger';
