import "./index.css";
import Card from "../Card/Card";
import Card2 from "../Card2/Card2";
import ListCard from "../ListCard";
import ListCard2 from "../ListCard/index2";
export default function Body() {
  const Object1 = [
    {
      img: "https://sachngoaingugiare.com/wp-content/uploads/2021/05/Family-and-friends-student-book-2-scaled.jpg",
      title: "React JS Course",
      description: "Learn with Mr.Jonny",
    },
    {
      img: "https://sachngoaingugiare.com/wp-content/uploads/2021/05/Family-and-friends-student-book-2-scaled.jpg",
      title: "React JS Course",
      description: "Learn with Mr.Jonny",
    },
    {
      img: "https://sachngoaingugiare.com/wp-content/uploads/2021/05/Family-and-friends-student-book-2-scaled.jpg",
      title: "React JS Course",
      description: "Learn with Mr.Jonny",
    },
    {
      img: "https://sachngoaingugiare.com/wp-content/uploads/2021/05/Family-and-friends-student-book-2-scaled.jpg",
      title: "React JS Course",
      description: "Learn with Mr.Jonny",
    },
  ];

  const Object2 = [
    {
      img: "https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?cs=srgb&dl=pexels-pixabay-301920.jpg&fm=jpg",
      title: "Modern Phycology",
      description: "Designation",
      time: "Start 20 Arpill 2022",
      register: "60 Seats",
    },

    {
      img: "https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?cs=srgb&dl=pexels-pixabay-301920.jpg&fm=jpg",
      title: "Modern Phycology",
      description: "Designation",
      time: "Start 20 Arpill 2022",
      register: "60 Seats",
    },
    {
      img: "https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?cs=srgb&dl=pexels-pixabay-301920.jpg&fm=jpg",
      title: "Modern Phycology",
      description: "Designation",
      time: "Start 20 Arpill 2022",
      register: "60 Seats",
    },
    {
      img: "https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?cs=srgb&dl=pexels-pixabay-301920.jpg&fm=jpg",
      title: "Modern Phycology",
      description: "Designation",
      time: "Start 20 Arpill 2022",
      register: "60 Seats",
    },
  ];

  return (
    <div className="body-container">
      <ListCard listcard={Object1} />
      <h1 className="text-center">Online Course</h1>
      <ListCard2 listcard2={Object2} />
    </div>
  );
}
