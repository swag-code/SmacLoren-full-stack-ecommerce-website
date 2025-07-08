import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsLetterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            ipsum at doloribus consequatur veritatis, sunt reprehenderit rerum
            temporibus autem quod ab perferendis illum nihil sequi consequuntur
            porro voluptas mollitia architecto.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione,
            reprehenderit a delectus ipsam ducimus adipisci maxime sequi impedit
            ut hic maiores, saepe rem consequuntur. Corrupti dignissimos aliquam
            aspernatur ex deserunt.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            laboriosam maxime ipsam expedita maiores consequatur provident
            soluta cumque officia totam, libero porro nisi laborum? Reiciendis
            deserunt quo error maxime corporis.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
            nam alias incidunt corrupti odio libero, necessitatibus error soluta
            molestiae earum cum maiores numquam veniam, aperiam optio distinctio
            voluptate culpa consequuntur.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
            nam alias incidunt corrupti odio libero, necessitatibus error soluta
            molestiae earum cum maiores numquam veniam, aperiam optio distinctio
            voluptate culpa consequuntur.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
            nam alias incidunt corrupti odio libero, necessitatibus error soluta
            molestiae earum cum maiores numquam veniam, aperiam optio distinctio
            voluptate culpa consequuntur.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
