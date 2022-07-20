import "./navbar2.css";
import { useState, useEffect } from "react";
import { items } from "../actions/user";
import { DefaultContext } from "../Context";
import { useContext } from "react";
import { useNavigate } from "react-router";

// jshint ignore:start

const SecondPage = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState();
  const [imagesFilter, setImagesFilter] = useState();
  const [seacrhImage, setSearchImage] = useState();
  const { setTitle } = useContext(DefaultContext);

  useEffect(() => {
    items().then((response) => {
      setImages(response);
      setImagesFilter(response);
      setSearchImage(response);
    });
  }, []);

  const SearchInput = () => {
    let arr = [];
    if (seacrhImage == "") {
      images.forEach((element) => {
        arr.push(element);
      });
    } else {
      images.forEach((element) => {
        if (element.title.toLowerCase().includes(seacrhImage.toLowerCase())) {
          arr.push(element);
        }
      });
    }
    setSearchImage(arr);
  };
  const FilterCategory = (ind) => {
    let arr = [];
    let typer = buttons[ind];
    if (ind === 0) {
      images.forEach((element) => {
        if (element.type === "Обложка") {
          arr.push(element);
        }
      });
    } else {
      images.forEach((element) => {
        if (element.category === typer && element.type === "Обложка") {
          arr.push(element);
        }
      });
    }
    setImagesFilter(arr);
  };

  // const ImageUploader = (ind) => {
  //   let arr = [];
  //   console.log("hey");
  //   let type = titles[ind];

  //   images.forEach((element) => {
  //     if (element.title == type) {
  //       console.log("Get");
  //       saveAs(element.image, "image.jpg");
  //     }
  //   });

  //   setDownloadImage(arr);
  // };

  const handleTitle = (titleTemplate) => {
    setTitle(images.filter((image) => image.title === titleTemplate));
    navigate("/content");
  };

  // const [title, setTitle] = useState();
  // const titles = ["Тёмный лорд", "Синий огурец", "Зебровый пончик"];
  const buttons = ["Все", "Бизнес", "Творчество", "Блог"];

  return (
    <div className="secondpage">
      <div className="searcher">
        <form className="SecPageForm">
          <div className="SecPageInput">
            {images.map((item, index) => {
              return (
                <input
                  key={index}
                  type="text"
                  name="search"
                  placeholder="Поиск категорий"
                  onChange={() => {
                    SearchInput(index);
                  }}
                />
              );
            })}
          </div>
        </form>
        <div className="filterpack">
          <img
            className="filter"
            src={require("../imgs/filter.png")}
            alt="filter icon"
          />
        </div>
      </div>
      <div className="buttonsmap">
        {buttons.map((item, index) => (
          <button
            className="mapbuttons"
            onClick={() => FilterCategory(index)}
            key={index}
          >
            <p className="buttons"> {item}</p>
          </button>
        ))}
      </div>
      <div className="products1">
        {images ? (
          <>
            {imagesFilter.map((item, index) => {
              return item.type === "Обложка" ? (
                <div key={index} className="subproduct1">
                  <div className="page1">
                    {console.log(item)}
                    <div
                      className="el1"
                      onClick={() => handleTitle(item.title)}
                    >
                      <a>
                        <img
                          className="iproduct1"
                          src={item.image}
                          alt="template"
                        />
                        <p className="stproduct1">{item.title}</p>
                        <p className="mstproduct1">{item.subtitle}</p>
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <> </>
              );
            })}
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default SecondPage;
