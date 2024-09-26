///<reference types='react/canary' />;

import { Button } from '../Button';

export const Popover = () => {
  return (
    <>
      <Button popoverTarget='popover'>Open</Button>
      <div id='popover' popover='auto'></div>
    </>
  );
};
