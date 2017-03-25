import React, { Component } from 'react';
import { StyleSheet, Text, View, Slider, Button } from 'react-native';
import {Actions} from "react-native-router-flux";
import NewsView from './news';
import Swiper from 'react-native-swiper';


// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 20,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    slider: {
        width: 300,
        height: 10
    }
});

// View
class ListNewsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [
                {title: 'Éteindre ses lumières pour la planète', time: 7, description: 'Les grandes villes du monde se plongent dans l\'obscurité samedi à l\'occasion du dixième anniversaire de l\'initiative « Une heure pour la Terre », une mobilisation internationale contre le réchauffement climatique.', image: 'https://images.radio-canada.ca/w_635,h_357/v1/ici-info/16x9/opera-sydney-australie.jpg', body: "<p>Un texte de <strong>Julie Tremblay</strong></p>\n<p>Selon Seachoice - une coalition de groupes environnementalistes dont fait partie la Fondation David Suzuki - l'étiquetage des produits de la mer est déficient au Canada. Le groupe considère que les Canadiens «&nbsp;mangent dans le noir&nbsp;» et n'ont pas accès aux informations nécessaires pour bien choisir ce qu'ils consomment.</p>\n<blockquote>\n<p>Si l'on met en parallèle les pratiques européennes et américaines, on voit que le Canada arrive bon dernier en termes d'information qui est transmise au consommateur.</p>\n<footer>\nLouise Hénault-Ethier, chef des projets scientifiques pour la Fondation David Suzuki\n</footer></blockquote>\n<!--{\"href\":\"https://services.radio-canada.ca/hackathon2017/neuro/v1/news-stories/1023905#a0\"}-->\n<p>Selon la chef des projets scientifiques pour la Fondation David Suzuki, Louise Hénault-Éthier, en plus de manquer d'information, les étiquettes canadiennes sont parfois frauduleuses, particulièrement en ce qui a trait à l'origine des produits.</p>\n<p>Elle explique par exemple que certains poissons pêchés dans le fleuve Saint-Laurent, mais transformés en Chine porteraient l'étiquette «&nbsp;produit de Chine&nbsp;».</p>\n<div class=\"framed\">\n<p><strong>Données manquantes sur l'étiquetage canadien qui devraient être disponibles, selon le groupe Seafood&nbsp;:</strong></p>\n<ul>\n<li>Nom scientifique de l'espèce (il existe par exemple plus de 100 espèces de crabes, impossibles à distinguer actuellement en épicerie)&nbsp;;</li>\n<li>Type de pêche utilisé&nbsp;;</li>\n<li>Endroit où le poisson a été pêché (pas seulement le pays où a été faite la dernière transformation)&nbsp;;</li>\n<li>Méthode de production (espèce d'élevage ou sauvage).</li>\n</ul>\n</div>\n<!--{\"href\":\"https://services.radio-canada.ca/hackathon2017/neuro/v1/news-stories/1023905#a1\"}-->\n<p>Mme Hénault-Éthier ajoute que les usines de transformation possèdent déjà toutes les informations ci-haut mentionnées, puisque bon nombre de leurs produits sont destinés à l'exportation et doivent se soumettre à des normes plus élevées.</p>\n<p>Elle souligne qu'il ne serait pas plus compliqué d'ajouter ces données à l'étiquetage des poissons destinés au marché canadien.</p>\n<blockquote>\n<p class=\"quote\">Pour l'instant, ce que le consommateur voit, c'est encore moins que ce qui est exigé par l'Agence canadienne des aliments.</p>\n<footer>\nLouise Hénault-Éthier\n</footer></blockquote>\n<p>L'Agence canadienne d'inspection des aliments procède actuellement à une modernisation de l'étiquetage des produits de la mer, notamment en ce qui a trait au pays d'origine des poissons.</p>\n<p>Le directeur de l'Association québécoise de l'industrie de la pêche (AQIP), Jean-Paul Gagné, n'avait pas retourné nos appels à ce sujet au moment d'écrire ces lignes.</p>"},
                {title: 'RDC : une quarantaine de policiers décapités', time: 5, description: 'Des miliciens ont décapité une quarantaine de policiers après leur avoir tendu une embuscade vendredi dans le sud de la République démocratique du Congo (RDC), ont annoncé des responsables locaux samedi. Des miliciens ont décapité une quarantaine de policiers après leur avoir tendu une embuscade vendredi dans le sud de la République démocratique du Congo (RDC), ont annoncé des responsables locaux samedi.', image: 'https://images.radio-canada.ca/w_635,h_357/v1/ici-info/16x9/congo-rdc-casques-bleus.jpg'}
            ]
        };
    }
    render() {
        var news = this.state.news.map((n, i) => {
            return (<NewsView key={'news_' + i} news={n} />);
        });
        return (
            <View style={styles.container}>
                <Swiper style={styles.wrapper} showsButtons={false} showsPagination={false}>
                    {news}
                </Swiper>
            </View>
        );
    }
}

module.exports = ListNewsView;
