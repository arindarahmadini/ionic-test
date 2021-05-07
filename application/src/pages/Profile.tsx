import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton} from '@ionic/react';

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
          <IonButton expand="block" routerLink="/update">Update Profile</IonButton>
          <IonButton expand="block" routerLink="/login">Logout</IonButton>
      </IonContent>
    </IonPage>
  )
}

export default Profile