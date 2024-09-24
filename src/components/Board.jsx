import React from "react";
import Card from "./Card";
import "./Board.css";

const Board = () => {
  const events = [
    {
      title: "Ava Mediterraegean",
      description:
        "It is a multi-sensory transportive venue bringing dining experiences and pleasure together in a refined and spirited atmosphere. Meaning life, water, island, and bird in Greek, AVA MediterrAegean is a celebration of splendor, freedom, escapism, and joy. It is a place where genuine hospitality, delectable food, and a vibrant atmosphere combine to entertain the senses and transport you to celebrate the night away.",
      link: "https://www.avamediterraegean.com/",
      image: "https://www.avamediterraegean.com/contact",
    },
    {
      title: "The Hen & Hog",
      description:
        "Welcome to The Hen & The Hog—a place where the warmth of home meets the joy of fine dining. Nestled in the heart of the STMA community, our restaurant is more than just a place to eat—it's a haven where friends, family, and neighbors come together. From the moment you step through our doors, you'll be enveloped in a cozy, inviting atmosphere that feels like home. Our carefully crafted dishes, made with the freshest ingredients, are sure to delight your taste buds and leave you with a lasting impression. Whether you're here for a casual meal or a special celebration, we look forward to making your visit a memorable one. At The Hen & The Hog, you're not just a guest—you're family.",
      link: "https://thehenandthehog.com/menu",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRREw5b5Ah9ErG-TI3DPm5u2MAoT-fuKNqH8Q&s",
    },
    {
      title: "Cafe-Boutique PIANO",
      description:
        "Cafe – Boutique PIANO is a hidden treasure where European elegance meets American vibrancy, creating a unique and inviting atmosphere that feels like a second home. Bathed in natural light from its large windows, PIANO exudes warmth and charm, offering a seamless blend of Old World culinary mastery and modern flair. Our menu features elevated, shareable dishes crafted with gourmet ingredients, including imported Italian pasta, cheeses, and meats, ensuring every meal is a delightful experience. The bar boasts an impressive selection of wines from around the globe, carefully chosen to complement our exquisite cuisine. Whether you're stopping by for a quick breakfast, a leisurely brunch, an elegant lunch, or a relaxed dinner, PIANO is the perfect spot to unwind and savor the moment.",
      link: "https://pianowinterpark.com/",
      image:
        "https://pianowinterpark.com/wp-content/uploads/2023/07/cropped-imageedit_1_3440757468.png",
    },
    {
      title: "Prato",
      description:
        "Prato offers a harmonious fusion of simplicity and creativity, drawing inspiration from Italy’s diverse culinary heritage. Our menu honors traditional Italian flavors while embracing modern techniques and the finest seasonal ingredients, creating a dining experience that is both familiar and refreshingly innovative. The ambiance at Prato is as inviting as the cuisine, with a contemporary design accented by rustic touches that evoke the warmth of an Italian trattoria. A long, bustling bar fosters a lively, communal vibe, while our window-paned doors and year-round patio seating bring the beauty of Park Avenue indoors, making Prato the perfect place to enjoy a meal in any season.",
      link: "https://www.prato-wp.com/",
      image:
        "hhttps://popmenucloud.com/cdn-cgi/image/width%3D1536%2Cheight%3D1536%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/umbcgedh/be97a26d-05db-4605-9542-a36a7660fcf3.png",
    },
    {
      title: "The Ravenous Pig",
      description:
        "The Ravenous Pig website offers visitors a gateway to one of Florida’s premier culinary destinations, where modern American cuisine meets craft beer culture. The site reflects the vibrant and innovative spirit of the restaurant, showcasing its commitment to using locally sourced, seasonal ingredients in dishes that are as flavorful as they are artful. With an easy-to-navigate layout, the website provides detailed menus, event information, and insights into the restaurant’s celebrated history. Visitors can also explore The Ravenous Pig’s brewery offerings, learn about upcoming events, and make reservations, all while getting a sense of the warm, welcoming atmosphere that has made this establishment a beloved fixture in the community. Whether you're planning a visit or looking to experience their culinary creations at home, the website serves as the perfect introduction to the sophisticated yet approachable dining experience at The Ravenous Pig.",
      link: "https://www.theravenouspig.com/",
      image:
        "https://popmenucloud.com/cdn-cgi/image/width=1920,height=1920,format=auto,fit=scale-down/zjrvdcqw/88043521-1251-4e1c-9a0f-cd015ca99e0a.png",
    },
    {
      title: "HAMILTON'S KITCHEN",
      description:
        "Welcome to Hamilton's Kitchen, our restaurant in Winter Park, Florida offering a distinct Central Florida culinary experience fusing locally sourced ingredients with the rustic, open-table charm of a bygone era. Here you will discover traditional Southern fare, prepared with a modern twist and served in a warm setting that brings together friends, family and the greater Winter Park, Florida community at one of the best restaurants in Winter Park.",
      link: "https://www.hamiltonskitchen.com/",
      image:
        "https://popmenucloud.com/cdn-cgi/image/width%3D1536%2Cheight%3D1536%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/mfkvydlr/02d23668-cd03-4b9b-a055-7afcb22fc906.jpg",
    },
    {
      title: "The Bridge Restaurant Winter Park",
      description:
        "Founded in 2021, The Bridge Restaurant has been a staple in the community ever since. Our restaurant has always been dedicated to providing the best fine dining restaurant experience possible. We started as a small family-owned modern european restaurant and have grown into one of the most respected fine dining establishments in Winter Park",
      link: "https://thebridgerestaurant.com/",
      image:
        "https://img1.wsimg.com/isteam/ip/5aef4fe6-d3ac-4b4d-a73f-10b8884e433c/The%20Bridge-02%20sm.jpg/:/cr=t:12.49%25,l:0%25,w:100%25,h:75.02%25/rs=w:1200,h:600,cg:true",
    },
    {
      title: "Bulla Gastrobar",
      description:
        "Bulla Gastrobar has been a culinary cornerstone for authentic Spanish cuisine in Coral Gables, Florida, and now, it’s bringing that same vibrant spirit to Winter Park. Located at Lakeside Crossing, Bulla’s newest restaurant continues to set the standard with its emphasis on quality and creativity in every dish. Known for its lively atmosphere and exceptional gastronomic creations, Bulla invites you to experience the flavors of Spain through a menu that celebrates both tradition and innovation. Whether you’re a longtime fan or a first-time visitor, Bulla Gastrobar promises a dining experience that’s as dynamic as it is delicious.",
      link: "https://bullagastrobar.com/locations/winter-park/",
      image:
        "https://bullagastrobar.com/wp-content/uploads/2024/06/Bulla-Summer-Menu-Post.jpg",
    },
    {
      title: "The Porch Winter Park",
      description:
        "The Porch Winter Park is a lively and inviting spot that perfectly blends a laid-back atmosphere with the vibrant energy of Winter Park. Located in the heart of this charming community, The Porch is where friends and family gather to enjoy classic American fare with a creative twist. The website showcases the restaurant's commitment to delivering a memorable dining experience, whether you're stopping by for a casual brunch, a hearty lunch, or a fun-filled evening with craft beers and cocktails. With a menu that features everything from comfort food favorites to fresh, locally-inspired dishes, The Porch is all about great food, good times, and the kind of warm hospitality that makes you feel right at home. Whether you’re planning a visit or exploring their offerings online, The Porch Winter Park welcomes you to kick back, relax, and enjoy the best of what Winter Park has to offer.",
      link: "https://www.theporchwinterpark.com/",
      image:
        "https://www.theporchwinterpark.com/wp-content/uploads/2024/02/The-Porch-Meatery-and-Market-Logo-09.26.23-1536x1155.webp",
    },
    {
      title: "Santiago’s Bodega",
      description:
        "Santiago’s Bodega embodies the heart and soul of its original island home in Key West, FL. Where characters, stories, cultures and food combine to create the perfect union. Relaxed, eclectic, perhaps even a little odd elsewhere, but one human family at The Bodega.",
      link: "https://santiagosbodega.com/",
      image:
        "https://images.squarespace-cdn.com/content/v1/6084a1a26b4de43d1b118654/1620499387760-G6CBGN1M0D39HRBPQEGP/chicken_skewers.jpg?format=750w",
    },
  ];

  return (
    <div className="board">
      {events.map((event, index) => (
        <Card
          key={index}
          title={event.title}
          description={event.description}
          link={event.link}
          image={event.image}
        />
      ))}
    </div>
  );
};

export default Board;
