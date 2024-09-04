import { hstack } from 'styled-system/patterns';
import { css } from 'styled-system/css';
import Button from '@/components/Button/Button';
import { ReactComponent as Download } from '@/assets/icons/download.svg';

function App() {
  return (
    <div className='App'>
      <div
        className={css({
          minHeight: '50vh',
          backgroundColor: 'white',
          display: 'flex',
          marginTop: '50px',
          flexDir: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
        })}
      >
        <div className={hstack({ gap: '3' })}>
          <Button>버튼</Button>
          <Button loading>버튼</Button>
          <Button disabled>버튼</Button>
        </div>
        <div className={hstack({ gap: '3' })}>
          <Button color='blue'>버튼</Button>
          <Button color='blue' loading rounded>
            버튼
          </Button>
          <Button color='blue' disabled>
            버튼
          </Button>
        </div>
        <div className={hstack({ gap: '3' })}>
          <Button variant='outline'>outline</Button>
          <Button variant='outline' loading outlineColor='yellow'>
            outline
          </Button>
          <Button variant='outline' disabled rounded>
            outline
          </Button>
        </div>
        <div className={hstack({ gap: '3' })}>
          <Button variant='iconText' icon={<span>i</span>}>
            아이콘 버튼
          </Button>
          <Button variant='iconText' loading icon={<Download />}>
            아이콘 버튼
          </Button>
          <Button variant='filled' disabled icon={<Download />}>
            아이콘 버튼
          </Button>

          <Button
            variant='icon'
            color='green'
            loading
            size={'icon'}
            icon={<Download />}
            rounded
          ></Button>
          <Button
            variant='icon'
            color='cyan'
            icon={<Download />}
            size={'icon'}
          />
        </div>
        <div style={{ width: '50vw' }}>
          <Button fullWidth variant='iconText' icon={<Download />}>
            버튼
          </Button>
        </div>
        <div className={hstack({ gap: '3' })}>
          <Button variant='link'>버튼</Button>
          <Button variant='link' loading>
            버튼
          </Button>
          <Button variant='link' disabled>
            버튼
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
