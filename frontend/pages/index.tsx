import React from 'react'
import { Container } from '../styles/styledIndex'
import Global from '../styles/styledGlobal'
import Link from 'next/link'

const Home = () => (
  <>
    <Container>
      <article>
        <section className='titleContainer'>
          <h1 className='titleApp'>Proffy</h1>
          <small className='descriptionApp'>Your platform of online courses</small>
        </section>
        <figure>
          <img src='/static/landing.svg' alt='illustration of students with proffy' />
        </figure>
      </article>

      <section>
        <span className='SpanDisplay'>
          <Link href='/study'>
            <button className='StudyButton'>
              <img src='/static/icons/study.svg' alt='icon-study' />   Study
            </button>
          </Link>
          <Link href='/registry'>
            <button className='ClassButton'>
              <img src='/static/icons/give-classes.svg' alt='icon-give-class' />   Give class
            </button>
          </Link>
        </span>
        <span>
          <small className='Connections'>0 Connection already done in this website</small>
        </span>
      </section>
    </Container>
    <Global />
  </>
)

export default Home
