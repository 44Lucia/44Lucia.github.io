import { useState } from 'react'
import { Responsive, WidthProvider } from 'react-grid-layout'

import Button from '@/components/button/Button'
import {
  WideCard,
  AboutCard,
  StudiesCard,
  StatusCard,
  FooterCard,
  WorkCard,
} from '@/components/cards/index'
import { studies } from '@/data/studies'

import {
  EmailIcon,
  LinkedinIcon,
  GithubIcon,
  InstagramIcon,
} from '@/assets/icons'

import './home.css'
import Tags from '@/components/tags/Tags'
import '@fontsource-variable/onest'

// Envuelve Responsive con WidthProvider
const ResponsiveGridLayout = WidthProvider(Responsive)

const Home = () => {
  const [layouts] = useState({
    lg: [
      { i: '1', x: 0, y: 0, w: 2, h: 6 },
      { i: '2', x: 2, y: 0, w: 1, h: 14 },
      { i: '3', x: 0, y: 1, w: 1, h: 10 },
      { i: '4', x: 1, y: 1, w: 1, h: 2 },
      { i: '5', x: 1, y: 2, w: 1, h: 2 },
      { i: '6', x: 1, y: 3, w: 1, h: 2 },
      { i: '7', x: 1, y: 4, w: 1, h: 2 },
      { i: '8', x: 1, y: 5, w: 1, h: 2 },
      { i: '9', x: 3, y: 1, w: 1, h: 2 },
    ],
    md: [
      { i: '1', x: 0, y: 0, w: 2, h: 6 },
      { i: '2', x: 2, y: 0, w: 1, h: 14 },
      { i: '3', x: 0, y: 6, w: 1, h: 10 },
      { i: '4', x: 1, y: 1, w: 1, h: 2 },
      { i: '5', x: 1, y: 24, w: 1, h: 2 },
      { i: '6', x: 1, y: 24, w: 1, h: 2 },
      { i: '7', x: 1, y: 24, w: 1, h: 2 },
      { i: '8', x: 1, y: 24, w: 1, h: 2 },
      { i: '9', x: 2, y: 24, w: 1, h: 2 },
    ],
    sm: [
      { i: '1', x: 0, y: 0, w: 2, h: 7 },
      { i: '2', x: 0, y: 7, w: 1, h: 14 },
      { i: '3', x: 1, y: 1, w: 1, h: 10 },
      { i: '4', x: 1, y: 1, w: 1, h: 2 },
      { i: '5', x: 1, y: 2, w: 1, h: 2 },
      { i: '6', x: 1, y: 3, w: 1, h: 2 },
      { i: '7', x: 0, y: 4, w: 1, h: 2 },
      { i: '8', x: 3, y: 1, w: 1, h: 2 },
      { i: '9', x: 0, y: 1, w: 1, h: 2 },
    ],
    xs: [
      { i: '1', x: 0, y: 0, w: 2, h: 11, static: true },
      { i: '2', x: 1, y: 0, w: 1, h: 14, static: true },
      { i: '3', x: 2, y: 0, w: 1, h: 10, static: true },
      { i: '4', x: 3, y: 0, w: 1, h: 2, static: true },
      { i: '5', x: 4, y: 0, w: 1, h: 2, static: true },
      { i: '6', x: 5, y: 0, w: 1, h: 2, static: true },
      { i: '7', x: 6, y: 0, w: 1, h: 2, static: true },
      { i: '8', x: 7, y: 0, w: 1, h: 2, static: true },
      { i: '9', x: 7, y: 0, w: 1, h: 2, static: true },
    ],
    xxs: [
      { i: '1', x: 0, y: 0, w: 2, h: 14, static: true },
      { i: '2', x: 1, y: 0, w: 1, h: 14, static: true },
      { i: '3', x: 2, y: 0, w: 1, h: 10, static: true },
      { i: '4', x: 3, y: 0, w: 1, h: 2, static: true },
      { i: '5', x: 4, y: 0, w: 1, h: 2, static: true },
      { i: '6', x: 5, y: 0, w: 1, h: 2, static: true },
      { i: '7', x: 6, y: 0, w: 1, h: 2, static: true },
      { i: '8', x: 7, y: 0, w: 1, h: 2, static: true },
      { i: '9', x: 7, y: 0, w: 1, h: 2, static: true },
    ],
  })

  return (
    <div className='container-grid'>
      <ResponsiveGridLayout
        className='layout'
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 3, md: 3, sm: 2, xs: 1, xxs: 1 }}
        rowHeight={21}
        isDraggable={true}
        isResizable={false}
        margin={[32, 32]}
      >
        <div key='1' className='grid-item' onClick={e => e.stopPropagation()}>
          <WideCard
            markdownPath='/data/introduction.md'
            imagePath='
          /assets/imgs/face.avif'
          >
            <Button
              link='mailto:lucia.fornos@email.com?subject=Consulta&body=Hola Lucia quiero hablar contigo'
              icon={<EmailIcon />}
              variant='icon'
              external={true}
            />
            <Button
              link='https://www.linkedin.com/in/lucia-fornos-99633823b/'
              icon={<LinkedinIcon />}
              variant='icon'
              external={true}
            />
            <Button
              link='https://github.com/44Lucia'
              icon={<GithubIcon />}
              variant='icon'
              external={true}
            />
            <Button
              link='https://44lucia.itch.io/'
              icon={<InstagramIcon />}
              variant='icon'
              external={true}
            />
          </WideCard>
        </div>
        <div key='2' className='grid-item' onClick={e => e.stopPropagation()}>
          <AboutCard markdownPath='/data/about-me.md'>
            <Tags technology='C#' />
            <Tags technology='Unity' />
            <Tags technology='Unreal Engine' />
            <Tags technology='C++' />
            <Tags technology='ShaderLab' />
            <Tags technology='JavaScript' />
            <Tags technology='TypeScript' />
            <Tags technology='Kotlin' />
            <Tags technology='HTML' />
          </AboutCard>
        </div>
        <div key='3' className='grid-item' onClick={e => e.stopPropagation()}>
          <StudiesCard studies={studies} />
        </div>
        <div key='4' className='grid-item' onClick={e => e.stopPropagation()}>
          <StatusCard isSearching={true} />
        </div>
        <div key='5' className='grid-item' onClick={e => e.stopPropagation()}>
          <WorkCard
            companyName='Indie Game'
            link='/projects/grimoire-of-madness'
            projectName='Grimoire of Madness'
          />
        </div>
        <div key='6' className='grid-item' onClick={e => e.stopPropagation()}>
          <WorkCard
            companyName='Indie Game'
            link='/projects/save-me-eddie'
            projectName='Save me Eddie'
          />
        </div>
        <div key='7' className='grid-item' onClick={e => e.stopPropagation()}>
          <WorkCard
            companyName='Indie Game'
            link='/projects/too-many-machines'
            projectName='Too Many Machines'
          />
        </div>
        <div key='8' className='grid-item' onClick={e => e.stopPropagation()}>
          <WorkCard
            companyName='Proyecto Académico'
            link='/projects/waves-simulation'
            projectName='Simulación de Ondas'
          />
        </div>
        <div key='9' className='grid-item' onClick={e => e.stopPropagation()}>
          <FooterCard />
        </div>
      </ResponsiveGridLayout>
    </div>
  )
}

export default Home
