import React from "react";
import Card from "./Card";

const MainFile = () => {
  const contacts = [
    {
      name: "John Doe",
      number: "+1234567890",
      email: "johndoe@example.com",
      image:
        "https://c.pxhere.com/photos/08/7a/male_portrait_profile_social_media_cv_young_elegant_suit-459413.jpg!d",
    },
    {
      name: "Jane Smith",
      number: "+0987654321",
      email: "janesmith@example.com",
      image:
        "https://th.bing.com/th/id/OIP.IrUBHhdMo6wWLFueKNreRwHaHa?rs=1&pid=ImgDetMain",
    },
    {
      name: "Alice Johnson",
      number: "+1122334455",
      email: "alicejohnson@example.com",
      image:
        "https://th.bing.com/th/id/OIP.jryuUgIHWL-1FVD2ww8oWgHaHa?rs=1&pid=ImgDetMain",
    },
    {
      name: "Bob Brown",
      number: "+1223344556",
      email: "bobbrown@example.com",
      image:
        "https://th.bing.com/th/id/OIP.QAY8zJIk3VkCfwdfxr4ilAHaJb?rs=1&pid=ImgDetMain",
    },
    {
      name: "Charlie Davis",
      number: "+1334455667",
      email: "charliedavis@example.com",
      image:
        "https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.jpg?s=612x612&w=0&k=20&c=QjebAlXBgee05B3rcLDAtOaMtmdLjtZ5Yg9IJoiy-VY=",
    },
    {
      name: "John Doe",
      number: "+1234567890",
      email: "johndoe@example.com",
      image:
        "https://c.pxhere.com/photos/08/7a/male_portrait_profile_social_media_cv_young_elegant_suit-459413.jpg!d",
    },
    {
      name: "Jane Smith",
      number: "+0987654321",
      email: "janesmith@example.com",
      image:
        "https://th.bing.com/th/id/OIP.IrUBHhdMo6wWLFueKNreRwHaHa?rs=1&pid=ImgDetMain",
    },
    {
      name: "Alice Johnson",
      number: "+1122334455",
      email: "alicejohnson@example.com",
      image:
        "https://th.bing.com/th/id/OIP.jryuUgIHWL-1FVD2ww8oWgHaHa?rs=1&pid=ImgDetMain",
    },
    {
      name: "Bob Brown",
      number: "+1223344556",
      email: "bobbrown@example.com",
      image:
        "https://th.bing.com/th/id/OIP.QAY8zJIk3VkCfwdfxr4ilAHaJb?rs=1&pid=ImgDetMain",
    },
    {
      name: "Charlie Davis",
      number: "+1334455667",
      email: "charliedavis@example.com",
      image:
        "https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.jpg?s=612x612&w=0&k=20&c=QjebAlXBgee05B3rcLDAtOaMtmdLjtZ5Yg9IJoiy-VY=",
    },
  ];

  return (
    <div className="mainfile">
      <div className="card-container">
        {contacts.map((contact) => (
          <Card
            key={contact.email}
            name={contact.name}
            number={contact.number}
            email={contact.email}
            image={contact.image}
          />
        ))}
      </div>
    </div>
  );
};

export default MainFile;
