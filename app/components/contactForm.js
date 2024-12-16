'use client'
import { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form data submitted:', formData)
  }

  return (
    <div className='flex flex-col custom:flex-row gap-12 text-white rounded-lg '>
      {/* Left Column (Text Content) */}
      <div className='flex-1 mb-8 sm:mb-0 sm:w-full custom:w-1/2'>
        <h2 className='text-xl sm:text-2xl font-bold text-[#ccff00] mb-4'>
          SEND ME A MESSAGE!
        </h2>
        <p className='text-sm sm:text-base mb-6'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          laoreet diam congue fringilla facilisis. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Proin commodo libero a arcu ultricies, eu
          mollis nulla tincidunt. In mollis accumsan nulla, vel congue dolor
          porta sed.
        </p>
      </div>

      {/* Right Column (Form) */}
      <div className='flex-1 sm:w-full custom:w-1/2'>
        <form className='space-y-4' onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor='name'
              className='block text-xs font-medium text-[#ccff00]'>
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              className='w-full px-4 py-2 mt-2 bg-[#262626] text-white border border-[#ccff00] rounded-md focus:outline-none'
              placeholder='Your Name'
            />
          </div>
          <div>
            <label
              htmlFor='email'
              className='block text-xs font-medium text-[#ccff00]'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='w-full px-4 py-2 mt-2 bg-stone-800 text-white border border-[#ccff00] rounded-md focus:outline-none'
              placeholder='Your Email'
            />
          </div>
          <div>
            <label
              htmlFor='message'
              className='block text-xs font-medium text-[#ccff00]'>
              Message
            </label>
            <textarea
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              rows='4'
              className='w-full px-4 py-2 mt-2 bg-stone-800 text-white border border-[#ccff00] rounded-md focus:outline-none'
              placeholder='Your Message'
            />
          </div>

          <button
            type='submit'
            className='w-full py-3 mt-4 bg-[#ccff00] text-stone-800 font-bold rounded-md hover:bg-[#ecffa2]  transition duration-300'>
            SEND
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
