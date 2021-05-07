import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonButton, IonLoading, IonRedirect } from '@ionic/react';
import { Link, useHistory } from 'react-router-dom' 
import { userLogin } from '../config/firebase'
import { toast } from '../components/toast'

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const history = useHistory()

  async function login() {
    setBusy(true)
    const res = await userLogin(email, password)
    if (!res) {
      toast('Invalid email or password')
    }
    setBusy(false)
    history.push('/profile')
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading message="Please wait..." duration={0} isOpen={busy}/>
      <IonContent>
        <IonList>
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput value={email} placeholder="Enter email" onIonChange={e => setEmail(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput value={password} type="password" placeholder="Enter password" onIonChange={e => setPassword(e.detail.value!)}></IonInput>
          </IonItem>
        </IonList>
        <IonButton onClick={login}>Login</IonButton>
        <p>New here? <Link to="/register">Register</Link></p>
      </IonContent>
    </IonPage>
  );
};

export default Login;
