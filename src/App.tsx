import { FC, useEffect, useState } from 'react'
import { Link, Slider, styled, SvgIcon } from '@mui/material'
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import Icon from '@mui/material/Icon';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used


import Header from '@/header'

const App: FC = () => {

  const [value, setValue] = useState<number | number[]>(5)
  const [fontSize, setFontSize] = useState<string>(value + "rem")

  useEffect(() => {
    setFontSize(value + "rem")
  }, [value])

  return (
    <div>
    <Root>
      <Header />
      <div>
        <h2>
          How much do you like{' '}
          <Link href='https://vitejs.dev/' target='_blank' rel='noopener noreferrer'>
            Vite?
          </Link>
        </h2>
        <Slider value={value} min={1} max={10} step={1} onChange={(e: any) => setValue(parseInt(e?.target?.value || '5', 10))} />
      </div>
    </Root>
    <footer style={{display: "block"}}>
      <div className='svgIcons'>
        <SvgIcon component={LocalPoliceIcon} style={{color: "red", fontSize}} />
        <SvgIcon component={AccessAlarm} style={{color: "blue", fontSize}} />
        <SvgIcon component={ThreeDRotation} style={{color: "green", fontSize}} />
      </div>
      <div className='fontIcons'>
        <Icon>star</Icon>
      </div>
      <div className="fas">
        <FontAwesomeIcon icon={solid('user-secret')} style={{fontSize}} />
        <FontAwesomeIcon icon={icon({name: 'coffee', style: 'solid'})} style={{fontSize}} />
        {/* <FontAwesomeIcon icon={regular('coffee')} /> */}
        {/* <FontAwesomeIcon icon={brands('twitter')} /> */}
      </div>
      </footer>
    </div>
  )
}

const Root = styled('div')`
  padding: 1% 2% 10vh 2%;
  width: 100%;
  min-height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;

  & a {
    text-decoration: none;
    color: ${({ theme: { palette } }) => palette.primary.main};
  }
`

export default App
