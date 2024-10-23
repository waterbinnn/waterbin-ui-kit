import {
  Button,
  Popover,
  PopoverContent,
  PopoverContentProps,
  PopoverHandler,
} from '@/components';
import { Meta } from '@storybook/react';

import { grid } from 'styled-system/patterns';

const meta: Meta<typeof Popover> = {
  title: 'Molecules/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Popover 컴포넌트는 특정 핸들러를 클릭할 때 작은 오버레이로 보조 정보를 표시하는 기능을 제공합니다.',
      },
    },
  },
  tags: ['autodocs'],
};

export const DefaultPopover = (args: PopoverContentProps) => (
  <Popover>
    <PopoverHandler>
      <Button>POPOVER</Button>
    </PopoverHandler>
    <PopoverContent {...args}>
      <Button variant='outline' size='sm'>
        팝팝 팝오버를 오픈팝
      </Button>
    </PopoverContent>
  </Popover>
);

DefaultPopover.argTypes = {
  placement: {
    control: 'select',
    options: [
      'top',
      'top-start',
      'top-end',
      'right',
      'right-start',
      'right-end',
      'bottom',
      'bottom-start',
      'bottom-end',
      'left',
      'left-start',
      'left-end',
    ],
    description: 'Popover가 표시될 위치를 결정합니다.',
    defaultValue: 'bottom',
  },
  offset: {
    control: 'number',
    description: 'Popover와 트리거 간의 오프셋(거리)을 설정합니다.',
    defaultValue: 4,
  },
  children: {
    control: 'object',
    description: 'Popover 안에 들어가는 JSX 요소입니다.',
  },
  classNames: {
    control: 'text',
    description: '추가로 적용할 클래스 이름을 설정합니다.',
  },
};

export const GridTemplate = () => (
  <div className={grid({ columns: 3, gap: 4 })}>
    {/* top  */}
    <Popover>
      <PopoverHandler>
        <Button color='blue'>POPOVER</Button>
      </PopoverHandler>
      <PopoverContent offset={2} placement='top-start'>
        <Button variant='outline' outlineColor='blue' size='sm'>
          top start
        </Button>
      </PopoverContent>
    </Popover>
    <Popover>
      <PopoverHandler>
        <Button color='yellow'>POPOVER</Button>
      </PopoverHandler>
      <PopoverContent offset={2} placement='top'>
        <Button variant='outline' outlineColor='yellow' size='sm'>
          top
        </Button>
      </PopoverContent>
    </Popover>
    <Popover>
      <PopoverHandler>
        <Button color='indigo'>POPOVER</Button>
      </PopoverHandler>
      <PopoverContent offset={2} placement='top-end'>
        <Button variant='outline' outlineColor='indigo' size='sm'>
          top end
        </Button>
      </PopoverContent>
    </Popover>

    {/* right  */}
    <Popover>
      <PopoverHandler>
        <Button color='green'>POPOVER</Button>
      </PopoverHandler>
      <PopoverContent offset={2} placement='right-start'>
        <Button variant='outline' outlineColor='green' size='sm'>
          right start
        </Button>
      </PopoverContent>
    </Popover>
    <Popover>
      <PopoverHandler>
        <Button color='orange'>POPOVER</Button>
      </PopoverHandler>
      <PopoverContent offset={2} placement='right'>
        <Button variant='outline' outlineColor='orange' size='sm'>
          right
        </Button>
      </PopoverContent>
    </Popover>
    <Popover>
      <PopoverHandler>
        <Button>POPOVER</Button>
      </PopoverHandler>
      <PopoverContent offset={2} placement='right-end'>
        <Button size='sm'>right end</Button>
      </PopoverContent>
    </Popover>

    {/* left  */}
    <Popover>
      <PopoverHandler>
        <Button variant='outline' color='white'>
          POPOVER
        </Button>
      </PopoverHandler>
      <PopoverContent offset={2} placement='left-start'>
        <Button variant='outline' size='sm'>
          left start
        </Button>
      </PopoverContent>
    </Popover>
    <Popover>
      <PopoverHandler>
        <Button color='red'>POPOVER</Button>
      </PopoverHandler>
      <PopoverContent offset={2} placement='left'>
        <Button variant='outline' outlineColor='red' size='sm'>
          left center
        </Button>
      </PopoverContent>
    </Popover>
    <Popover>
      <PopoverHandler>
        <Button color='cyan'>POPOVER</Button>
      </PopoverHandler>
      <PopoverContent offset={2} placement='left-end'>
        <Button variant='outline' outlineColor='cyan' size='sm'>
          left end
        </Button>
      </PopoverContent>
    </Popover>

    {/* bottom  */}
    <Popover>
      <PopoverHandler>
        <Button color='pink'>POPOVER</Button>
      </PopoverHandler>
      <PopoverContent offset={2} placement='bottom-start'>
        <Button variant='outline' outlineColor='pink' size='sm'>
          bottom start
        </Button>
      </PopoverContent>
    </Popover>
    <Popover>
      <PopoverHandler>
        <Button color='mint'>POPOVER</Button>
      </PopoverHandler>
      <PopoverContent offset={2} placement='bottom'>
        <Button variant='outline' outlineColor='mint' size='sm'>
          bottom
        </Button>
      </PopoverContent>
    </Popover>
    <Popover>
      <PopoverHandler>
        <Button color='brown'>POPOVER</Button>
      </PopoverHandler>
      <PopoverContent offset={2} placement='bottom-end'>
        <Button variant='outline' outlineColor='brown' size='sm'>
          bottom end
        </Button>
      </PopoverContent>
    </Popover>
  </div>
);

export default meta;
