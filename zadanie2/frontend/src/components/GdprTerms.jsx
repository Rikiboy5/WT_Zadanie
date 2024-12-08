// GdprTerms.js
import React from "react";

function GdprTerms() {
  const gdprText = `
    Súhlas so spracovaním osobných údajov (GDPR)
Týmto dávam svoj výslovný súhlas prevádzkovateľovi [Názov spoločnosti alebo webovej stránky], so sídlom [Adresa], IČO: [IČO], na spracovanie mojich osobných údajov v rozsahu:

Meno a priezvisko
Rok narodenia
Štát
E-mailová adresa
Telefónne číslo (ak bolo poskytnuté)
Poznámka (ak bola poskytnutá)
Účel spracovania:

Registrácia a vytvorenie používateľského účtu
Komunikácia s používateľom
Poskytovanie služieb dostupných na webovej stránke
Marketingové účely (ak je relevantné a používateľ súhlasí)
Doba uchovávania údajov:

Osobné údaje budú uchovávané po dobu aktívneho používania účtu a následne v súlade s platnými zákonmi a predpismi.
Práva dotknutej osoby:

Máte právo kedykoľvek odvolať svoj súhlas so spracovaním osobných údajov.
Máte právo na prístup k svojim osobným údajom, ich opravu alebo vymazanie.
Máte právo namietať proti spracovaniu a právo na prenosnosť údajov.
Pre uplatnenie svojich práv nás môžete kontaktovať na e-mailovej adrese: [E-mailová adresa pre kontakt].
Ochrana osobných údajov:

Prevádzkovateľ sa zaväzuje chrániť vaše osobné údaje v súlade s Nariadením Európskeho parlamentu a Rady (EÚ) 2016/679 (GDPR) a ďalšími platnými právnymi predpismi.
Vaše osobné údaje nebudú poskytované tretím stranám bez vášho výslovného súhlasu, s výnimkou prípadov stanovených zákonom.
Potvrdenie súhlasu:

Zaškrtnutím tohto políčka potvrdzujete, že ste si prečítali a porozumeli podmienkam spracovania osobných údajov a súhlasíte s nimi.
  `;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">
        Podmienky spracovania osobných údajov (GDPR)
      </h2>
      <div className="text-gray-300 whitespace-pre-wrap">{gdprText}</div>
    </div>
  );
}

export default GdprTerms;
