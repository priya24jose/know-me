import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import FriendShow from "./friendshow";

const friend = [
    {
      title : "Aleena",
      imageUrl : "https://i0.wp.com/www.scconline.com/blog/wp-content/uploads/2020/10/ALEENA_ANABELLY_A.jpg?fit=887%2C1057&ssl=1",
      id:'1'
    },
    {
      title : "Ammu",
      imageUrl : "https://i.pinimg.com/originals/6f/ff/ee/6fffee852cc03d942a13afc88ab17ed5.jpg",
      id:'2'
  
    },
    {
      title : "Athira",
      imageUrl : "https://matriarchalislam.com/wp-content/uploads/2020/07/Scholars-03.jpg",
      id:'3'
  
    },
    {
      title : "Archana",
      imageUrl : "https://i.pinimg.com/280x280_RS/83/26/48/832648fe18ea0b44fe57e9115378dc61.jpg",
      id:'4'
    },
    {
      title : "Betzy",
      imageUrl: "https://i.pinimg.com/originals/65/a7/dd/65a7ddc48915192dab5f8f0b47d8fd24.jpg",
      id:'5'
    },
    {
      title : "Bibiya",
      imageUrl : "https://static.toiimg.com/photo/msid-75024747/75024747.jpg?303674 ",
      id:'6'
    }, {
      title : "Charles",
      imageUrl : "https://i.pinimg.com/280x280_RS/11/77/a5/1177a52da79fd7398b4d1a482f607ceb.jpg",
      id:'7'
  
    },
    {
      title : "David",
      imageUrl : "https://pbs.twimg.com/profile_images/1372574146119430150/VHZ6vbID_400x400.jpg",
      id:'8'
  
    },
    {
      title : "Elbin",
      imageUrl : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Akash_Dasnayak.JPG/1200px-Akash_Dasnayak.JPG",
      id:'9'
  
    },
    {
      title : "Fida",
      imageUrl : "https://i.pinimg.com/736x/ac/25/de/ac25de0c4627222a453cd8e9cd03c5cc.jpg",
      id:'10'
  
    },
    {
      title : "Grace",
      imageUrl : "https://www.suntiros.com/wp-content/uploads/2018/09/Malavika-Menon-New-Hair-Style-Photos.jpg",
      id:'11'
  
    },
    {
      title : "Hasina",
      imageUrl : "https://i.pinimg.com/236x/ea/77/65/ea77656164680903908cbd654b1d57c6--beautiful-actresses-indian-actresses.jpg",
      id:'12'
  
    }, {
      title : "Ivan",
      imageUrl : "https://pbs.twimg.com/profile_images/1186929906329870338/9MuHLSGW_400x400.jpg",
      id:'13'
  
    },
    {
      title : "James",
      imageUrl : "https://upload.wikimedia.org/wikipedia/commons/c/c0/Jai_Akash_New.jpg",
      id:'14'
  
    },
    {
      title : "Jane",
      imageUrl : "https://www.thehindu.com/entertainment/movies/4ssboz/article30888485.ece/ALTERNATES/LANDSCAPE_1200/Priya-Bhavani-Shankar",
      id:'15'
  
    },
    {
      title : "Kiran",
      imageUrl : "https://static.toiimg.com/photo/msid-77348495/77348495.jpg?161263",
      id:'16'
  
    },
    {
      title : "Lilly",
      imageUrl : "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-img.instyle.com%2Fsites%2Fdefault%2Ffiles%2Fimages%2F2019%2F03%2Fgettyimages-1133743750.jpg",
      id:'17'
  
    },
    {
      title : "Malavika",
      imageUrl : "https://1847884116.rsc.cdn77.org/tamil/gallery/actress/malavikanair11315/malavika11102020_014.jpg",
      id:'18'
  
    },
    {
      title : "Noel",
      imageUrl : "https://pbs.twimg.com/profile_images/1362376610100338688/m_Nq5kkf_400x400.jpg",
      id:'19'
  
    },
    {
      title : "Praveeen",
      imageUrl : "https://pbs.twimg.com/profile_images/1084848937343873026/auxQjJWD.jpg",
      id:'20'
  
    },

  ];
  function Home() {
    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);
    const handleChange = e => {
      setSearchTerm(e.target.value);
    };
    React.useEffect(() => {
      const results = friend.filter(person =>
        person.title.toLowerCase().includes(searchTerm)
      );
      setSearchResults(results);
    }, [searchTerm]);
    return (
      <div>
        <Header/>
      <div className="friend" >
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
        <ul>
          {searchResults.map(({title,imageUrl}) => (
            <FriendShow  title={title} imageUrl={imageUrl}/>
          ))}
        </ul>
      </div>
      </div>
    );
  }
  export default Home;