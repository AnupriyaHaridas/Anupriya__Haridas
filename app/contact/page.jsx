'use client'
import "@/app/globals.css";
import {useState} from 'react'
import {useRouter} from 'next/navigation'

const Contact = () => {
  const router = useRouter();
  const [contact, setContact] = useState({
    fname : '',
    lname : '',
    email : '',
    subject : '',
    message : ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(contact)
    try{
      const response = await fetch('/api/contact/new', {
          method: 'POST',
          body: JSON.stringify({
              fname: contact.fname,
              lname: contact.lname,
              email: contact.email,
              subject: contact.subject,
              message: contact.message
        })
      });
      if (response.ok){
          document.querySelector('.pop-up').style.display = 'block';
      }
    } catch (error){
        console.log(error);
    } finally {
        setContact({
            fname : '',
            lname : '',
            email : '',
            subject : '',
            message : ''
        })
        setTimeout(() => {
            document.querySelector('.pop-up').style.display = 'none';
        }, 5000);
    }
  }


  return (
    <main className="contact min-h-[60vh] pt-8 font-serif px-4 md:px-24 mb-5">
      <h1 className="text-4xl block w-full font-bold mb-10">Contact</h1>
      <div className="sm:flex sm:flex-rowsm:flex sm:flex-row">
        <div className="info sm:basis-1/2">
          <h4 className="text-md italic sm:text-md mb-4">Looking forward to hearing from you..</h4>
          <label>Phone</label>
          <p>4168373920</p>
          <label>Email</label>
          <p>anupriyah9@gmail.com</p>
          <label>LinkedIn</label>
          <p>https://www.linkedin.com/in/anupriya-haridas/</p>
          <label>Github</label>
          <p>https://github.com/AnupriyaHaridas</p>
        </div>
        <div className=" sm:basis-1/2">
          <form 
          onSubmit={handleSubmit}
          className="flex flex-col gap-4">
            <div className="sm:flex sm:flex-row gap-3">
              <div className="sm:basis-1/2">
                <label>First name</label>
                <input onChange={(e) => setContact({ ...contact, fname: e.target.value })}
                value={contact.fname} 
                type="text" 
                className="w-full border border-gray-400 rounded-md p-2" />
              </div>
              <div className="sm:basis-1/2">
                <label>Last name</label>
                <input onChange={(e) => setContact({ ...contact, lname: e.target.value })}
                value={contact.lname} 
                type="text" 
                className="w-full border border-gray-400 rounded-md p-2" />
              </div>
            </div>
            <div className="sm:flex sm:flex-row gap-3">
              <div className="sm:basis-1/2">
                <label>Email</label>
                <input onChange={(e) => setContact({ ...contact, email: e.target.value })}
                value={contact.email} 
                required 
                type="text" 
                className="w-full border border-gray-400 rounded-md p-2 required:border-red-500" />
              </div>
              <div className="sm:basis-1/2">
                <label>subject</label>
                <input onChange={(e) => setContact({ ...contact, subject: e.target.value })}
                value={contact.subject} 
                type="text" 
                className="w-full border border-gray-400 rounded-md p-2" />
              </div>
            </div>
            <div className="sm:flex sm:flex-row gap-3">
              <div className="sm:basis-1/2">
                <label>Message</label>
                <textarea onChange={(e) => setContact({ ...contact, message: e.target.value })}
                value={contact.message} 
                className="w-full border border-gray-400 rounded-md p-2" />
              </div>
              <div className="sm:basis-1/2">
                <button type='submit' className=" w-28 h-28 rounded-full text-slate-100 bg-submit">Submit</button>
              </div>
            </div>
          </form>
          <div className="hidden pop-up">
            <div className="popup-wrap sm:flex sm:flex-row gap-3 p-6 bg-[#dfefd8] rounded-md">
              <svg className="w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
              <div className="flex flex-col">
                <label className="text-md text-green-800 font-bold">Successfully Submitted</label>
                <p className="text-sm text-green-700">Thank you for reaching out! I will get back to you soon.</p>
              </div>
            </div>
          </div>
        </div>
        </div>
    </main>
  )
}

export default Contact