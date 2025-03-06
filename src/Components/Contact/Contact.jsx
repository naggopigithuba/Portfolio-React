import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'



const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sent Succesfully");
    const formData = new FormData(event.target);

    formData.append("access_key", "69e8728a-3fb5-4a69-84ab-0f813bd1a4b9");
    
    try{
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      alert("Form Submitted Succesfully")
      setResult("Form Submitted Successfully");  
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message || 'something went wrong' );
    }
  }  catch (error) {
    console.error("Request failed", error);
    setResult("Form submission failed. Please try again.");
  }
};

  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className='contact-details'>
          <div className='contact-left'>
            <h1>Let`s talk</h1>
            <div className='contact-detail'>
              <img src={mail_icon}  /><p> naggopikorne@gmail.com</p>

            </div>
            <div className='contact-detail'>
              <img src={location_icon} /><p>Hyderabad, Bangalore, Chennai</p>
              
            </div>
            <div className='contact-detail'>
              <img src={call_icon} /><p>9346058486</p>
              
            </div>
          </div>

        </div>
        <form  onSubmit={onSubmit} className='contact-right'>
          <label > Your name</label>
          <input type="text" placeholder='Enter your name' name='name' />
          <label > Your Email</label>
          <input type=" Email" placeholder='enter your email'name='email' />
          <label>Write Your message here</label>
          <textarea name='message' rows="8" placeholder='Enter your message'></textarea>
          <button type='submit' className='contact-submit'> Submit Now</button>
        </form> 
        {result && <p>{result}</p>}
       

    </div>
  )
}

export default Contact







