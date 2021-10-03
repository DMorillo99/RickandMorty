import { Container } from 'react-bootstrap';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/main.css';
import Image from "react-bootstrap/Image";
import {
    IonApp,
    IonContent,
    IonHeader,
    IonTitle,
    IonButton,
} from "@ionic/react";

export default class Footer extends React.Component {
    state = {
        title: `Rick'` + "s App",
    };
    render() {
        return (
            <Container fluid className="Footer">
                <IonTitle class="ion-text-center">
                    <h1>{this.state["title"]}</h1>
                    <p>by Dmorillo99 2021</p>
                </IonTitle>
            </Container>
        );
    }
}
