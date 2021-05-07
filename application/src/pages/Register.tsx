import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonButton, IonLoading } from '@ionic/react';
import { Link } from 'react-router-dom' 
import { toast } from '../components/toast'
import { userRegister } from '../config/firebase'

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [busy, setBusy] = useState(false);

  async function register() {
    setBusy(true)
    if(!email || !password || !confPassword ) {
      return toast('Email and password are required')
    } 
    if(password !== confPassword) {
      return toast('Passwords do not match!')
    }
    const res = await userRegister(email, password)
    if(res) {
      toast('You have registered successfully!')
    }
    setBusy(false)
    
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading message="Process your registration..." duration={0} isOpen={busy}/>
      <IonContent>
        <IonList>
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput value={email} placeholder="Enter email" onIonChange={e => setEmail(e.detail.value!)} required></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput value={password} type="password" placeholder="Enter password" onIonChange={e => setPassword(e.detail.value!)} required></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Repeat Password</IonLabel>
            <IonInput value={confPassword} type="password" placeholder="Repeat password" onIonChange={e => setConfPassword(e.detail.value!)} required></IonInput>
          </IonItem>
        </IonList>
        <IonButton onClick={register}>Register</IonButton>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </IonContent>
    </IonPage>
  );
};

export default Register;