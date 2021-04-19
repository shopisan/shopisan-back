import React from 'react';
import { makeStyles, Typography } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    confid:{
        padding: "20vh 40px 0 40px",
        backgroundColor: "#FAFAFA",
        [theme.breakpoints.up('sm')]:{
            display: "flex",
            flexDirection: "column",
            padding: "10rem 5rem",
            alignItems: "baseline",
            marginTop: "10vh",
        },
        [theme.breakpoints.up('md')]:{
            padding: "10rem",
            marginTop: "0vh",
        }
    },
    h1: {
        fontFamily: "Poppins",
        fontWeight: "bold",
        color: "#41455c",
        fontSize: "1.5rem",
        [theme.breakpoints.up('sm')]:{
            fontSize: "3rem"
        },
        [theme.breakpoints.up('md')]:{
            fontSize: "5rem"
        }
    },
      h2:{
        fontFamily: "Poppins",
        fontWeight: "bold",
        color: "#41455c",
        fontSize: "0.8rem",
        marginTop: "1rem",
        [theme.breakpoints.up('sm')]:{
            fontSize: "1.2rem"
        },
        [theme.breakpoints.up('md')]:{
            fontSize: "2rem"
        }
    },
    body1: {
        fontFamily: "Poppins",
        margin: "2rem 0 0 0",
        fontSize: "0.7rem", 
        color: "#41455c",
        lineHeight: "1rem",
        [theme.breakpoints.up('sm')]:{
            fontSize: "0.8rem",
            lineHeight: "1rem",
            width: '80%',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: "0.9rem",
            lineHeight: '1.5rem'
        }
    },
}))


