import "./navbar2.css";
import { useState } from "react";
import { saveAs } from "file-saver";
import { DefaultContext } from "../Context";
import { useContext } from "react";

// jshint ignore:start

const ContentPage = () => {
  const [downloadImage, setDownloadImage] = useState();

  const { title } = useContext(DefaultContext);

  console.log(title);

  const ImageUploader = (ind) => {
    let arr = [];
    console.log("hey");
    let type = title[ind].title;

    title.forEach((element) => {
      if (element.title == type) {
        console.log("Get");
        saveAs(element.image, "image.jpg");
      }
    });

    setDownloadImage(arr);
  };

  return (
    <div className="secondpage">
      <div className="products1">
        {title ? (
          <>
            {title.map((item, index) =>
              item.type == "Сторис" ||
              item.type == "Пост" ||
              item.type == "Хайлайт" ? (
                <div
                  key={index}
                  className="subproduct1">
                  <div className="page1">
                    <div className="el1" onClick={() => ImageUploader(index)}>
                      <img
                        className="iproduct1"
                        src={item.image}
                        alt="template"
                      />
                      <p className="stproduct1">{item.type}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <> </>
              )
            )}
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ContentPage;
