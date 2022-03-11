import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Header/Header.css";
import logo3 from "../Images/logo3.png";
import search from "../Images/header/search.png";
import connect from "../Images/header/account.png";
import fashion from "../Images/menu/fashion.png";
import flying from "../Images/menu/flying.png";
import food from "../Images/menu/food.png";
import house from "../Images/menu/house.png";
import menu from "../Images/menu/menu.png";
import { AiOutlineMail } from "react-icons/ai";

//mport emazon from "../images/eMazon.png";
// import {
//   ACCESS_LEVEL_GUEST,
//   // ACCESS_LEVEL_ADMIN,
//   //SERVER_HOST,
// } from "../config/global_constants";
//import Logout from "./Logout";

export default class Header extends Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       cars: [],
  //       appTitle: "Customers",
  //       searchText: "",
  //       placeholder: "Search by Name, Price, Year...",
  //     };
  //   }

  //   handleChange = (e) => {
  //     // this.setState({ [e.target.name]: e.target.value });

  //     const { cars, searchText } = this.state;
  //     // console.log(searchText)

  //     const filteredCars = cars.filter((cars) => {
  //       if (searchText === "") {
  //         console.log(searchText);
  //         return cars;
  //       } else if (
  //         cars.model.toLowerCase().includes(searchText.toLowerCase()) ||
  //         cars.year.toLowerCase().includes(searchText.toLowerCase()) ||
  //         cars.price == searchText
  //       ) {
  //         return cars;
  //       }
  //     });
  //   };
  render() {
    // const [placeholder] = useState("Search by Title, Director, Year...");

    return (
      <>
        <nav className="header">
          <Link to="/login">
            <img src={connect} />
          </Link>
          <Link to="/">
            <img src={logo3} className="header__logo" alt="Logo" />
          </Link>
          <div className="container-4">
            <input type="search" id="search" placeholder="Search..." />
            <button className="icon">
              <img src={search} />
            </button>
          </div>
        </nav>

        <div class="Categories">
          <div class="Categories__container">
            <a href="">
              <img src={menu} />
              <p>HOME</p>
            </a>
          </div>
          <div class="Categories__container">
            <a href="">
              <img src={flying} />
              <p>FLYING</p>
            </a>
          </div>
          <div class="Categories__container">
            <a href="">
              <img src={food} />
              <p>FOOD</p>
            </a>
          </div>
          <div class="Categories__container">
            <a href="">
              <img src={house} />
              <p>SPORT</p>
            </a>
          </div>
          <div class="Categories__container">
            <a href="">
              <img src={house} />
              <p>HOUSE</p>
            </a>
          </div>
          <div class="Categories__container">
            <a href="">
              <img src={fashion} />
              <p>FASHION</p>
            </a>
          </div>
        </div>
      </>
    );
  }
}
//  {
//    localStorage.accessLevel > ACCESS_LEVEL_GUEST ? (
//      <div className="header__optionTwo">
//        {localStorage.profilePhoto !== "null" ? (
//          <img
//            id="profilePhoto"
//            src={`data:;base64,${localStorage.profilePhoto}`}
//            alt=""
//          />
//        ) : null}
//        {/* <Logout /> */}
//        <p style={{ color: "red" }} className="">
//          Admin
//        </p>
//      </div>
//    ) : (
//      <span className="header__optionLineTwo">Login</span>
//    );
//  }

// {
//   localStorage.accessLevel > ACCESS_LEVEL_GUEST ? (
//     <div className="header__optionTwo">
//       {localStorage.profilePhoto !== "null" ? (
//         <img
//           id="profilePhoto"
//           src={`data:;base64,${localStorage.profilePhoto}`}
//           alt=""
//         />
//       ) : null}
//     </div>
//   ) : (
//     <span className="header__optionLineTwo">Sign Up</span>
//   );
// }

//to={"/Register"}


<div className="header__nav">
  <Link to="/login" className="header__link">
    <div className="header__option">
      <span className="header__optionLineOne">
        {/* Hello {user ? user : "Stranger"} */}
      </span>
      <span className="header__optionLineTwo">
        {/* Sign {user ? "Out" : "In"} */}
      </span>
    </div>
  </Link>
  <Link className="header__link" to="/">
    <div className="header__option">
      <span className="header__optionLineOne">Login</span>
    </div>
  </Link>
  <Link className="header__link" to="/">
    <div className="header__option">
      <span className="header__optionLineOne">SingUp</span>
    </div>
  </Link>
</div>;
