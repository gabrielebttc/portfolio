import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Gabriele Butticè",
  description: "Informativa sulla privacy per le applicazioni di Gabriele Butticè.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Informativa sulla Privacy</h1>
        <p className="text-gray-400 mb-12">Ultimo aggiornamento: giugno 2026</p>

        <p className="text-gray-300 mb-8">
          <strong className="text-white">Titolare del trattamento:</strong> Gabriele Butticè —{" "}
          <a href="mailto:gabriele.buttice.bttc@gmail.com" className="text-purple-400 hover:underline">
            gabriele.buttice.bttc@gmail.com
          </a>
        </p>

        <Section title="1. Quali dati raccogliamo">
          <p>Per fornire i nostri servizi raccogliamo:</p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
            <li><strong className="text-white">Dati di registrazione:</strong> nome, cognome, indirizzo email, password (cifrata), numero di telefono</li>
            <li><strong className="text-white">Dati operativi:</strong> informazioni sui cantieri, presenze dei lavoratori, note giornaliere, documenti, foto e video caricati</li>
            <li><strong className="text-white">Dati tecnici:</strong> token di autenticazione, indirizzo IP, log di accesso</li>
          </ul>
        </Section>

        <Section title="2. Come usiamo i dati">
          <p>I dati vengono utilizzati esclusivamente per:</p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
            <li>Fornire le funzionalità dell&apos;applicazione</li>
            <li>Autenticare gli utenti e proteggere gli account</li>
            <li>Generare report e documenti richiesti dall&apos;utente</li>
          </ul>
          <p className="mt-3">Non vendiamo, cediamo né utilizziamo i dati per pubblicità o profilazione.</p>
        </Section>

        <Section title="3. Dove sono conservati i dati">
          <p>
            I dati sono conservati su server in Europa. I file caricati (foto, documenti, video) sono
            archiviati su Backblaze B2, un servizio di storage cloud conforme alle normative sulla privacy.
          </p>
        </Section>

        <Section title="4. Per quanto tempo conserviamo i dati">
          <p>
            I dati vengono conservati per tutta la durata dell&apos;account attivo. In caso di cancellazione
            dell&apos;account, i dati vengono eliminati entro 30 giorni.
          </p>
        </Section>

        <Section title="5. I tuoi diritti (GDPR)">
          <p>Ai sensi del Regolamento UE 2016/679 hai diritto a:</p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
            <li>Accedere ai tuoi dati</li>
            <li>Rettificarli o aggiornarli</li>
            <li>Richiederne la cancellazione</li>
            <li>Opporti al trattamento</li>
            <li>Richiedere la portabilità dei dati</li>
          </ul>
          <p className="mt-3">
            Per esercitare questi diritti scrivi a:{" "}
            <a href="mailto:gabriele.buttice.bttc@gmail.com" className="text-purple-400 hover:underline">
              gabriele.buttice.bttc@gmail.com
            </a>
          </p>
        </Section>

        <Section title="6. Cookie">
          <p>
            L&apos;applicazione utilizza esclusivamente cookie tecnici necessari al funzionamento
            (autenticazione). Non vengono usati cookie di profilazione o di terze parti.
          </p>
        </Section>

        <Section title="7. Modifiche a questa informativa">
          <p>
            Eventuali aggiornamenti verranno pubblicati su questa pagina con la data di revisione aggiornata.
          </p>
        </Section>

        <div className="mt-12 pt-8 border-t border-gray-800 text-gray-400 text-sm">
          <strong className="text-white">Contatti:</strong>{" "}
          <a href="mailto:gabriele.buttice.bttc@gmail.com" className="text-purple-400 hover:underline">
            gabriele.buttice.bttc@gmail.com
          </a>
        </div>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-3 text-white">{title}</h2>
      <div className="text-gray-300 space-y-2">{children}</div>
    </section>
  );
}
