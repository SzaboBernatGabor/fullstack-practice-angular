# Cicás adatbáziskezelő weboldal
Egy webalkalmazás, amivel cicák adatait lehet kezelni (hozzáadni, módosítani, törölni, lekérdezni). A rendszer különböző felhasználói jogosultságokat is tartalmaz, melyek alapján tudnak a felhasználók hozzáférni bizonyos funkciókhoz:
- Reader (0)
- Editor (1)
- Admin (2)

A reader csak lekérni tud, az editor módosítani is. Az admin jogosultsággal rendelkező felhasználó, a többi felhasználó fiókját is tudja módosítani: deaktiválni, törölni, jogosultságot adni.

## Fontos tudnivalók:
- A backendnek tartalmaznia kell egy .env fájlt, amiben az adatbázis connection stringje található 'MONGODB_CONN_STRING' néven.
- A frontend portja 3000. (Indításhoz: ng serve --host localhost --port 3000)
- Alapértelmezetten nem létezik admin jogosultságú felhasználó, így manuálisan kell az adatbázisban az egyik felhasználó permission értékét 2-re állítani, hogy az lehessen.
