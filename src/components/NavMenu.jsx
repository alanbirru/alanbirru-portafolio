import { Dock, DockIcon } from '@/components/magicui/dock';

function NavMenu() {
  const size = '28';
  const stroke = '1.3';

  return (
    <div className='fixed translate-x-[-50%] bottom-9 left-[50%]'>
      <Dock
        direction='middle'
        className=' gap-6 backdrop-blur-sm bg-[#ffffff07] border-neutral-600'
      >
        <DockIcon>
          <img
            src='avatar.jpg'
            alt='logo'
            className='relative rounded-full w-12 shine-effect '
          />
        </DockIcon>

        <DockIcon>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width={size}
            height={size}
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth={stroke}
            strokeLinecap='round'
            strokeLinejoin='round'
            className='icon icon-tabler icons-tabler-outline icon-tabler-user'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0' />
            <path d='M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2' />
          </svg>
        </DockIcon>
        <DockIcon>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width={size}
            height={size}
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth={stroke}
            strokeLinecap='round'
            strokeLinejoin='round'
            className='icon icon-tabler icons-tabler-outline icon-tabler-code'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M7 8l-4 4l4 4' />
            <path d='M17 8l4 4l-4 4' />
            <path d='M14 4l-4 16' />
          </svg>
        </DockIcon>

        <DockIcon>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width={size}
            height={size}
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth={stroke}
            strokeLinecap='round'
            strokeLinejoin='round'
            className='icon icon-tabler icons-tabler-outline icon-tabler-stack-3'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M12 2l-8 4l8 4l8 -4l-8 -4' />
            <path d='M4 10l8 4l8 -4' />
            <path d='M4 18l8 4l8 -4' />
            <path d='M4 14l8 4l8 -4' />
          </svg>
        </DockIcon>
      </Dock>
    </div>
  );
}
export default NavMenu;
