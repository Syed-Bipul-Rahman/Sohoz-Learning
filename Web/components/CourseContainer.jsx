import React from "react";
import Link from "next/link";
import Image from "next/image";
import { UisStar, UisStarHalfAlt } from '@iconscout/react-unicons-solid';
import { UilClockThree, UilUser, UilShoppingCart, UilStar } from '@iconscout/react-unicons';

const star = (rating) => {
  const stars = [];
  for (let index = 1; index <= 5; index++) {
    if (index <= rating) {
      stars.push(<UisStar key={index} />);
    } else if (index - rating <= 0.5 ) {
      stars.push(<UisStarHalfAlt key={index} />);
    } else {
      stars.push(<UilStar key={index} />);
    }
  }
  return stars;
};

export default function CourseContainerHome({data,key}) {
  return (
    <div key={key} className="p-4 bg-cyan-50 rounded-xl max-w-[350px] mx-auto my-5">
      <Image className="w-full rounded-xl" src={`/course/${data.img}`} alt={data.title} height={300} width={350}/>
      <div className="px-4 mt-4">
        <Link href={`/courses/${data.course_number}`} className="text-2xl hover:text-orange-500 transition-all font-bold">{data.title}</Link>
        <div className="flex items-center justify-between my-4 text-lg">
          <span className="text-orange-400 flex">
            {star(data.ratings).map((data)=>{return data})}
          </span>
          <p className="text-slate-600 font-medium">({data.total_review} Reviews)</p>
        </div>
        <div className="flex items-center justify-between text-slate-600 mb-2">
          <span className="flex items-center gap-1">
            <UilClockThree size='20'/>{data.duration}
          </span>
          <p className="text-slate-600 font-medium flex gap-1 items-center">
            <UilUser size='18' />{data.total_sold}
          </p>
        </div>
        <hr />
        <div className="flex justify-between items-center mt-2">
          <p className="text-orange-500 text-2xl font-bold">৳ {data.price}</p>
          <span className="bg-slate-200 rounded-lg font-semibold p-2 cursor-pointer hover:bg-orange-600 hover:text-white flex items-center transition-all"><UilShoppingCart size="16" />Add to cart</span>
        </div>
      </div>
    </div>
  );
}
