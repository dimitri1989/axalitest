'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { IoIosSearch } from 'react-icons/io';
export default function CityseachHendler() {
  //const [inpitValue, setInpitValue] = useState('');
  const router = useRouter();
  function SubmitHandler(event) {
    event.preventDefault();
    const selectedCity = event.target.value.value;
    router.push(`/${selectedCity}`);
    //console.log(event.target.value.value);
  }
  return (
    <div className="citySearch">
      <form onSubmit={SubmitHandler}>
        <input type="text" name="value" placeholder='მოძებნე ქალაქი' />
        <button type="submit" className='subbutton' title='ძებნა'>
          <IoIosSearch  className="IoIosSearch" />
        </button>
      </form>
    </div>
  );
}
