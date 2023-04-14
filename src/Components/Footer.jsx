import React from 'react'

function Footer() {
  return (
    <div className='fixed-bottom mb-2' >
        <footer className="text-center text-white bg-secondary mb-0" >
  <div className="container ">
    <section className="mb-4">
      <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-facebook-f"></i></a>

      <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-twitter"></i></a>

      <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-google"></i></a>

      <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-instagram"></i></a>

      <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-linkedin"></i></a>
      <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-github"></i></a>
    </section>
  </div>

  <div className="text-center text-dark p-3" >
    © 2020 Copyright:
    <a className="text-dark " href="#">Dreamer's.in</a>
  </div>
</footer>
    </div>
  )
}

export default Footer