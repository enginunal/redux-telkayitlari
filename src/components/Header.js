import { useSelector } from "react-redux";

function Header() {
  const kayitlar = useSelector(telKayitlari => telKayitlari);

    return (
      <div className='header'>
        <h3>Tel Rehberi - [ {kayitlar.length} ]</h3>
      </div>
    );
  }
  
  export default Header;
  