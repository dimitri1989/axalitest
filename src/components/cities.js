import CitySelect from './citySelect';
import CitySearch2 from './citySearch2';
export default function citiesHandler() {
  return (
    <div className="cities mt-3 mb-3">
      <div className="container">
        <div className="row justify-content-between cities-class  ">
          <div className="col-12  col-md-3">
            <CitySelect />
          </div>
          <div className="col-6 d-flex justify-content-end col-12 col-md-6 " >
            <CitySearch2 />
          </div>
        </div>
      </div>
    </div>
  );
}
