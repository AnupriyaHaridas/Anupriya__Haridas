import Image from "next/image";
import image from "/public/assets/author.png";
import "./globals.css";
export default function Home() {
  return (
    <main>
      <div className="container sm:flex justify-center sm:flex-row-reverse mx-auto"> 
      <div className="sm:basis-1/2 p-8 sm:p-16">
          <h1 className="text-5xl font-bold mb-8">Hello</h1>
          <h3 className="text-2xl animate-pulse font-bold">A Bit About Me</h3>
          <p className="text-md text-reg-text-grey mt-2">I am a web developer with a passion for creating beautiful
           and functional websites. With over 6 years of hands-on experience in web development and UI/UX design, 
           I am passionate about crafting engaging and user-friendly digital experiences. Whether it's building 
           responsive websites, developing robust web applications, or designing intuitive interfaces, I strive to 
           deliver high-quality solutions tailored to meet my clients' needs.</p>
           <div className="flex justify-center mt-8">
            <a href="/resume" className="bg-orange-400 link-rounded">
              Resume </a>
            <a href="/projects" className="bg-red-500 link-rounded ml-8">
              Projects </a>
            <a href="/contact" className="bg-blue-400  link-rounded ml-8">
              Contact </a>
           </div>
      </div>
      <div className="sm:basis-1/2 p-8 sm:p-4">
        <Image className="rounded-full w-auto h-auto"
        src={image} alt="author" />
      </div>
      </div>
    </main>
  );
}
