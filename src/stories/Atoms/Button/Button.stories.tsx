import type { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonProps } from '@/components/Button/Button';
import { Colors, Size, Variant } from '@/components/Button/Button.type';
import { ReactComponent as DownloadIcon } from '@/assets/icons/download.svg';

const sizeOptions: Size[] = ['icon', 'sm', 'md', 'lg'];
const colorOptions: Colors[] = [
  'black',
  'red',
  'orange',
  'yellow',
  'green',
  'mint',
  'teal',
  'cyan',
  'blue',
  'indigo',
  'purple',
  'pink',
  'brown',
  'white',
];
const variantOptions: Variant[] = [
  'filled',
  'outline',
  'iconText',
  'icon',
  'link',
];

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'select' },
      options: colorOptions,
      description: 'background color 설정',
    },
    outlineColor: {
      control: { type: 'select' },
      options: colorOptions,
      description: 'outline 컬러 + text 컬러 설정',
    },
    size: {
      control: { type: 'radio' },
      options: sizeOptions,
      description: '사이즈 선택 props',
    },
    variant: {
      control: { type: 'radio' },
      options: variantOptions,
      description: '버튼 스타일 유형 선택',
    },
    rounded: {
      control: { type: 'boolean' },
      description: 'radius를 circle 형태로 설정',
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: '부모 사이즈 크기에 맞게 width 100% 설정',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'disabled 스타일',
    },
    loading: {
      control: { type: 'boolean' },
      description: 'loading 스타일',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs: Partial<ButtonProps> = {
  disabled: false,
  loading: false,
  rounded: false,
  size: 'md',
  variant: 'filled',
};

export const Filled: Story = {
  args: {
    ...defaultArgs,
    children: '버튼',
  },
};

export const Outline: Story = {
  args: {
    ...defaultArgs,
    variant: 'outline',
    children: '버튼',
  },
};

export const Icon: Story = {
  args: {
    ...defaultArgs,
    variant: 'icon',
    size: 'icon',
    icon: <DownloadIcon />,
    outlineColor: 'black',
    color: 'black',
  },
};

export const IconText: Story = {
  args: {
    ...defaultArgs,
    variant: 'iconText',
    icon: <DownloadIcon />,
    children: '아이콘 텍스트 버튼',
  },
};

export const Link: Story = {
  args: {
    ...defaultArgs,
    variant: 'link',
    children: '링크',
  },
};

export const Loading: Story = {
  args: {
    ...defaultArgs,
    loading: true,
    children: '버튼',
  },
};
