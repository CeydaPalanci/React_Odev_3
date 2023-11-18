import "./App.css";
import React from 'react'

function Arama({aramaMetni,onSearch}){
  
  function handleChange(event){ 

    setAramaMetni(event.target.value);
    props.onSearch(event);

  }
  
  return(
    <div>
      <label htmlFor="arama">Ara: </label>  
      <input id="arama" type="text" onChange={onSearch} value={aramaMetni}/>
      <p>
        
      </p>
    </div>
   )
}

function Yazi({id,url,baslik,yazar,yorum_sayisi,puan}){
  return(
   <li key={id}>
              <span>
                <a href={url}>{baslik}</a>, 
              </span>
              <span><b>Yazar:</b> {yazar}, </span>
              <span><b>Yorum Sayısı:</b> {yorum_sayisi}, </span>
              <span><b>Puan:</b> {puan}</span>
            </li>
  )
}

function Liste(props){
    return(
      <ul>
        {props.yazilar.map(function (yazi) {
          return (
          
          <Yazi key={yazi.id} {...yazi} />
            
          )
        })}
      </ul>
    )
}

function App() {
  const [aramaMetni,setAramaMetni] = React.useState(localStorage.getItem("aranan") ||"");

  const yaziListesi = [
    {
      baslik: "React Öğreniyorum",
      url: "www.sdu.edu.tr",
      yazar: "Sinan Yüksel",
      yorum_sayisi: 3,
      puan: 4,
      id: 0,
    },
    {
      baslik: "Web Teknolojileri ve Programlama",
      url: "wwww.google.com.tr",
      yazar: "Asım Yüksel",
      yorum_sayisi: 2,
      puan: 5,
      id: 1,
    },
    {
      baslik: "Kotlin ile Mobil Programlama ",
      url: "wwww.google.com.tr",
      yazar: "Ceren Uysal",
      yorum_sayisi: 5,
      puan: 4,
      id: 2,
    },
    {
      baslik: "Dorian Gray'in Portresi",
      url: "wwww.google.com.tr",
      yazar: "Oscar Wilde",
      yorum_sayisi: 1,
      puan: 5,
      id: 3,
    },
    {
      baslik: "Seven",
      url: "wwww.google.com.tr",
      yazar: "Andrew Kevin Walker",
      yorum_sayisi: 3,
      puan: 5,
      id: 4,
    },
  ];

const arananYazilar= yaziListesi.filter(
  function (yazi){
    return yazi.baslik.toLowerCase().includes(aramaMetni.toLowerCase()) || yazi.yazar.toLowerCase().includes(aramaMetni.toLowerCase())
    
  }
);


  //1.aşama: callback metodu oluşturma 
  function handleSearch(event){
    setAramaMetni(event.target.value);
    //localStorage.setItem("aranan",event.target.value);


  }

  React.useEffect(() => {
    localStorage.setItem("aranan",aramaMetni);
  },[aramaMetni]);

  return (
    <div>
      <h1>Yazılar</h1>
      <Arama aramaMetni={aramaMetni} onSearch={handleSearch}/>
      <strong>{aramaMetni} aranıyor...</strong>
      <hr />
      <Liste yazilar={arananYazilar} />
    </div>
  );

}
  export default App;