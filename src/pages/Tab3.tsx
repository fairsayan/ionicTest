import React from 'react';
import { IonHeader, IonToolbar, IonPage, IonTitle, IonContent, withIonLifeCycle } from '@ionic/react';
import * as $ from "jquery"

interface IProps {
}

interface IState {
  name: string;
}

class Tab3Page extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props)

    this.state = {
      name: 'undefined'
    }
  }

  ionViewWillEnter() {
    $.get('https://springbot-demo.herokuapp.com/api/v1/persons/2', (data) => {
      this.setState({name: data.name})
    })
  }


  render() {
    var name:String = this.state.name
    console.info(this.state)

    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Tab Three</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">ciao <b>{ name }</b></IonContent>
      </IonPage>
    )
  }
}

export default withIonLifeCycle(Tab3Page);
