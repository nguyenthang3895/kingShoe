import "./index.css";
import Card from "../Card/Card";
import Card2 from "../Card2/Card2";
import ListCard from "../ListCard";
import ListCard2 from "../ListCard/index2";
export default function Body() {
  //    const props1 = {
  //     img:"https://sachngoaingugiare.com/wp-content/uploads/2021/05/Family-and-friends-student-book-2-scaled.jpg",
  //     title:"React JS Course",
  //     description:"Learn with Mr.Jonny"
  //    }
  //    const props2 = {
  //     img:"https://sachngoaingugiare.com/wp-content/uploads/2021/05/Family-and-friends-student-book-2-scaled.jpg",
  //     title:"Javascripts Course",
  //     description:"Learn with Khoa Pug"
  //    }
  //    const props3 = {
  //     img:"https://sachngoaingugiare.com/wp-content/uploads/2021/05/Family-and-friends-student-book-2-scaled.jpg",
  //     title:"Vujs Course",
  //     description:"Learn with Jonas"
  //    }
  //    const props4 = {
  //     img:"https://sachngoaingugiare.com/wp-content/uploads/2021/05/Family-and-friends-student-book-2-scaled.jpg",
  //     title:"PHP Course",
  //     description:"Learn with Tony"
  //    }

  const phong = [
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

  const Object = [
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
      {/* <div className='card-list'>
       <Card cardProp={props1}/>
        <Card cardProp={props2}/>
        <Card cardProp={props3}/>
        <Card cardProp={props4}/>
       </div> */}
      <ListCard thang={phong} />
      <div>
        <div>asdas</div>
      </div>
      <h1 className="text-center">Online Course</h1>
      {/* <div className='card-list'>
        <Card2 card2Prop={props5}/>
        <Card2 card2Prop={props6}/>
        <Card2 card2Prop={props7}/>
        </div> */}
      <ListCard2 listcard2={Object} />
    </div>
  );
}
