import React, { ReactElement } from "react";
import Typography from "@material-ui/core/Typography";
import { Accordion, AccordionDetails, AccordionSummary, Box } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import { RiskBadge } from "../RiskBadge";
import { NavigationTitle } from "app-config/components/NavigationTitle";
import ContactsMediumBackgroundIcon from "../../static/images/contacts-medium-background.svg";

const useStyles = makeStyles(() => ({
  textBlock: {
    marginBottom: "10px",
  },
}));

const FaqAccordion: React.FC<{ title: string; content: string | ReactElement }> = (props) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h3" style={{ margin: "10px" }}>
          {props.title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        {typeof props.content === "string" ? (
          <Typography style={{ width: "100%" }}>{props.content}</Typography>
        ) : (
          props.content
        )}
      </AccordionDetails>
    </Accordion>
  );
};

const RiskHeading: React.FC<{ risk: 1 | 2 | 3 }> = ({ risk = 1 }) => {
  const riskText = ["Normales", "Mittleres", "Hohes"];
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <RiskBadge riskScore={risk} />
      <Typography variant="h3" style={{ margin: "0 1rem" }}>
        {`${riskText[risk - 1] || "Normales"} Risiko`}
      </Typography>
    </div>
  );
};

export const Faq: React.FC = () => {
  const classes = useStyles();

  return (
    <main className="sections">
      <section>
        <NavigationTitle title={"Fragen und Antworten zu CovMap!"} />
      </section>

      <section>
        <FaqAccordion
          title="Was ist die CovMap?"
          content={
            <Typography style={{ width: "100%" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div className={classes.textBlock}>
                  Die CovMap visualisiert eine regionale Risikoeinschätzung auf einer Deutschlandkarte. Unsere
                  Einschätzung beruhen auf täglich aktualisierten Fallzahlstatistiken des Robert-Koch-Instituts und
                  Vorhersagen von selbst entwickelten Modellen basierend auf dem Kontaktverhalten und berichteten
                  Symptomen der Bevölkerung. Mit der CovMap möchten wir folgende Fragen zum Coronavirus adressieren :
                </div>
                <div className={classes.textBlock}>
                  <ul style={{ listStyle: "inside" }}>
                    <li>Wie hoch ist das regionale Risiko?</li>
                    <li>Wie kann ich mich schützen?</li>
                    <li>Welche Verhaltensregeln gelten im Landkreis?</li>
                  </ul>
                </div>
                <div className={classes.textBlock}>
                  Mit der CovMap möchten wir zu einer freiwilligen Reduzierung von Kontakten aufrufen und aufzeigen, wo
                  dies besonders notwendig ist.
                </div>
              </div>
            </Typography>
          }
        />

        <FaqAccordion
          title="Wie kann ich die CovMap erreichen?"
          content="Die CovMap ist als WebApp über www.covmap.de und covmap.charite.de und als Android App über den Play Store
            (bald verfügbar) erreichbar."
        />
        <FaqAccordion
          title="Was macht die CovMap besonders?"
          content="Die CovMap wertet zur regionalen Risikobestimmung neben den offiziellen Fallzahlstatistiken des Robert-Koch-Instituts große Sätze an GPS- und Symptom-Daten aus. Dies erlaubt uns, mit Hilfe eines Modells einen Blick in die Zukunft des Infektionsgeschehens in Deutschland zu werfen und so Risikogebiete schneller zu identifizieren."
        />

        <FaqAccordion
          title="Handelt es sich um offizielle Risikoeinschätzungen?"
          content="Nein, bei der CovMap Risikoeinschätzung handelt es sich nicht um eine offizielle Risikoeinschätzung einer
            nationalen Behörde oder Institution. Die CovMap Risikoeinschätzung wurde von Forschenden der
            Charité, des Hasso-Plattner-Instituts und Datenspezialisten der Firma NETCHECK entwickelt."
        />
        <FaqAccordion
          title="Welche Risikostufen gibt es?"
          content={
            <Box display="flex" flexDirection="column">
              <Typography>Auf der Karte stellen wir ein normales, mittleres und hohes Risiko dar.</Typography>
              <RiskHeading risk={1} />

              <Typography>
                Ein normales Risiko liegt vor, wenn die 7-Tages-Inzidenz des Robert-Koch-Instituts geringer als 20
                Neuinfektionen pro 100.000 Einwohner ist und unser Vorhersagemodell keinen Anstieg vermuten lässt. Bitte
                beachte, dass das Virus derzeit überall in Deutschland zirkuliert und daher eine Ansteckung auch in
                einer Region mit einem normalen Risiko möglich ist.
              </Typography>

              <RiskHeading risk={2} />

              <Typography>
                Von einem mittleren Risiko gehen wir aus, wenn die 7-Tages-Inzidenz zwischen 20 und 50 Neuinfektionen
                pro 100.000 Einwohnern liegt oder unser Vorhersagemodell auf einen Anstieg der Neuinfektionen hindeutet.
                Eine Region mit mittlerem Risiko kann in Zukunft eine Region mit hohem Risiko werden.
              </Typography>
              <RiskHeading risk={3} />
              <Typography>
                Ein hohes Risiko leiten wir von der 7-Tages-Inzidenz ab, wenn die Schwelle von 50 Neuinfektionen pro
                100.000 Einwohner überschritten wurde.
              </Typography>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div>
                  <ContactsMediumBackgroundIcon />
                </div>
                <Typography variant="h3" style={{ margin: "0 1rem" }}>
                  Erhöhtes Kontaktverhalten in der Bevölkerung
                </Typography>
              </div>
              <Typography>
                Unsere Vorhersage sagt hier vermehrten Kontakt in der Bevölkerung voraus. Dies kann dazu führen, dass
                sich bald die Fallzahlen erhöhen.
              </Typography>
            </Box>
          }
        />
        <FaqAccordion
          title="Welche Konsequenzen ergeben sich aus der Risikoeinschätzung?"
          content="Wir möchten mit diesem Projekt zu einer freiwilligen Reduktion von Kontakten aufrufen, insbesondere in Gebieten mit mittlerem und hohem Risiko. Falls sich Kontakte nicht vermeiden lassen, findest Du auf unserer Seite Informationen über allgemeine Schutzmaßnahmen, mit denen sich das Übertragungsrisiko verringern lässt. Zusätzlich verlinken wir zu den Webseiten der Landkreise, so dass Du Dich über die aktuellen und offiziellen Verhaltensregeln in Deiner Region informieren kannst."
        />
        <FaqAccordion
          title="Wie aktuell ist die CovMap?"
          content="Die CovMap wird einmal täglich aktualisiert. Der Datenstand ist in der Kartendarstellung oben rechts mit
            Datum erkenntlich."
        />

        <FaqAccordion
          title="Welche Daten verwendet die CovMap?"
          content="Die CovMap greift auf drei Datenquellen zurück, um die regionalen Risikobewertung durchzuführen: 1.)
            Fallzahlstatistiken vom Robert-Koch-Institut, 2.) ein geschätztes Kontaktverhalten, ermittelt aus GPS Daten
            von der Firma NET CHECK, 3.) Symptomdaten von der Chartié CovApp."
        />

        <FaqAccordion
          title="Welche Vorteile ergeben sich durch die Auswertung von Kontakten und Symptomen der Bevölkerung?"
          content={
            <Typography style={{ width: "100%" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div className={classes.textBlock}>
                  Damit das Virus übertragen werden kann, müssen sich Menschen begegnen. Wenige Tage nach der Infektion
                  berichten viele infizierte Personen über Symptome. Damit stellen der Kontakt zwischen Menschen und das
                  Bemerken von Symptomen die zwei frühesten beobachtbaren Ereignisse einer Infektion dar. Hier setzt die
                  CovMap an.
                </div>
                <div className={classes.textBlock}>
                  Wir charakterisieren aus anonymisierten Smartphone-Daten das Kontaktverhalten. Zusätzlich werten wir
                  selbstberichtete Symptome aus. Naturlich führt nicht jeder Kontakt zu einer Virusübertragung und
                  Symptome allein beweisen keine Infektion mit dem Coronavirus. Wertet man jedoch die Daten von vielen
                  Personen aus, dann kann eine Prognose der zukünftigen Fallzahlen erstellt werden.
                </div>
                <div className={classes.textBlock}>
                  Die vom Robert Koch-Institut gemeldete 7-Tages-Inzidenz spiegelt das Infektionsgeschehen wider, das
                  bereits vor einiger Zeit stattgefunden hat, und ist deshalb ein Blick in die Vergangenheit. Der von
                  uns entwickelte Kontakt-Index ist ein Maß für die Anzahl der Kontakte pro Person und Region und kann
                  schneller ausgewertet werden. In{" "}
                  <a href="https://www.medrxiv.org/content/10.1101/2020.10.02.20188136v2">ersten Analysen</a> konnten
                  wir zeigen, dass ein hoher Kontakt-Index mit einem vermehrten Infektionsgeschehen korreliert. Der
                  Kontakt-Index erlaubt insofern einen vorsichtigen Blick in die Zukunft und kann als eine Art
                  Frühwarnsystem angesehen werden. Wichtig ist, dass es sich bei dem hinterlegten Algorithmus um ein
                  rechnerisches Modell handelt. Das tatsächliche Infektionsgeschehen kann deshalb von der Vorhersage auf
                  Basis des Kontakt-Index abweichen.
                </div>
                <div className={classes.textBlock}>
                  Man weiß inzwischen, dass die Auswertung von Symptomen zur Vorhersage von lokalen Ausbrüchen verwendet
                  werden kann. Zeitlich ist die Symptomlast als Variable für die Vorhersage des Infektionsgeschehens
                  zwischen Kontakt-Index und 7-Tages-Inzidenz einzuordnen. Über die CovApp der Charité geben viele
                  Nutzerinnen und Nutzern ihre Symptome an. Wir planen, diese Angaben anonymisiert in ein verbessertes
                  Modell einfließen zu lassen.
                </div>
                <div className={classes.textBlock}>
                  Der große Vorteil der Auswertung von Kontakten und Symptomen liegt darin, dass die Daten fast ohne
                  Verzögerung analysiert werden können und daher ohne den Meldeverzug der offiziellen Fallzahlen des
                  Robert Koch-Instituts zur Verfügung stehen. Dadurch können wir die Bevölkerung schneller auf die
                  Möglichkeit eines erhöhten regionalen Risikos hinweisen.
                </div>
                <div className={classes.textBlock}>
                  Das CovMap Projekt wird zurzeit aktiv weiterentwickelt und verbessert.
                </div>
              </div>
            </Typography>
          }
        />

        <FaqAccordion
          title="Wie funktioniert die Vorhersage, ob in einer Region mit vermehrten Neuinfektionen zu rechnen ist?"
          content="Unsere Arbeiten beruhen auf einem etablierten theoretischen Modell (https://journals.aps.org/rmp/abstract/10.1103/RevModPhys.87.925) für die Vorhersage der Reproduktionszahl (R-Wert). Der R-Wert gibt an, wie viele Personen sich innerhalb eines bestimmten Zeitraumes typischerweise an einer erkrankten Person anstecken. Da ein Kontakt zwischen zwei Personen zu einer Übertragung des Coronavirus führen kann, hängt die Anzahl der Infektionen direkt mit der Anzahl der Konakte zusammen. Bei unserer Methode müssen wir nicht wissen, ob eine Person tatsächlich infiziert ist und können dennoch eine Vorhersage darüber treffen, wie sich die Zahl der Neuinfektionen entwickeln müsste. Da ein Kontakt und die potentielle Virusübertragung das früheste Ereignis einer Infektion mit dem Coronavirus darstellt, gewinnen wir einen Zeitvorteil von bis zu 2 Wochen gegenüber Fallzahlstatistiken, welche auf bestätigte Infektionen beruhen. Da einige Personen sehr viele Kontakte haben ("Superkontakter") und diese für die Verbreitung des Virus sehr wichtig sind, muss dies in einem Modell beachtet werden. Unser Modell berechnet eine Größe, die wir Kontakt-Index getauft haben und für eine Prognose von Neuinfektionen geeignet ist."
        />

        <FaqAccordion
          title="Was ist der Kontakt-Index?"
          content={
                  Der Kontakt-Index wurde von der Firma NET CHECK in Zusammenarbeit mit der Charité und dem Hasso-Plattner-Institut entwickelt und in einem {" "}
                  <a href="https://www.medrxiv.org/content/10.1101/2020.10.02.20188136v2">Preprint</a> beschrieben. Grundlegend ist die Beobachtung, dass nicht jede Person die gleiche Zahl von Kontakten pro Tag hat und dass es einige Personen mit sehr vielen Kontakten ("Superkontakter") gibt. Da Superkontakter eine höhere Wahrscheinlichkeit haben, sich mit dem Coronavirus anzustecken und es auch weiterzugeben, spielt diese Beobachtung eine Rolle für die Ausbreitung des Coronavirus (siehe auch Freundschaftsparadox). Der Kontakt-Index charakterisiert nun sowohl die Gesamtzahl an Kontakten und berücksichtigt dabei die Superkontakter. Wir konnten zeigen, dass tatsächlich der Kontakt-Index maßgebend für die Ausbreitung des Coronavirus in Deutschland ist.
          }
        />

        <FaqAccordion
          title="Was ist das Freundschaftsparadox?"
          content="Der Kontakt-Index ist anschaulich mit dem sogenannten Freundschaftsparadox verbunden (https://de.wikipedia.org/wiki/Freundschaftsparadox). Danach gilt für die meisten Menschen - z.B. in Facebook - dass ihre Freunde im Durchschnitt mehr Freunde haben als sie selbst. Das wiederum liegt daran, dass Personen mit vielen Freunden eine höhere Wahrscheinlichkeit haben, mit einer beliebigen Person X verbunden zu sein, als Personen, die wenige Freunde haben. Daher sind vereinfacht gesagt viele Freunde oder Kontakte von X Superkontakter.
 
Diese Beobachtung macht sich auch in der Ausbreitung von Infektionskrankheiten bemerkbar. D.h. wenn ich jemanden anstecke, wird diese Person wahrscheinlich jemand mit vielen Kontakten sein. Also wird im Mittel nicht die mittlere Zahl der Kontakte angesteckt, sondern mehr als diese Zahl. Der Kontakt-Index übernimmt diese Abweichung."
        />
      </section>
    </main>
  );
};
