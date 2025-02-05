"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: '01',
    title:"Web Development",
    description:"Web development is the foundation of a brand's digital presence. From creating responsive websites to building complex web applications, our team ensures that every line of code is optimized for performance and user experience. We specialize in modern frameworks, ensuring seamless functionality and scalability. Whether you're a startup or an established business, we work closely with you to develop websites that are fast, secure, and tailored to your business goals.",
    href:""
  },
  {
    num: '02',
    title:"UI/UX Design",
    description:"UI/UX design is about creating meaningful and intuitive digital experiences. Our approach to design focuses on user-centered research and creative solutions, ensuring that every interaction feels natural and engaging. We design interfaces that not only look stunning but also prioritize accessibility and ease of use. By combining aesthetics with functionality, we help brands connect with their audiences in a memorable way, making digital experiences as delightful as they are effective.",
    href:""
  },
  {
    num: '03',
    title:"Logo Design",
    description:"A logo is the face of your brand, and we understand its importance in making a memorable first impression. Our logo design process involves research, creativity, and collaboration to craft symbols that are both visually striking and representative of your brand's core values. Whether you're starting fresh or rebranding, we create logos that leave a lasting impact and resonate with your audience.",
    href:""
  },
  {
    num: '04',
    title:"SEO",
    description:"SEO is about making your content easily discoverable by the right audience. Our SEO strategies combine technical optimization, keyword research, and content development to improve your website’s visibility on search engines. By analyzing your industry, competitors, and audience, we create targeted plans to boost your online presence, drive organic traffic, and ultimately help you reach your business goals.",
    href:""
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{
              opacity: 1,
              transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
          >
            {services.map((service, index) => {
              return (
                <div 
                key={index} 
                className="flex-1 flex flex-col justify-center gap-6 group"
                >
                  <div className="w-full flex justify-between items-center">
                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                    <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                      <BsArrowDownRight className="text-primary text-3xl" />
                    </Link>
                  </div>
                  <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                  <p className="text-white/60">{service.description}</p>
                  <div className="border-b border-white/20 w-full"></div>
                </div>
              );
            })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;