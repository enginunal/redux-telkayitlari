import Kayit from './Kayit';
import { useSelector } from "react-redux";

function Kayitlar() {
  const kayitlar = useSelector(telKayitlari => telKayitlari);

  return (
      <div>
        { kayitlar.map(kayit => (<Kayit kayit={kayit} />))  }
      </div>
    );
  }
  
  export default Kayitlar;
  