import { useSelector } from "react-redux";

function Footer() {
  const kayitlar = useSelector(telKayitlari => telKayitlari);

    return (
      <div className='footer'> 
        <h3>&copy; Engin Ünal - Toplam {kayitlar.length} kayıt listelendi</h3>
      </div>
    );
  }
  
  export default Footer;
  