import React from "react";
import FAQComp from "../FAQComp";
const data = [
  {
    q: "Хэрхэн арга хэмжээний тасалбар худалдан авах вэ?",
    a: "Билетийн касс нь Мөсөн Өргөөний зүүн урд хэсэгт байрладаг. Тасалбарын кассын ихэнх гүйлгээ нь ковидын нөхцөл байдалтай холбоотойгоор бэлэн бусаар хийгддэг. Visa, Mastercard болон Union pay картаар төлбөр тооцоо хийх боломжтой. Хувийн чекээр тооцоо хийхгүй. Тасалбарын кассаас худалдаж авсан бүх тасалбарыг кассаар тараана. Тасалбарыг онлайнаар худалдаж авах бол тухайн арга хэмжээний хэсгээс дэлгэрэнгүй мэдээлэл авна уу.",
  },
  {
    q: "Арена хүртэл автобус явдаг уу?",
    a: "Билетийн касс нь Мөсөн Өргөөний зүүн урд хэсэгт байрладаг. Тасалбарын кассын ихэнх гүйлгээ нь ковидын нөхцөл байдалтай холбоотойгоор бэлэн бусаар хийгддэг. Visa, Mastercard болон Union pay картаар төлбөр тооцоо хийх боломжтой. Хувийн чекээр тооцоо хийхгүй. Тасалбарын кассаас худалдаж авсан бүх тасалбарыг кассаар тараана. Тасалбарыг онлайнаар худалдаж авах бол тухайн арга хэмжээний хэсгээс дэлгэрэнгүй мэдээлэл авна уу.",
  },
  {
    q: "Ажиллах цагийн хуваарийг хэрхэн мэдэх вэ?",
    a: "Билетийн касс нь Мөсөн Өргөөний зүүн урд хэсэгт байрладаг. Тасалбарын кассын ихэнх гүйлгээ нь ковидын нөхцөл байдалтай холбоотойгоор бэлэн бусаар хийгддэг. Visa, Mastercard болон Union pay картаар төлбөр тооцоо хийх боломжтой. Хувийн чекээр тооцоо хийхгүй. Тасалбарын кассаас худалдаж авсан бүх тасалбарыг кассаар тараана. Тасалбарыг онлайнаар худалдаж авах бол тухайн арга хэмжээний хэсгээс дэлгэрэнгүй мэдээлэл авна уу.",
  },
  {
    q: "Чөлөөт гулгалтын хуваарь байдаг юм болов уу?",
    a: "Билетийн касс нь Мөсөн Өргөөний зүүн урд хэсэгт байрладаг. Тасалбарын кассын ихэнх гүйлгээ нь ковидын нөхцөл байдалтай холбоотойгоор бэлэн бусаар хийгддэг. Visa, Mastercard болон Union pay картаар төлбөр тооцоо хийх боломжтой. Хувийн чекээр тооцоо хийхгүй. Тасалбарын кассаас худалдаж авсан бүх тасалбарыг кассаар тараана. Тасалбарыг онлайнаар худалдаж авах бол тухайн арга хэмжээний хэсгээс дэлгэрэнгүй мэдээлэл авна уу.",
  },
  {
    q: "Аренад хэр их хүйтэн байдаг бол оо?",
    a: "Билетийн касс нь Мөсөн Өргөөний зүүн урд хэсэгт байрладаг. Тасалбарын кассын ихэнх гүйлгээ нь ковидын нөхцөл байдалтай холбоотойгоор бэлэн бусаар хийгддэг. Visa, Mastercard болон Union pay картаар төлбөр тооцоо хийх боломжтой. Хувийн чекээр тооцоо хийхгүй. Тасалбарын кассаас худалдаж авсан бүх тасалбарыг кассаар тараана. Тасалбарыг онлайнаар худалдаж авах бол тухайн арга хэмжээний хэсгээс дэлгэрэнгүй мэдээлэл авна уу.",
  },
];
const FAQ = () => {
  return (
    <div className="py-20 space-y-10">
      <div>
      <div className="space-y-2.5 text-center">
                        <div className=" font-semibold text-lg md:text-xl lg:text-2xl ">Our Faq</div>
                        <div className="flex justify-center space-x-1">
                            <div className="border-2 border-red-500 rounded-full w-1" />
                            <div className="border-2 border-red-500 rounded-l-lg w-20" />
                        </div>
                    </div>
      </div>
      <div >
        {data.map((item) => (
          <FAQComp {...item} />
        ))}
      </div>
    </div>
  );
};
export default FAQ;
