import { useState } from "react";
import { useDispatch } from "react-redux";
import { telKaydiEkle } from "../KayitlarActions";

function YeniEkle() {
  const [adi, setAdi] = useState('');
  const [telNo, setTelNo] = useState('');
  const dispatch = useDispatch();

  const Ekle = () => {
    dispatch(telKaydiEkle({adSoyad: adi, telNo: telNo}));
  }

  return (
      <div className='header'>
        <input type='text' placeholder='Ad soyad' value={adi} onChange={e => setAdi(e.target.value) } ></input>
        <input type='text' placeholder='Tel No' value={telNo} onChange={e => setTelNo(e.target.value)} ></input>
        <button onClick={Ekle}>Ekle</button>
      </div>
  );
}

export default YeniEkle;
