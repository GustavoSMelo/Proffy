import React, { useState } from 'react'
import Global from '../styles/styledGlobal'
import { Container, Header } from '../styles/styledStudy'
import Link from 'next/link'

const Study = () => {
  const [matter, setMatter] = useState('')
  const [hour, setHour] = useState('')
  const [day, setDay] = useState('')

  return (
    <>
      <Header>
        <nav className='Navigation'>
          <Link href='/'>
            <figure>
              <img src='/static/icons/back.svg' alt='arrow-left-icon' />
            </figure>
          </Link>

          <figure>
            <img src='/static/logo.svg' alt='logo-proffy' />
          </figure>
        </nav>

        <h1>This is the available proffys </h1>

        <section className='Navigation'>
          <article>
            <label>Matter </label>
            <br />
            <input type='text' />
          </article>

          <article>
            <label>Day  </label>
            <br />
            <select>
              <option value='monday'>monday</option>
              <option value='tuesday'>tuesday</option>
              <option value='wednesday'>wednesday</option>
              <option value='thursday'>thursday</option>
              <option value='friday'>friday</option>
            </select>
          </article>

          <article>
            <label>Hour </label>
            <br />
            <input type='Text' />
          </article>
        </section>
      </Header>
      <Container>
        <section className='proffy-container'>
          <article className='profile-container'>
            <figure>
              <img src='https://avatars1.githubusercontent.com/u/45046288?s=460&u=19b6d6848332724f671d49fb2555400ba8effb69&v=4' alt='proffy-avatar' />
            </figure>
            <span>
              <h1 className='proffy-name'>Gustavo S. Melo</h1>
              <p>Math</p>
            </span>
          </article>
          <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nobis fugiat consequuntur, dolorem quos nostrum voluptate fuga laboriosam, ut est eos. Modi minus libero, labore adipisci consectetur quidem doloremque voluptatem?</p>

          <article className='RowContainer'>
            <span>
              <small>Price/Hour </small>
              <h2> BRL$ 20.00</h2>
            </span>
            <button>
              <img src='/static/icons/whatsapp.svg' /><p>Enter in contact</p>
            </button>
          </article>
        </section>
      </Container>
      <Global />
    </>
  )
}

export default Study
