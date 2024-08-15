import { IoIosArrowDown } from 'react-icons/io';
import CitySearch from './citySearch2';
import CitySelect from './citySelect';
import Link from 'next/link';
export default function Feader() {
  return (
    <header>
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-lg ">
            <div className="container d-flex  navContainer">
              <Link className="navbar-brand" href="/">
                amindi.me
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end w-100">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      href="/">
                      ამინდის პროგნოზი
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link  active"
                      aria-current="page"
                      href="/telavi">
                      თელავი
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
