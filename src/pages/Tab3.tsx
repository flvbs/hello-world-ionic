import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Hello, World!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard color="light">
          <IonCardHeader>
            <IonCardSubtitle>O que é Ionic?</IonCardSubtitle>
            <IonCardTitle>Ionic</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          O Ionic é um Framework Open Source, 
          gratuito, sobre a licença MIT, para desenvolvimento 
          de aplicações mobile híbridas (multiplataforma).
      </IonCardContent>
        </IonCard>
        <IonCard color="light">
          <IonCardHeader>
            <IonCardSubtitle>Quem desenvolveu?</IonCardSubtitle>
            <IonCardTitle>Origens</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          Desenvolvido por Max Lynch, 
          Ben Sperry e Adam Bradley da Drifty Co., 
          sua primeira versão teve seu lançamento em 2013.
      </IonCardContent>
        </IonCard>
        <IonCard color="light">
          <IonCardHeader>
            <IonCardTitle>Mais informações</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          Projetado para funcionar e ser 
          exibido em diferentes plataformas, 
          possui um design limpo, simples e funcional,
           com componentes padrões, tipografia, paradigmas
            interativos e diversos templates.
      </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
