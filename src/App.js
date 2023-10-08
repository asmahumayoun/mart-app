function App() {
  let products = [
    {
      id: 1,
      title: "Mobile Phone",
      description:
        "Brand new smartphone for sale, perfect condition, unbeatable price",
      price: "$500",
      image: "/images/phone.jpg",
    },
    {
      id: 2,
      title: "Laptop",
      description:
        "Gently used laptop for sale, excellent performance, don't miss",
      price: "$500",
      image: "/images/laptop.jpg",
    },
    {
      id: 3,
      title: "Bag",
      description:
        "Chic designer bag up for grabs, the perfect fashion statement",
      price: "$500",
      image: "/images/bag.jpg",
    },
    {
      id: 4,
      title: "Books",
      description:
        "Dive into a world of knowledge with a variety of captivating books",
      price: "$500",
      image: "/images/book.jpg",
    },
    {
      id: 5,
      title: "Watch",
      description:
        "Sophisticated watch available, a timeless addition to your collection",
      price: "$500",
      image: "/images/watch.jpg",
    },
    {
      id: 6,
      title: "Bottle",
      description:
        "Stay hydrated with this reusable water bottle, eco-conscious and stylish",
      price: "$500",
      image: "/images/bottle.jpg",
    },
    {
      id: 7,
      title: "Earbuds",
      description:
        "High-quality earbuds for sale, offering unparalleled sound quality on the go",
      price: "$500",
      image: "/images/ear.jpg",
    },
  ];
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="#"
            style={{ color: "red", fontWeight: "bold" }}
          >
            Mart
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-danger" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {products.map((product) => (
            <div className="col" key={product.id}>
              <div className="card">
                <span className="border border-danger rounded">
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    style={{ height: "350px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5
                      className="card-title"
                      style={{ color: "red", fontWeight: "bold" }}
                    >
                      {product.title}
                    </h5>
                    <p className="card-text">{product.description}</p>
                    <a href="#" className="btn btn-danger">
                      Add to Cart
                    </a>
                  </div>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
