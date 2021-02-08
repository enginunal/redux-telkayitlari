import { useDispatch } from "react-redux";
import { telKaydiSil } from "../KayitlarActions";

function Kayit(props) {
  const dispatch = useDispatch();

  const Sil = () => {
    dispatch(telKaydiSil({id: props.kayit.id}));
  }

    return (
      <div className='kayit'>
        <h3>{props.kayit.adSoyad}</h3>
        <h3>{props.kayit.telNo}</h3>
        <button onClick={Sil}>sil</button>
      </div>
    );
  }
  
  export default Kayit;
  