export default function PrivacyPolicy(){

    const classes = useStyles();

    return(
        <div className={classes.confid}>

            <Typography className={classes.h1}>Politique de confidentialité</Typography>
            <Typography className={classes.body1}>Mise à jour le 15/04/2021</Typography>
            <Typography className={classes.h2}>1. Parties et Objets</Typography>
            <Typography className={classes.body1}>SHOPISAN (ci-après <strong>"shopisan"</strong> ou le <strong>" Responsable du Traitement "</strong>)
            <br></br>
            // AJOUTER UNE ADDRESSE
            <br></br>
            Mail : 
            <br></br>
            Téléphone :
            <br></br>
            <br></br>
            shopisan établit la présente Politique de confidentialité dont l'objet est d'informer en toute transparence les Utilisateurs du site internet hébergé à l'adresse suivante : shopisan.dev, (ci-après le <strong>" Site "</strong> ), de la manière dont les données personnelles sont récoltées et traitées par shopisan.
            <br></br>
            Le terme <strong>" Utilisateur "</strong> fait référence à tout utilisateur, soit toute personne physique ou morale, qui visite ou interagit d'une quelconque manière avec le Site.
            <br></br>
            A ce titre, shopisan détermine tous les moyens et finalités techniques, juridiques et organisationnelles du traitement des données personnelles des Utilisateurs. shopisan s'engage à cet effet à prendre toutes les mesures nécessaires pour garantir un traitement des données personnelles conforme à la loi du 30 juillet 2018, relative à la protection des personnes physiques à l'égard des traitements des données à caractère personnel (ci-après, <strong>" la Loi "</strong>) et au Règlement européen du 26 avril 2016 relatif à la protection des données des personnes physiques à l'égard du traitement des données à caractère personnel et à la libre circulation de ces données (ci-après le <strong>" Règlement "</strong>).
            <br></br>
            shopisan est libre de choisir toute personne physique ou morale qui traite les données personnelles des utilisateurs à sa demande et pour son compte (ci-après le <strong>" Sous-traitant "</strong>). Le cas échéant, shopisan s'engage à sélectionner un Sous-traitant offrant des garanties suffisantes quant aux mesures de sécurité techniques et organisationnelles du traitement des données personnelles, au regard de la Loi et du Règlement.
            </Typography>

            <Typography className={classes.h2}>2. Traitement des données personnelles</Typography>
            <Typography className={classes.body1}>L'utilisation du Site par les Utilisateurs pourra entraîner la communication de données personnelles. Le traitement de ces données par shopisan, en sa qualité de Responsable du traitement, ou par les prestataires agissant au nom et pour le compte de shopisan, sera conforme à la Loi et au Règlement.)
            <br></br>
            Les données à caractère personnel seront traitées par shopisan, conformément aux finalités citées plus bas, via :
            <br></br>
            - Les demandes de contact
            <br></br>
            - Lors d'un passage de commande ou prise de réservation        
            </Typography>

            <Typography className={classes.h2}>3. Finalité du traitement des données personnelles</Typography>
            <Typography className={classes.body1}>Conformément à l'article 13 du Règlement, les finalités du traitement des données personnelles sont communiquées à l'Utilisateur et sont les suivantes :
            <br></br>
            - Afin de répondre au questions et demandes de contact des utilisateurs.
            <br></br>
            - Afin de pouvoir assurer les commandes et les réservations      
            </Typography>

            <Typography className={classes.h2}>4. Données personelles usceptibles d'ête traitées</Typography>
            <Typography className={classes.body1}>L'Utilisateur consent, lors de la visite et lors de l'utilisation du Site, que shopisan recueille et traite, selon les modalités et principes décrits dans la présente Politique de confidentialité, les données à caractère personnel suivantes :
            <br></br>
            - L'identité des utilisateurs qui envoient les formulaires assurant le fonctionnement du site.
            </Typography>

            <Typography className={classes.h2}>5. Consentement</Typography>
            <Typography className={classes.body1}>En accédant au Site et en l'utilisant, l'Utilisateur déclare avoir pris connaissance et marqué son accord de façon libre, spécifique, éclairée et univoque au traitement des données à caractère personnel la concernant. Cet accord porte sur le contenu de la présente Politique de confidentialité.
            <br></br>
            Le consentement est donné par l'acte positif par lequel l'Utilisateur a coché la case proposant la Politique de confidentialité en lien hypertexte. Ce consentement est une condition indispensable pour effectuer certaines opérations sur le Site ou pour permettre à l'Utilisateur d'entrer en relation contractuelle avec shopisan. Tout contrat liant shopisan et un Utilisateur portant sur les services et biens proposés sur le Site est subordonné à l'acceptation de la Politique de confidentialité par l'Utilisateur.
            <br></br>
            L'Utilisateur consent à ce que le Responsable du Traitement traite et recueille, conformément aux modalités et principes compris dans la présente Politique de confidentialité, ses données à caractère personnel qu'il communique sur le Site ou à l'occasion des services proposés par shopisan, pour les finalités indiquées plus haut.
            <br></br>
            L'Utilisateur a le droit de retirer son consentement à tout moment. Le retrait du consentement ne compromet pas la licéité du traitement fondé sur le consentement préalablement donné.
            </Typography>

            <Typography className={classes.h2}>6. Durée de conservation des données personnelles des utilisateurs</Typography>
            <Typography className={classes.body1}>Conformément à l'article 13 §2 du Règlement et de la Loi, le Responsable du Traitement ne conserve les données à caractère personnel que pendant le temps raisonnablement nécessaire pour permettre l'accomplissement des finalités pour lesquelles elles sont traitées.
            <br></br>
            Cette durée est dans tous les cas inférieure à : 1 an.
            </Typography>

            <Typography className={classes.h2}>7. Destinataires des données et divulgations à des tiers</Typography>
            <Typography className={classes.body1}>Les données personnelles peuvent être transmises aux préposés, collaborateurs, sous-traitants ou fournisseurs de shopisan qui offrent des garanties de sécurité des données adéquates, et qui collaborent avec le shopisan dans le cadre de la commercialisation de produits ou de la fourniture de services. Ils agissent sous l'autorité directe de shopisan, et sont notamment responsables de recueillir, de traiter ou de sous-traiter ces données.
            <br></br>
            Dans tous les cas, les destinataires des données et ceux à qui ces données ont été divulguées respectent le contenu de la présente Politique de confidentialité. shopisan assure qu'ils traiteront ces données aux seules finalités prévues, de façon discrète et sécurisée.
            <br></br>
            Dans l'hypothèse où les données seraient divulguées à des tiers à des fins de marketing direct ou de prospection, l'Utilisateur en sera préalablement informé pour qu'il exprime son consentement à l'utilisation de ces données personnels.
            </Typography>

            <Typography className={classes.h2}>8. Droits des utilisateurs</Typography>
            <Typography className={classes.body1}>A tout moment, l'Utilisateur peut exercer ses droits en envoyant un message par courrier électronique à l'adresse suivante : info@shopisan.dev, ou une lettre par voie postale adressée, en joignant une copie de sa carte d'identité à l'adresse suivante : //AJOUTER UNE ADDRESSE
            <br></br>
            <br></br>
            a. Droit d'accès
            <br></br>
            Conformément à l'article 15 du Règlement, shopisan garantit le droit d'accès à l'Utilisateur à ses données personnelles. L'Utilisateur a le droit d'obtenir l'accès auxdites données à caractère personnel ainsi que les informations suivantes:            
            <br></br>
            - Les finalités du traitement ;
            <br></br>
            - Les catégories de données à caractère personnel concernées ;
            <br></br>
            - Les destinataires ou catégories de destinataires auxquels les données à caractère personnel ont été ou seront communiquées, en particulier les destinataires qui sont établis dans des pays tiers ou les organisations internationales ;
            <br></br>
            - Lorsque cela est possible, la durée de conservation des données à caractère personnel envisagée ou, lorsque ce n'est pas possible, les critères utilisés pour déterminer cette durée ;
            <br></br>
            - L'existence d'une prise de décision automatisée, y compris un profilage, visée à l'article 22, paragraphes 1 et 4 du Règlement, et, au moins en pareils cas, des informations utiles concernant la logique sous-jacente, ainsi que l'importance et les conséquences prévues de ce traitement pour la personne concernée
            <br></br>
            - Le Responsable du Traitement peut exiger le paiement de frais raisonnables basés sur les coûts administratifs pour toute copie supplémentaire demandée par l'Utilisateur.
            <br></br>
            - Lorsque l'Utilisateur introduit cette demande par voie électronique (par le biais de l'adresse électronique par exemple), les informations sont fournies sous une forme électronique d'usage courant, à moins que l'Utilisateur ne demande qu'il en soit autrement.
            <br></br>
            - La copie de ses données sera communiquée à l'Utilisateur au plus tard dans le mois après la réception de la demande.
            <br></br>
            <br></br>
            b. Droit de rectification
            <br></br>
            shopisan garantit le droit de rectification et d'effacement des données personnelles à l'utilisateur.
            <br></br>
            Conformément à l'article 16 du Règlement, les données incorrectes, inexactes ou non-pertinentes peuvent être corrigées ou effacées à tout moment. L'Utilisateur procède d'abord lui-même aux modifications nécessaires depuis son compte utilisateur/autre, sauf si celles-ci ne peuvent être effectuées de manière autonome, dans quel cas la demande peut en être faite auprès de shopisan.
            <br></br>
            Conformément à l'article 19 du Règlement, le Responsable du traitement notifie à chaque destinataire auquel les données à caractère personnel ont été communiquées toute rectification des données à caractère personnel, à moins qu'une telle communication se révèle impossible ou exige des efforts disproportionnés. Le responsable du traitement fournit à la personne concernée des informations sur ces destinataires si celle-ci en fait la demande.
            <br></br>
            <br></br>
            c. Droit à l'éffacement
            <br></br>
            L'Utilisateur a le droit d'obtenir l'effacement de ses données personnelles dans les meilleurs délais dans les hypothèses énumérées à l'article 17 du Règlement.
            <br></br>
            Lorsque le Responsable de Traitement a rendu publiques les données à caractère personnel et qu'il est tenu de les effacer en vertu du paragraphe précédent, le Responsable du traitement, compte tenu des technologies disponibles et des coûts de mise en œuvre, prend des mesures raisonnables, y compris d'ordre technique, pour informer les autres responsables du traitement qui traitent ces données à caractère personnel que la personne concernée a demandé l'effacement par ces responsables du traitement de tout lien vers ces données à caractère personnel, ou de toute copie ou reproduction de celles-ci.
            <br></br>
            Les deux paragraphes précédents ne s'appliquent pas dans la mesure où ce traitement est nécessaire:
            <br></br>
            - À l'exercice du droit à la liberté d'expression et d'information;
            <br></br>
            - Pour respecter une obligation légale qui requiert le traitement prévue par le droit de l'Union ou par le droit de l'État membre auquel le responsable du traitement est soumis, ou pour exécuter une mission d'intérêt public ou relevant de l'exercice de l'autorité publique dont est investi le responsable du traitement;
            <br></br>
            - À la constatation, à l'exercice ou à la défense de droits en justice.
            <br></br>
            Conformément à l'article 19 du Règlement, le Responsable du traitement notifie à chaque destinataire auquel les données à caractère personnel ont été communiquées tout effacement de données à caractère personnel ou toute limitation du traitement effectué, à moins qu'une telle communication se révèle impossible ou exige des efforts disproportionnés. Le responsable du traitement fournit à la personne concernée des informations sur ces destinataires si celle-ci en fait la demande.
            <br></br>
            <br></br>
            d. Droit de limitation du traitement
            <br></br>
            L'Utilisateur a le droit d'obtenir la limitation du traitement de ses données personnelles dans les hypothèses énumérées à l'article 19 du Règlement.
            <br></br>
            Conformément à l'article 19 du Règlement, le Responsable du traitement notifie à chaque destinataire auquel les données à caractère personnel ont été communiquées toute limitation du traitement effectué, à moins qu'une telle communication se révèle impossible ou exige des efforts disproportionnés. Le responsable du traitement fournit à la personne concernée des informations sur ces destinataires si celle-ci en fait la demande.
            <br></br>
            <br></br>
            e. Droit de portabilité des données
            <br></br>
            Conformément à l'article 20 du Règlement, les Utilisateurs ont le droit de recevoir de shopisan les données à caractère personnel les concernant dans un format structuré, couramment utilisé et lisible par machine. Les Utilisateurs ont le droit de transmettre ces données à un autre responsable du traitement sans que shopisan y fasse obstacle dans les cas prévus par le Règlement.
            <br></br>
            Lorsque l'Utilisateur exerce son droit à la portabilité des données en application du paragraphe précédent, elle a le droit d'obtenir que les données à caractère personnel soient transmises directement d'un responsable du traitement à un autre, lorsque cela est techniquement possible.
            <br></br>
            L'exercice du droit de portabilité des données s'entend sans préjudice du droit à l'effacement. Ce droit ne s'applique pas au traitement nécessaire à l'exécution d'une mission d'intérêt public ou relevant de l'exercice de l'autorité publique dont est investi le responsable du traitement.
            <br></br>
            Le droit de portabilité des données ne porte pas atteinte aux droits et libertés de tiers.
            <br></br>
            <br></br>
            f. Droit d'opposition et prise de décision individuelle automatisée
            <br></br>
            L'Utilisateur dispose à tout moment du droit de s'opposer au traitement de ses données personnelles en raison de sa situation particulière, y compris l'automatisation des données effectuée par shopisan. Conformément à l'article 21 du Règlement, shopisan ne traitera plus les données à caractère personnel, à moins qu'il existe des motifs légitimes et impérieux pour le traitement qui prévalent sur les intérêts et les droits et libertés de l'Utilisateur, ou pour la constatation, l'exercice ou la défense de droits en justice.
            <br></br>
            Lorsque les données à caractère personnel sont traitées à des fins de prospection, l'Utilisateur a le droit de s'opposer à tout moment au traitement des données à caractère personnel la concernant à de telles fins de prospection, y compris au profilage dans la mesure où il est lié à une telle prospection.
            <br></br>
            Lorsque la personne concernée s'oppose au traitement à des fins de prospection, les données à caractère personnel ne sont plus traitées à ces fins.
            <br></br>
            <br></br>
            g. Droit de plainte  
            <br></br>
            L'Utilisateur dispose du droit d'introduire une plainte concernant le traitement de ses données personnelles par shopisan auprès de l'Autorité de Protection des Données, compétente pour le territoire belge. De plus amples informations peuvent être trouvées sur le site internet: https://www.autoriteprotectiondonnees.be.
            <br></br>
            <br></br>
            L'introduction d'une plainte se fait aux adresses suivantes:
            <br></br>
            Autorité de Protection des Données
            <br></br>
            Rue de la Presse 35, 1000 Bruxelles
            <br></br>
            Tél. + 32 2 274 48 00
            <br></br>
            Fax. + 32 2 274 48 35
            <br></br>
            E-mail: contact@apd-gba.be
            <br></br>
            <br></br>
            L'Utilisateur peut également introduire une plainte auprès du tribunal de première instance de son domicile.
            </Typography>
        
            <Typography className={classes.h2}>9. Cookies</Typography>
            <Typography className={classes.body1}>Le Site utilise des cookies pour distinguer les Utilisateurs du Site. Cela permet de fournir aux Utilisateurs une meilleure expérience de navigation et une amélioration du Site et de son contenu. Les objectifs et modalités des cookies sont contenus dans ce présent article.
            <br></br>
            <br></br>
            a. Principes généraux
            <br></br>
            Un "Cookie" est un fichier déposé temporairement ou de façon permanente sur le disque dur de l'Utilisateur lors de la consultation du Site Internet, en vue d'une connexion ultérieure. Grâce aux cookies, le serveur reconnaît l'ordinateur de l'Utilisateur.
            <br></br>
            Les cookies peuvent aussi être installés par des tiers avec lesquels shopisan collabore.
            <br></br>
            Certains des cookies utilisés par shopisan sont nécessaires au bon fonctionnement du Site, d'autres permettent d'améliorer l'expérience de l'Utilisateur.
            <br></br>
            L'Utilisateur peut personnaliser ou désactiver les cookies en paramétrant son navigateur.
            <br></br>
            En utilisant le Site Internet, l'Utilisateur marque expressément son accord avec la gestion des cookies telle que décrite dans le présent article.
            <br></br>
            <br></br>
            b. Type de cookies et finalités poursuivies
            <br></br>
            Différents types de cookies sont utilisés par shopisan sur le Site :
            <br></br>
            Les cookies techniques : ils sont nécessaires à l'exploitation du Site Internet, permettent la communication des données introduites et sont destinés à faciliter la navigation de l'Utilisateur ;
            <br></br>
            Les cookies de mesures statistiques et d'audience : ces cookies permettent la reconnaissance de l'Utilisateur et sont utilisés afin de comptabiliser le nombre d'Utilisateurs du Site Internet sur une certaine période. Dès lors qu'ils indiquent aussi le comportement de navigation, ils sont un moyen efficace pour améliorer la navigation de l'Utilisateur, en lui affichant des propositions et offres susceptibles de l'intéresser. Ils permettent aussi à shopisan de repérer les possibles bugs sur le Site Internet et de les corriger.
            <br></br>
            Les cookies fonctionnels : ces cookies facilitent l'utilisation du Site Internet en retenant certains choix introduits (par exemple, le nom d'utilisateur ou la langue) ;
            <br></br>
            Les cookies de traçage : shopisan utilise des cookies de traçage via Google Analytics, pour mesurer l'interaction des Utilisateurs avec le contenu du Site et produire des statistiques anonymes. Ces statistiques permettent à shopisan de perfectionner le Site Internet. Google étaye l'explication de ces cookies à l'adresse suivante: http://www.google.nl/intl/en_uk/policies/privacy/
            <br></br>
            <br></br>
            c.  Délai de conservation des cookies
            <br></br>
            Les cookies sont conservés pour le temps nécessaire à l'accomplissement de la finalité poursuivie. Les cookies susceptibles d'être stockés sur le disque dur de l'Utilisateur ainsi que leur délai de conservation sont les suivants :
            <br></br>
            - 1 an
            <br></br>
            <br></br>
            d. Gestion des cookies
            <br></br>
            Si l'Utilisateur ne veut pas que le Site Internet place des cookies sur son disque dur, il lui est aisé de les gérer ou les supprimer en modifiant les paramètres de son navigateur. La programmation du navigateur permet aussi à l'Utilisateur de recevoir un avis ou une notification dès qu'un Site Internet utilise des cookies et ainsi décider d'accepter cela, ou de le refuser.
            <br></br>
            Si l'Utilisateur désactive certains cookies, il accepte que le Site Internet puisse ne pas fonctionner de manière optimale. Certaines parties du Site Internet pourraient ainsi ne pas être utilisables, ou l'être partiellement.
            <br></br>
            Si l'Utilisateur souhaite ainsi gérer et/ou supprimer certains cookies, il peut le faire en utilisant le/les lien(s) suivant(s):
            <br></br>
            Pour les Utilisateurs ayant comme navigateur :
            <br></br>
            - Internet Explorer : http://windows.microsoft.com/en-us/windows-vista/block-or-allow-cookies
            <br></br>
            - Microsoft Edge : http://windows.microsoft.com/en-gb/windows-10/edge-privacy-faq
            <br></br>
            - Chrome : https://support.google.com/accounts/answer/61416?hl=fr
            <br></br>
            - Firefox : https://support.mozilla.org/fr/kb/activer-desactiver-cookies-preferences
            <br></br>
            - Safari : https://support.apple.com/kb/ph21411?locale=fr_CA
            <br></br>
            Si l'Utilisateur refuse que les cookies de Google Analytics soient utilisés, il est invité à paramétrer son navigateur en ce sens, sur le site web suivant : http://tools.google.com/dlpage/gaoptout.
            </Typography>

            <Typography className={classes.h2}>10. Limitation de responsabilité du responsable de traitement</Typography>
            <Typography className={classes.body1}>Le site Internet peut contenir des liens vers d'autres sites internet détenus par des tiers non liés à shopisan. Le contenu de ces sites et le respect de ceux-ci au regard de la Loi et du Règlement ne relèvent pas de la responsabilité de shopisan.
            <br></br>
            Le titulaire de l'autorité parentale doit donner son consentement exprès pour que le mineur de moins de 16 ans puisse divulguer des informations ou données personnelles sur le site Internet. shopisan conseille vivement aux personnes exerçant l'autorité parentale sur des mineurs de promouvoir une utilisation responsable et sécurisée d'Internet. Le Responsable de traitement ne peut être tenu responsable pour avoir collecté et traité des informations et données personnelles de mineurs de moins de 16 ans dont le consentement n'est pas effectivement couvert par celui de leurs parents légaux ou pour des données incorrectes -notamment concernant l'âge- introduites par des mineurs. En aucun cas, des données personnelles ne seront traitées par le Responsable de traitement si l'Utilisateur précise qu'il est âgé de moins de 16 ans.
            <br></br>
            shopisan n'est pas responsable de la perte, de la corruption ou du vol de données personnelles causés notamment par la présence de virus ou suite à des attaques informatiques.
            </Typography>

            <Typography className={classes.h2}>11. Sécurité</Typography>
            <Typography className={classes.body1}>Le Responsable du Traitement met en œuvre les mesures organisationnelles et techniques afin de garantir un niveau de sécurité appropriée au traitement et récolte des données. Ces mesures de sécurité dépendent des coûts de mise en oeuvre au regard de la nature, du contexte et des finalités du traitement des données personnelles.
            <br></br>
            Le Responsable du Traitement utilise les technologies de cryptage standards au sein du secteur IT lors du transfert ou du recueil des données sur le Site.
            </Typography>    

            <Typography className={classes.h2}>12. Modification de la politique de confidentialité</Typography>
            <Typography className={classes.body1}>shopisan se réserve le droit de modifier la présente Politique de confidentialité afin de se conformer aux obligations légales en la matière. L'utilisateur est dès lors invité à consulter régulièrement la Politique de confidentialité afin de prendre connaissance des modifications et adaptations. Une telle modification sera affichée sur le Site ou envoyée par mail à des fins d'opposabilité.
            </Typography>   

            <Typography className={classes.h2}>13. Droit applicable et juridiction compétente</Typography>
            <Typography className={classes.body1}>La présente Politique de confidentialité est exclusivement régie par le droit belge. Tout litige sera porté devant les tribunaux de l'arrondissement judiciaire du siège social de shopisan.
            </Typography>  

            <Typography className={classes.h2}>14. Contact</Typography>
            <Typography className={classes.body1}>Pour toute question ou réclamation relative à la présente Politique de confidentialité, l'Utilisateur peut contacter le Responsable du traitement via l'adresse suivante : info@shopisan.dev
            </Typography>  
       
        </div>
    )
}