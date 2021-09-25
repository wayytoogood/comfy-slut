import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useForm, ValidationError } from '@formspree/react'

const Contact = () => {
  const [state, handleSubmit] = useForm('mqkwnqdz')
  const input = useRef(null)
  const message = useRef(null)

  useEffect(() => {
    if (state.succeeded) {
      input.current.value = ''
      setTimeout(() => {
        message.current.style.opacity = 0
      }, 750)
    }
  }, [state])

  return (
    <Wrapper>
      <div className='section-center'>
        <h3>Join our newsletter and get 20% off</h3>
        <div className='content'>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure qui
            tenetur ipsum, non corrupti tempore.
          </p>
          <form onSubmit={handleSubmit} className='contact-form'>
            <input
              type='email'
              name='email'
              className='form-input'
              placeholder='enter email'
              ref={input}
            />
            <ValidationError
              prefix='Email'
              field='email'
              errors={state.errors}
            />
            <button
              type='submit'
              className='submit-btn'
              disabled={state.submitting}
            >
              subscribe
            </button>
            {state.succeeded && (
              <p className='join-msg' ref={message}>
                Thanks for joining!
              </p>
            )}
          </form>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  padding: 5rem 0;
  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
  }
  .form-input {
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-primary-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
  }
  .submit-btn:hover {
    color: var(--clr-white);
  }
  .join-msg {
    margin-top: 0.25rem;
    transition: var(--transition);
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
`

export default Contact