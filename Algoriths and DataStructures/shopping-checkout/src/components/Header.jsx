import React from "react";

export default function Header(props) {
  return (
    <Header className="row block center">
      <div>
        <a href="#/">
          <h1>Small Shopping Cart</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">Cart</a>
      </div>
    </Header>
  );
}
