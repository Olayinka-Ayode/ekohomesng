const Contact = () => {
    return (
        <section id='contact' className='md:mt-24 flex flex-col items-start md:mx-44 bg-logoGreen md:rounded-2xl rounded-t-2xl'>
            <h2 className='font-playPen text-4xl font-semibold pb-8 m-12'>Send A Message!</h2>
            <div className="sections w-full flex flex-col md:flex-row justify-around">
                <div className="form md:w-1/2">
                    <form action="https://formsubmit.co/janetibk11@gmail.com" method="POST" className='flex flex-col items-start w-full p-4 md-p:0'>
                        <label htmlFor="name" className='font-semibold font-playPen pb-2'>Name: </label>
                        <input type="text" id="name" name='name' className='focus:outline-none px-3 py-2 rounded-lg mb-6 w-72'/>
                        <label htmlFor="email" className='font-semibold font-playPen pb-2'>Email: </label>
                        <input type="email" name="email" id="email" className='focus:outline-none px-3 py-2 rounded-lg mb-6 w-72'/>
                        <label htmlFor="message" className='font-semibold font-playPen pb-2'>Message: </label>
                        <textarea name="message" id="message" className=' focus:outline-none md:w-3/4 w-full h-32 px-3 py-2 rounded-lg resize-none mb-12'></textarea>
                        <button className="bg-white font-semibold py-4 px-8 rounded-lg hover:font-bold text-left">Send!</button>
                    </form>
                </div>
                <div className="contact font-playPen font-semibold text-left p-4 md:p-0">
                    <p>Phone: +(234) 81 - 533 - 612 - 64</p>
                    <p>Email: <a href="mailto:" target='_blank' rel="noreferrer">janetibk11@gmail.com</a></p>
                    <p><a href="https://instagram.com/ekohomesng?igshid=YWo4eDVrejRWZzY=" target='_blank' rel="noreferrer">IG: @EKOHOMESNG</a></p>
                </div>
            </div>
      </section>
    );
}
 
export default Contact;