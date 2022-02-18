import React, { useState, useEffect, useContext } from "react";
import { Grid, Item, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import { QuestionContext } from "../../globalContext/globalState";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// import "./NewRecommendation.css";
import "./styleRecommendation.css";
import OwlCarousel from "react-owl-carousel";

import useStyles from "./style.js";
import { fontSize } from "@mui/system";
import Loading from "../Loading/Loading";

function NewRecommendation() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [flag, setFlag] = useState(false);
  // const { questionData } = useContext(QuestionContext);
  const [products, setProducts] = useState(null);
  const getProduct = async (ans, product) => {
    // console.log(ans1, ans2, ans3);
    const apiUrl = `http://localhost:8000/answer/${ans}/Refrigerator`;
    const { data } = await axios.get(apiUrl);
    // console.log(data);
    setProducts(data);
  };
  useEffect(() => {
    if (localStorage.getItem("questionData")) {
      const { ans, product } = JSON.parse(localStorage.getItem("questionData"));
      // console.log(data);
      getProduct(ans, product);
      setFlag(true);
    }
  }, []);
  // console.log(products);
  if (!flag) {
    return <Loading />;
  }

  return (
    <div style={{ backgroundColor: "lightgrey " }}>
      <h1 className="text-center mb-5">All Best Recommendations For You</h1>

      <Grid container>
        <Grid item xs={4} md={2} style={{ paddingBottom: "70px" }}>
          <div style={{ height: "55%" }}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <h2 style={{ textAlign: "center" }}>Product Specification</h2>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p
              className="check"
              style={{
                textDecoration: "underline",
                fontWeight: "600",
                fontSize: "18px",
              }}
            >
              Value for money
            </p>
            <p
              style={{
                textDecoration: "underline",
                fontWeight: "600",
                fontSize: "18px",
              }}
            >
              Brand
            </p>
            <p
              style={{
                textDecoration: "underline",
                fontWeight: "600",
                fontSize: "18px",
              }}
            >
              Popular
            </p>
            <p
              style={{
                textDecoration: "underline",
                fontWeight: "600",
                fontSize: "18px",
              }}
            >
              After Sales
            </p>
            <p
              style={{
                textDecoration: "underline",
                fontWeight: "600",
                fontSize: "18px",
              }}
            >
              Price
            </p>
            <p
              style={{
                textDecoration: "underline",
                fontWeight: "600",
                fontSize: "18px",
              }}
            >
              Overall Score
            </p>
          </div>
        </Grid>

        {products && (
          <Grid item xs={8} md={10}>
            <OwlCarousel
              className="owl-theme"
              nav
              responsive={{
                0: {
                  items: 1,
                },
                600: {
                  items: 2,
                },
                1000: {
                  items: 4,
                },
              }}
            >
              {products.map((product, index) => {
                // console.log(product);
                return (
                  // <Grid
                  //   key={index}
                  //   item
                  //   xs={8}
                  //   style={{
                  //     border: "2px solid black",
                  //     paddingBottom: "50px",
                  //     borderRadius: "20px ",

                  //     marginRight: "10px",
                  //     boxShadow: "2px 2px 10px 2px ",
                  //     background: "linear-gradient( lightgrey ,lightpink ",
                  //   }}
                  // >
                  <div
                    style={{
                      border: "2px solid black",
                      paddingBottom: "50px",
                      // borderRadius: "20px ",
                      boxShadow: "2px 2px 10px 2px ",

                      background: "linear-gradient( lightgrey ,lightpink ",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        height: "55%",
                        backgroundColor: "lightgrey ",
                      }}
                    >
                      <img
                        src={product.Imageurl}
                        alt="Fridge"
                        style={{ width: "52%" }}
                      />
                      <p
                        style={{
                          color: "black",
                          fontWeight: "600",
                          fontSize: "20px",
                        }}
                      >
                        {product.Product}
                      </p>
                      <div style={{ display: "flex" }}>
                        <Button
                          className={classes.FlipkartClass}
                          href={product.Flipkart}
                        >
                          Flipkart
                        </Button>

                        <Button
                          className={classes.AmazonClass}
                          href={product.Amazon}
                        >
                          Amazon
                        </Button>
                        <Button
                          className={classes.RelianceClass}
                          href={product.Reliance}
                        >
                          Reliance
                        </Button>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <p
                        style={{
                          fontWeight: "700",
                          fontSize: "18px",
                          color: "black",
                        }}
                      >
                        {product.Valueformoney}
                      </p>
                      <p
                        style={{
                          fontWeight: "700",
                          fontSize: "18px",
                          color: "black",
                        }}
                      >
                        {product.Brand}
                      </p>
                      <p
                        style={{
                          fontWeight: "700",
                          fontSize: "18px",
                          color: "black",
                        }}
                      >
                        {product.Valueformoney}
                      </p>
                      <p
                        style={{
                          fontWeight: "700",
                          fontSize: "18px",
                          color: "black",
                        }}
                      >
                        {product.AfterSales}
                      </p>
                      <p
                        style={{
                          fontWeight: "700",
                          fontSize: "18px",
                          color: "black",
                        }}
                      >
                        {product.Price}
                      </p>
                      <p
                        style={{
                          fontWeight: "700",
                          fontSize: "18px",
                          color: "black",
                        }}
                      >
                        {product.Score}
                      </p>
                    </div>
                  </div>
                  // </Grid>
                );
              })}
            </OwlCarousel>
          </Grid>
        )}
      </Grid>
    </div>
  );
}

export default NewRecommendation;
