import { Dock, DockIcon } from '@/components/magicui/dock';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

function NavMenu() {
  const size = '28';
  const stroke = '1.3';

  return (
    <div className='fixed translate-x-[-50%] bottom-9 left-[50%] hidden sm:block'>
      <Dock
        magnification={60}
        direction='bottom'
        className='backdrop-blur-sm bg-[#ffffff07] border-neutral-600 gap-5'
      >
        <DockIcon data-tooltip-id='menu' data-tooltip-content='Menu'>
          <a href='/'>
            <img
              src='avatar.jpg'
              alt='logo'
              className='relative rounded-full w-9 hover:scale-150 transition-all duration-200 '
            />
          </a>
          <Tooltip id='menu' />
        </DockIcon>

        <DockIcon data-tooltip-id='about' data-tooltip-content='About'>
          <a href='/about'>
            <div className='z-30 flex items-center justify-center w-9 rounded-full box-gen aspect-square  bg-[#00000033] border-neutral-600 border  hover:scale-150 transition-all duration-200'>
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
            </div>
          </a>
          <Tooltip id='about' />
        </DockIcon>

        <DockIcon data-tooltip-id='proyectos' data-tooltip-content='Proyectos'>
          <a href='/proyectos'>
            <div className='z-30 flex items-center justify-center w-9 rounded-full box-gen aspect-square  bg-[#00000033] border-neutral-600 border  hover:scale-150 transition-all duration-200'>
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
            </div>
          </a>
          <Tooltip id='proyectos' />
        </DockIcon>

        <DockIcon data-tooltip-id='stack' data-tooltip-content='Stack'>
          <a href='/stack'>
            <div className='z-30 flex items-center justify-center w-9 rounded-full box-gen aspect-square  bg-[#00000033] border-neutral-600 border  hover:scale-150 transition-all duration-200'>
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
            </div>
          </a>
          <Tooltip id='stack' />
        </DockIcon>
      </Dock>
    </div>
  );
}
export default NavMenu;
