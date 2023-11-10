import React from "react";
import Anu from "./AnuFiltered.png"
import Button from "./Button";

const About = () => {
    let anuWidth = 500;
    anuWidth = anuWidth + "px"
    return (
        <section id='about' className='flex flex-col items-start md:ml-44 ml-12 mt-32 md:mt-24'>
            <div className="about-container flex flex-col md:flex-row items-center justify-center md:justify-around w-full">
                <div className="text-container">
                    <div className="title text-left">
                        <h1 className='text-5xl font-playPen font-semibold pb-4'>Hi, I'm Anu.</h1>
                        <h2 className='text-logoGreen font-bold text-2xl pb-8'>Real Estate Agent</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, sed, recusandae quo voluptate expedita tempora molestias aperiam et repellendus, impedit eum error harum quibusdam provident. Architecto vero incidunt quibusdam beatae nesciunt dolore ullam praesentium esse recusandae quia corporis vel quaerat corrupti, voluptate explicabo possimus, sapiente delectus nostrum suscipit laudantium, earum reiciendis? Animi accusamus error debitis quae autem necessitatibus sit, dolorem similique, recusandae repellat ipsa dolorum cum. Quidem at error, voluptatibus nostrum ipsam dolore, aliquam quis possimus in placeat quasi consequuntur!</p>
                    </div>
                </div>
                <div className="img relative bottom-16 mt-16 md:mt-0">
                    <img src={Anu} alt="Anuoluwapo" width={anuWidth} className="rounded-xl"/>
                </div>
            </div>
            <Button />
        </section>
    );
}
 
export default About;