import React from 'react';
import { makeStyles, Typography } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    general:{
        padding: "20vh 40px 0 40px",
        backgroundColor: "#FAFAFA",
        [theme.breakpoints.up('sm')]:{
            display: "flex",
            flexDirection: "column",
            padding: "10rem 5rem",
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
        marginTop: "5rem",
        [theme.breakpoints.up('sm')]:{
            fontSize: "1.2rem",
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
        },
        [theme.breakpoints.up('md')]: {
            fontSize: "0.9rem",
            lineHeight: '1.5rem'
        }
    },
}))


export default function GeneralsConditions(){

    const classes = useStyles();

    return(
        <div className={classes.general}>
            <Typography  className={classes.h1}>Conditions générales</Typography>
            <Typography className={classes.body1}>Mise à jour le 15/04/2021
            <br></br>
            Le site Internet
            <br></br>
            shopisan.com
            <br></br>
            ( Ci-après la <strong>" Plateforme "</strong>)
            <br></br>
            Shopisan
            <br></br>
            <br></br>
            //AJOUTER UNE ADDRESSE
            <br></br>
            N° d'entreprise //AJOUTER NUMERO D'ENTREPRISE
            <br></br>
            E-mail : //AJOUTER EMAIL
            <br></br>
            Téléphone : //AJOUTER TEL
            <br></br>
            ( Ci -après <strong>" Shopisan "</strong>)
            <br></br>
            <br></br>
            </Typography>

            <Typography className={classes.h2}>1. Champ d'application</Typography>
            <Typography className={classes.body1}>Les présentes conditions générales d'utilisation (ci-après les <strong>" CGU "</strong>) s'appliquent à toute visite ou utilisation de la Plateforme et de ses informations par un internaute (ci-après <strong>" Utilisateur "</strong>).
            <br></br>
            En visitant ou utilisant la Plateforme, l'Utilisateur reconnait avoir pris connaissance des présentes CGU et accepte expressément les droits et obligations qui y sont mentionnés.
            <br></br>
            Il peut exceptionnellement être dérogé aux dispositions des CGU par un accord écrit. Ces dérogations peuvent consister en la modification, l'ajout ou la suppression des clauses auxquelles elles se rapportent et n'ont aucune incidence sur l'application des autres dispositions des CGU.
            <br></br>
            Nous nous réservons le droit de modifier nos CGU à tout moment, sans notification préalable, mais nous nous engageons à appliquer les dispositions qui étaient en vigueur au moment où vous avez utilisé notre Plateforme.
            </Typography>

            <Typography className={classes.h2}>2. Site internet</Typography>
            <Typography className={classes.body1}>a. Accès et navigation
            <br></br>
            Nous prenons toutes les mesures raisonnables et nécessaires pour assurer le bon fonctionnement, la sécurité et l'accessibilité de notre Plateforme. Toutefois, nous ne pouvons pas offrir de garantie d'opérabilité absolue et il faut dès lors considérer nos actions comme étant couvertes par une obligation de moyen.
            <br></br>
            Toute utilisation de la Plateforme se fait toujours aux propres risques de l'Utilisateur. Ainsi, nous ne sommes pas responsables des dommages pouvant résulter de possibles dysfonctionnements, interruptions, défauts ou encore d'éléments nuisibles présents sur la Plateforme.
            <br></br>
            Nous nous réservons le droit de restreindre l'accès à la Plateforme ou d'interrompre son fonctionnement à tout moment, sans obligation de notification préalable.
            <br></br>
            <br></br>
            b. Contenu
            <br></br>
            Shopisan détermine en grande partie le contenu de la Plateforme et prend grand soin des informations présentes sur celle-ci. Nous prenons toutes les mesures possibles pour maintenir notre Plateforme aussi complète, précise et à jour que possible, même lorsque les informations présentes sur celle-ci sont fournies par des tiers. Nous nous réservons le droit de modifier, compléter ou supprimer à tout moment la Plateforme et son contenu, sans que sa responsabilité ne puisse être engagée.
            <br></br>
            Shopisan ne peut pas offrir de garantie absolue concernant la qualité de l'information présente sur la Plateforme. Il est donc possible que cette information ne soit pas toujours complète, exacte, suffisamment précise ou à jour. Par conséquent, Shopisan ne pourra pas être tenue responsable des dommages, directs ou indirects, que l'Utilisateur subirait de par l'information présente sur la Plateforme.
            <br></br>
            Si certains contenus de la Plateforme sont en violation avec la loi ou les droits des tiers, ou sont contraires à la morale, nous vous demandons de nous en informer le plus rapidement possible par mail afin que nous puissions prendre des mesures appropriées.
            <br></br>
            Tout téléchargement à partir de la Plateforme a toujours lieu aux risques de l'Utilisateur. Shopisan ne pourra pas être tenue responsable des éventuels dommages, directs ou indirects, découlant de ces téléchargements, tels qu'une perte de données ou un endommagement du système informatique de l'Utilisateur, qui relèvent entièrement et exclusivement de la responsabilité de ce dernier.
            
            </Typography>
        
            <Typography className={classes.h2}>3. Liens vers d'autres sites internet</Typography>
            <Typography className={classes.body1}>La Plateforme pourrait contenir des liens ou hyperliens renvoyant vers des sites internet externes. De tels liens ne signifient pas de manière automatique qu'il existe une relation entre Shopisan et le site internet externe ou même qu'un accord implicite existe avec le contenu de ces sites externes.
            <br></br>
            Shopisan n'exerce aucun contrôle sur les sites internet externes. Nous ne sommes donc pas responsables du fonctionnement sûr et correct des hyperliens et de leur destination finale. Dès l'instant où l'Utilisateur clique sur l'hyperlien, il quitte la Plateforme. Nous ne pouvons dès lors pas être tenus responsables en cas de dommage ultérieur.
            </Typography>
        
            <Typography className={classes.h2}>4. Propriété intellectuelle</Typography>
            <Typography className={classes.body1}>La structuration de la Plateforme, mais aussi les textes, graphiques, images, photographies, sons, vidéos, bases de données, applications informatiques, etc. qui le composent ou qui sont accessibles via la Plateforme sont la propriété de l'éditeur et sont protégés comme tels par les lois en vigueur au titre de la propriété intellectuelle.
            <br></br>
            Toute représentation, reproduction, adaptation ou exploitation partielle ou totale des contenus, marques déposées et services proposés par la Plateforme, par quelque procédé que ce soit, sans l'autorisation préalable, expresse et écrite de l'éditeur, est strictement interdite, à l'exception des éléments expressément désignés comme libres de droits sur la Plateforme.
            <br></br>
            L'Utilisateur de la Plateforme se voit octroyer un droit limité d'accès, d'utilisation et d'affichage de la Plateforme et de son contenu. Ce droit est accordé à titre non exclusif, non transférable et ne peut être utilisé que moyennant un usage personnel et non commercial. Sauf accord préalable et écrit, les Utilisateurs ne sont pas autorisés à modifier, reproduire, traduire, distribuer, vendre, communiquer au public, en tout ou en partie, les éléments protégés.
            <br></br>
            Il est interdit à l'Utilisateur d'introduire des données sur la Plateforme qui modifieraient ou qui seraient susceptibles d'en modifier le contenu ou l'apparence.
            </Typography>

            <Typography className={classes.h2}>5. Protection des données personelles</Typography>
            <Typography className={classes.body1}>Les données personnelles fournies par l'Utilisateur lors de sa visite ou de l'utilisation de la Plateforme sont collectées et traitées par Shopisan exclusivement à des fins internes. Shopisan assure à ses utilisateurs qu'elle attache la plus grande importance à la protection de leur vie privée et de leurs données personnelles, et qu'elle s'engage toujours à communiquer de manière claire et transparente sur ce point.
            <br></br>
            Shopisan s'engage à respecter la législation applicable en la matière, à savoir la Loi du 8 décembre 1992 relative à la protection de la vie privée à l'égard des traitements de données à caractère personnel ainsi que le Règlement européen du 27 avril 2016 relatif à la protection des personnes physiques à l'égard du traitement des données à caractère personnel et à la libre circulation de ces données.
            <br></br>
            Les données personnelles de l'Utilisateur sont traitées conformément à la Charte de Vie Privée disponible sur la Plateforme.
            </Typography>

            <Typography className={classes.h2}>6. Loi applicable et juridiction compétente</Typography>
            <Typography className={classes.body1}>Les présentes CGU sont régies par le droit belge.
            <br></br>
            En cas de différend et à défaut d'accord amiable, le litige sera porté devant les tribunaux de l'arrondissement judiciaire où Shopisan a son siège social.
            </Typography>

            <Typography className={classes.h2}>7. Dispositions générales</Typography>
            <Typography className={classes.body1}>Shopisan se réserve la possibilité de modifier, étendre, supprimer, limiter ou interrompre la Plateforme et les services associés à tout moment, sans notification préalable, et sans engager sa responsabilité.
            <br></br>
            En cas de violation des CGU par l'Utilisateur, Shopisan se réserve le droit de prendre des mesures de sanction et de réparation adaptées. Shopisan se réserve notamment le droit de refuser à l'Utilisateur tout accès à la Plateforme ou à nos services temporairement ou définitivement. Ces mesures peuvent être prises sans indication de motif et sans préavis. Elles ne peuvent pas engager la responsabilité de Shopisan ou donner lieu à une quelconque forme d'indemnisation.
            <br></br>
            L'illégalité ou la nullité totale ou partielle d'une disposition de nos CGU n'aura aucun impact sur la validité et l'application des autres dispositions. Nous disposons, dans un tel cas, du droit de remplacer la disposition par une autre disposition valable et de portée similaire.
            </Typography>

        </div>
    )
}