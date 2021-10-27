import {useEffect, useState} from 'react';
import React from 'react';

import BerryImage from '../BerryImage/BerryImage';
import * as styles from './Berry.module.css';
import ModalBerry from '../ModalBerry/ModalBerry';

import {Button, Card} from  'react-bootstrap';
import {Data, BerryData} from '../Models/interfaces'



function Berry  (parametros: BerryData)  {

   const [berries, setBerry] = useState<Data | undefined>(undefined);
   const [modalShow, setModalShow] = React.useState(false);
   

  useEffect(() => { //faz a chamada, mas nao tem resposta
    fetch(parametros.url)
    .then((response) => response.json()) //espera a resposta
    .then((data)=> setBerry(data)); //espera o json ficar pronto
  }, []);

  
 if(!berries){
   //Resposta enquanto não temos a informação
  return (
  
    <div className={styles.default.Berry} data-testid="Berry">
      {parametros.name}
           
      carregando berries...

    </div>
  )
  } else{ 
    //Resposta quando temos a informação
    
  return (
    <div>

      <div>
      <Card>
        <BerryImage name={berries.item.name} url={berries.item.url} />

        <Card.Body>
          <Card.Text>
          {berries.name.toUpperCase()}
          </Card.Text>

          <Button variant="primary" onClick={() => setModalShow(true)}>
            Informações
          </Button>

          <ModalBerry
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </Card.Body>
      </Card>
       <br />
        
      

      
      </div>

     {/* /* { <div className={styles.default.Berry} data-testid="Berry">
        
        {berries.name}
       <BerryImage name={berries.item.name} url={berries.item.url} />
        <ul>
          <li>
            Natural Gift Power:{berries.natural_gift_power}
          </li>
          <li>
            Smoothness:{berries.smoothness}
          </li>
          <li>
            Growth Time:{berries.growth_time}
          </li>
        </ul>
        
      </div> } */}
      
    </div> 
  ) 
  }
}

export default Berry;
