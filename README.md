# Beirut Lounge — Website

## Dateien-Übersicht

| Datei | Zweck |
|---|---|
| `index.html` | Hauptwebsite |
| `menu.html` | Digitale Speisekarte (QR-Code Ziel) |
| `impressum.html` | Impressum (Pflicht!) |
| `datenschutz.html` | Datenschutzerklärung (Pflicht!) |
| `assets/css/main.css` | Design der Hauptwebsite |
| `assets/css/menu.css` | Design der Speisekarte |
| `assets/js/main.js` | Interaktionen der Hauptwebsite |
| `assets/js/menu.js` | Interaktionen der Speisekarte |
| `assets/images/` | Fotos (hier eigene Bilder ablegen) |
| `qr/menu-qr.png` | QR-Code für Tischkarten |

---

## Fotos hinzufügen

Lege deine Fotos in den Ordner `assets/images/` ab und benenne sie so:

- `hero-bg.jpg` — großes Hintergrundbild auf der Startseite (Querformat, min. 1920×1080px)
- `gallery-1.jpg` bis `gallery-6.jpg` — Galeriefotos

**Tipp:** Bilder vorher komprimieren (kostenlos unter [squoosh.app](https://squoosh.app)) — jedes Bild sollte unter 300 KB sein.

---

## Speisekarte anpassen

Öffne `menu.html` mit einem Texteditor (z.B. Notepad auf Windows, TextEdit auf Mac).

### Preis ändern

Suche nach dem Gerichtnamen, der Preis steht direkt danach:

```html
<span class="menu-item__price">€ 12,00</span>
```

Ändere einfach die Zahl zwischen den Tags.

### Gericht umbenennen

```html
<span class="menu-item__name">Double Apple</span>
```

Den Text zwischen den Tags ändern.

### Neues Gericht hinzufügen

Kopiere diesen Block und füge ihn unterhalb eines bestehenden Gerichts ein:

```html
<article class="menu-item">
  <div class="menu-item__info">
    <span class="menu-item__name">Name des Gerichts</span>
    <span class="menu-item__desc">Kurze Beschreibung</span>
  </div>
  <span class="menu-item__price">€ 00,00</span>
</article>
```

### Gericht entfernen

Lösche den gesamten Block von `<article class="menu-item">` bis zum zugehörigen `</article>`.

---

## Öffnungszeiten ändern

In `index.html` nach `Öffnungszeiten` suchen — die Zeiten stehen in der Tabelle:

```html
<tr><td>Montag – Donnerstag</td><td>19:00 – 01:00 Uhr</td></tr>
```

---

## Telefonnummer ändern

Die Nummer kommt in beiden Dateien vor. In `index.html` und `menu.html` nach `01575` suchen und beide Stellen ändern:

```html
<a href="tel:+4915755843854">01575 5843854</a>
```

Beide Teile ändern: die Nummer im `href` (ohne Leerzeichen, mit +49) und den sichtbaren Text.

---

## Impressum ausfüllen

`impressum.html` öffnen und alle Felder mit dem orangenen Rahmen ausfüllen:
- Vollständiger Name des Inhabers
- E-Mail-Adresse
- Steuer-ID (falls vorhanden)

---

## Website veröffentlichen (kostenlos)

### Schritt 1 — Projektordner als ZIP packen
Den gesamten Ordner "Beirut Lounge" als ZIP-Datei komprimieren.

### Schritt 2 — Netlify Drop
1. [app.netlify.com/drop](https://app.netlify.com/drop) öffnen
2. ZIP-Datei per Drag & Drop hochladen
3. Die Seite ist sofort online (z.B. `zufaelliger-name.netlify.app`)

### Schritt 3 — URL umbenennen
In den Netlify-Einstellungen den Namen ändern zu z.B. `beirut-lounge.netlify.app`

### Schritt 4 — QR-Code generieren
1. [qr.io](https://qr.io) öffnen
2. URL eingeben: `https://beirut-lounge.netlify.app/menu.html`
3. Farbe: Vordergrund `#C9A84C`, Hintergrund `#0D0D0D`
4. Als PNG herunterladen (1000×1000px)
5. Als `qr/menu-qr.png` speichern und Website neu hochladen

### Website aktualisieren
Ordner erneut als ZIP packen → in Netlify unter "Deploys" hochladen.

---

## Eigene Domain (optional)

Falls eine eigene Domain gewünscht wird (z.B. `beirut-lounge.de`):
- Domain bei einem Anbieter kaufen (z.B. [IONOS](https://www.ionos.de), ab ~1€/Monat)
- In Netlify unter "Domain settings" die Domain eintragen
- SSL/HTTPS wird von Netlify automatisch eingerichtet

**Wichtig:** QR-Codes erst drucken, wenn die finale URL feststeht!
