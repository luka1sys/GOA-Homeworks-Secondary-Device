function Contact() {
  const handleSubmit=(e)=>{
    e.preventDefault();
    const Data={
      email:e.target.email.value,
      name:e.target.name.value,
      message:e.target.message.value


    }
    console.log(Data)
    e.target.reset()

      
    }
  return (
    <div>
      <h2>contact us</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="enter email" />

        <br/>
        <input type="text" name="name" placeholder="enter name"/>
        <br/>
        <input type="message" placeholder="enter message" name="message" />
        <button onSubmit={Contact}>Submit</button>

      </form>
    </div>
    

  )
}

export default Contact
