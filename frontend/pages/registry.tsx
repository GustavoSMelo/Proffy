import React, { useState } from 'react'
import { Header, Container } from '../styles/styledRegistre'
import Global from '../styles/styledGlobal'
import Link from 'next/link'

const Registry = () => {
  const [name, setName] = useState('')
  const [photo, setPhoto] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [bio, setBio] = useState('')
  const [matter, setMatter] = useState('')
  const [day, setDay] = useState('')
  const [startClass, setStartClass] = useState('')
  const [endClass, setEndClass] = useState('')
  const [price, setPrice] = useState('')

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
            <img src='/static/logo.svg' alt='proffy-logo' />
          </figure>
        </nav>

        <section>
          <h1>That's awesome, you want give classes.</h1>
          <small>But first, you need to complete your registre </small>
        </section>
      </Header>
      <Container>
        <form>
          <h1>Your datas: </h1>

          <label>Full name </label>
          <br />
          <input type='text' value={name} onChange={e => setName(e.target.value)} required />

          <label>Photo link </label>
          <br />
          <input type='text' value={photo} onChange={e => setPhoto(e.target.value)} required />

          <label>Whatsapp </label>
          <br />
          <input type='text' value={whatsapp} onChange={e => setWhatsapp(e.target.value)} required />

          <label>Bio </label>
          <br />
          <textarea value={bio} onChange={e => setBio(e.target.value)} required />

          <h1>About class</h1>

          <label>Matter </label>
          <select value={matter}>
            <optgroup label='Exacts'>
              <option value='math'>math</option>
              <option value='physic'>physic</option>
              <option value='chemistry'>chemistry</option>
            </optgroup>
            <optgroup label='Words'>
              <option value='portuguese'>portuguese</option>
              <option value='english'>english</option>
            </optgroup>
            <optgroup label='Humans'>
              <option value='history'>history</option>
              <option value='geography'>geography</option>
              <option value='art'>art</option>
              <option value='philosophy'>philosophy</option>
              <option value='sociology'>sociology</option>
            </optgroup>
            <optgroup label='biologics'>
              <option value='biology'>biology</option>
            </optgroup>
          </select>

          <br />
          <label>Price for hour $BRL: </label>
          <input type='text' value={price} onChange={e => setPrice(e.target.value)} required />

          <h1>Allow Hours</h1>

          <label>Day in week </label>
          <select value={day}>
            <option value='monday'>monday</option>
            <option value='tuesday'>tuesday</option>
            <option value='wednesday'>wednesday</option>
            <option value='thursday'>thursday</option>
            <option value='friday'>friday</option>
          </select>
          <br />
          <label>start class (hour:minutes)</label>
          <input type='text' value={startClass} onChange={e => setStartClass(e.target.value)} required />
          <br />

          <label>end class (hour:minutes)</label>
          <input type='text' value={endClass} onChange={e => setEndClass(e.target.value)} required />
          <br />

          <footer className='ContainerRow'>
            <span>
              <figure>
                <img src='/static/icons/warning.svg' alt='exclamation-icon' />
              </figure>
              <p>
                Important! <br />
                Complete all the fields to continue
              </p>
            </span>
            <button type='button'>Registry</button>
          </footer>
        </form>
      </Container>
      <Global />
    </>
  )
}

export default Registry
