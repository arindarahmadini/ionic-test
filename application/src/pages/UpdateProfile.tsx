import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonButton, IonContent, IonList, IonItem, IonLabel, IonInput } from '@ionic/react';
import firebase from '../config/firebase'

const UpdateProfile: React.FC = () => {
  const [name, setName] = useState('');
  const [bod, setBod] = useState('');
  const dbRef = firebase.firestore().collection('users');
  const history = useHistory();

  function update() {
    if(name && bod) {
      dbRef.add({name, bod})
    }
    history.push('/profile')
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Update Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
        <IonContent>
          <IonList>
            <IonItem>
              <IonLabel position="fixed">Name</IonLabel>
              <IonInput value={name} placeholder="Enter your name" onIonChange={e => setName(e.detail.value!)}></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="fixed">Birth of Date</IonLabel>
              <IonInput value={bod} type="date" onIonChange={e => setBod(e.detail.value!)}></IonInput>
            </IonItem>
          </IonList>
          <IonButton onClick={update}>Save</IonButton>
        </IonContent>
      </IonPage>
  );
};

export default UpdateProfile;
