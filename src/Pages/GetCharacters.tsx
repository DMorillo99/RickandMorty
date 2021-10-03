import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@ionic/react/css/ionic.bundle.css";
import "../styles/main.css";
import axios from "axios";

import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { Helmet } from "react-helmet";
import {
    IonApp,
    IonContent,
    IonHeader,
    IonButton,
    IonTitle,
    IonToolbar,
    IonCard,
    IonItemGroup,
    IonItem,
    IonItemDivider,
} from "@ionic/react";
import Footer from "../components/Footer";

export default class GetCharacterInfo extends React.Component {
    state = {
        title: `Rick'` + "s DataBase",
        dataSource: [],
        count: 1,
        url: "https://rickandmortyapi.com/api/character/?page=",
        changePage: false,
        findValue: "",
    };
    componentDidMount() {
        this.getCharacters();
    }
    //#region ChangeNumber
    IncrementItem() {
        this.setState({ changePage: true });
        if (this.state.count < 34) {
            this.setState({ count: this.state.count + 1 });
        }
        this.componentDidMount();
    }
    DecreaseItem() {
        this.setState({ changePage: true });
        if (this.state.count > 1) {
            this.setState({ count: this.state.count - 1 });
        }
        this.componentDidMount();
    }
    //#endregion

    getCharacters = async () => {
        await axios.get(this.state.url + this.state.count + "").then((data) =>
            this.setState({
                dataSource: data.data.results,
            })
        );
    };
    componentDidUpdate() {
        if (this.state.changePage == true) {
            this.componentDidMount();
            this.setState({ changePage: false });
        }
    }

    render() {
        const get = this.state.dataSource;
        const count = this.state.count;
        const ChangePage = this.state.changePage;
        console.log(ChangePage);
        console.log(count);

        return (
            <IonApp>
                <IonContent>
                    <div className="ToolBarMenu">
                        <IonHeader>
                            <IonToolbar>
                                {this.state.count < 2 ? (
                                    <IonButton
                                        disabled
                                        slot="start"
                                        onClick={() => this.DecreaseItem()}
                                    >
                                        <IonTitle>Prev</IonTitle>
                                    </IonButton>
                                ) : (
                                    <IonButton slot="start" onClick={() => this.DecreaseItem()}>
                                        <IonTitle>Prev</IonTitle>
                                    </IonButton>
                                )}

                                {this.state.count < 34 ? (
                                    <IonButton slot="end" onClick={() => this.IncrementItem()}>
                                        <IonTitle>Next</IonTitle>
                                    </IonButton>
                                ) : (
                                    <IonButton
                                        disabled
                                        slot="end"
                                        onClick={() => this.IncrementItem()}
                                    >
                                        <IonTitle>Next</IonTitle>
                                    </IonButton>
                                )}

                                <IonTitle class="ion-text-center">
                                    <h1>{this.state["title"]}</h1>
                                </IonTitle>
                            </IonToolbar>
                            <div className="col text-center">
                                <IonItemDivider></IonItemDivider>
                                <a href="/">
                                    <IonButton color="danger" expand="block">
                                        Go Home
                                    </IonButton>
                                </a>
                            </div>
                        </IonHeader>
                    </div>
                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>{this.state["title"]}</title>
                    </Helmet>
                    {get.map((item) => {
                        return (
                            <div className="GroupResponsiveCard">
                                <IonItemGroup className="Cards">
                                    <IonCard>
                                        <Card>
                                            <Image src={item["image"]} />
                                            <Card.Body>
                                                <IonTitle>
                                                    <h2 style={{ float: "left" }}> {item["name"]} / </h2>
                                                    <h5 style={{ marginTop:"24px" }}>&nbsp;{item["species"]}</h5>
                                                </IonTitle>
                                                <Card.Text>
                                                    <div>
                                                        <div style={{ float: "left" }}>
                                                            {/* Alive */}
                                                            {item["status"] == "Alive" ? (
                                                                <div>
                                                                    <span
                                                                        style={{
                                                                            height: "10px",
                                                                            width: "10px",
                                                                            display: "inline-block",
                                                                            backgroundColor: "Green",
                                                                        }}
                                                                    ></span>
                                                                </div>
                                                            ) : (
                                                                <div></div>
                                                            )}

                                                            {/* Dead */}
                                                            {item["status"] == "Dead" ? (
                                                                <div>
                                                                    <span
                                                                        style={{
                                                                            height: "10px",
                                                                            width: "10px",
                                                                            display: "inline-block",
                                                                            backgroundColor: "Red",
                                                                        }}
                                                                    ></span>
                                                                </div>
                                                            ) : (
                                                                <div></div>
                                                            )}
                                                            {/* unknown */}
                                                            {item["status"] == "unknown" ? (
                                                                <div>
                                                                    <span
                                                                        style={{
                                                                            height: "10px",
                                                                            width: "10px",
                                                                            display: "inline-block",
                                                                            backgroundColor: "Gray",
                                                                        }}
                                                                    ></span>
                                                                </div>
                                                            ) : (
                                                                <div></div>
                                                            )}
                                                        </div>
                                                        <h5 style={{ paddingLeft: 15 }}>{item["status"]}</h5>
                                                    </div>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </IonCard>
                                </IonItemGroup>
                            </div>
                        );
                    })}
                    <div>
                        <Footer />
                    </div>
                </IonContent>
            </IonApp>
        );
    }
}
