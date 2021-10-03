import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.css";
import "@ionic/react/css/ionic.bundle.css";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import { Helmet } from "react-helmet";
import {
    IonApp,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton,
} from "@ionic/react";
import Footer from "../components/Footer";

export default class Home extends React.Component {
    state = {
        title: `Rick'` + "s Dimension",
    };
    render() {
        return (
            <IonApp>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{this.state["title"]}</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                </Helmet>
                <IonHeader>
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle class="ion-text-center">
                                <h1>{this.state["title"]}</h1>
                            </IonTitle>
                        </IonToolbar>
                    </IonHeader>
                </IonHeader>
                <IonContent>
                    {
                        //#region CarouselPart
                    }
                    <Carousel>
                        <Carousel.Item>
                            <Image
                                className="d-block w-100"
                                src="https://fondosmil.com/fondo/27333.jpg"
                                alt="Jerry sucks"
                                height="820"
                                width="1080"
                                fluid
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image
                                className="d-block w-100"
                                src="https://fondosmil.com/fondo/27337.jpg"
                                alt="Kill Jerry"
                                height="920"
                                width="1080"
                                fluid
                            />

                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image
                                className="d-block w-100"
                                src="https://fondosmil.com/fondo/27359.png"
                                alt="No se Jerry es un idiota"
                                height="920"
                                width="1080"
                                fluid
                            />

                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    <a href="/rickandmorty">
                        <IonButton color="danger" expand="block">
                            Hit to Jerry
                        </IonButton>
                    </a>
                    {
                        //#endregion
                    }

                    {
                        //#region Cardpart
                    }
                    <CardGroup>
                        <Card>
                            <Card.Img className="d-block w-100"
                                src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2021/05/rick-morty-temporada-5-2319587.jpg"
                                alt="Jerry sucks"
                            />
                            <Card.Body>
                                <Card.Title>Rick and Morty Api</Card.Title>
                                <Card.Text>
                                </Card.Text>
                                <a href="https://rickandmortyapi.com">
                                    <IonButton color="primary" expand="block">
                                        Here, Dumbass
                                    </IonButton>
                                </a>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img className="d-block w-100"
                                src="https://images6.alphacoders.com/656/656826.jpg"
                                alt="Jerry is a pussy"
                            />
                            <Card.Body>
                                <Card.Title>My GitHub</Card.Title>
                                <Card.Text>
                                </Card.Text>
                                <a href="https://rickandmortyapi.com">
                                    <IonButton color="primary" expand="block">
                                        Oh, Sorry is here
                                    </IonButton>
                                </a>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                    {
                        //#endregion
                    }
                    <Footer/>
                </IonContent>

            </IonApp>
        );
    }
}
