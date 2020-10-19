<p align="center">
  <img width="400" src="https://user-images.githubusercontent.com/2845072/96418930-bb2dd400-11f3-11eb-85b7-7e9b0f66114a.png">
</p>

# Pracownia Posiłków

Pracownia Posiłków to projekt stworozny przez **Grupę 1** w ramach Pracowni Problemowej na Politechnice Rzeszowskiej.


## Uruchamianie [DEV]

1. Pobrać repo z projektem: `git clone https://github.com/bonioss/Pracownia_Problemowa.git`
2. W katalogach **client** i **server** uruchomić `npm install`
3. W katalogu **server/config** dodać plik `config.env` z odpowiednimi polami:
```shell
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb+srv://<user>:<password>@cluster0.li6jg.mongodb.net/test?retryWrites=true&w=majority
JWT_SECRET=LOSOWY_SEKRET
JWT_EXPIRE=30d
```
4. Uruchomić w katalogu **server** komendę `npm run dev`

Po uruchomieniu serwera dokumentacja API dostępna będzie pod adresem [http://localhost:5000/api-docs/](http://localhost:5000/api-docs/)


## Wymagania

#### Logowanie i rejestracja:
- admin jest wbudowany
- admin tworzy profile przedszkoli podając: nazwę, maila, okres zamówień; tworzy się również kod placówki
- przedszkole tworzy listę dzieci podając: imię i nazwisko; tworzy się kod dziecka
- rodzic rejestruje się podając: email, hasło, imię, nazwisko i kod placówki
- rodzic dodaje dzieci poprzez kod dziecka
- rodzic powinien posiadać swój protfel na profilu, stan początkowy 0zł
- logowanie za pomocą e-maila i hasła
- autoryzacja za pomocą cookies'ów
#### Jadłospis
- admin dodaje kolejne posiłki podając: typ posiłku, opis (co danie zawiera), date kiedy będzie podawane
#### Zamówienia
- rodzic/przedszkole tworzą zamówienie podając: konkretne typy posiłków na konkretnie dni (np. poniedziałek - śniadania, obiady; wtorek - obiady, kolacje itd), uwagi, czy w święta również będą jedzone posiłki. Backend musi zapisać oddzielnie każdy posiłęk z konkretną datą.
- zamówienie musi zawierac status 'czy zapłacono', edytowalny przez pracownika przedszkola.
- rodzic usuwając dany posiłek otrzymuje należność do swojego portfela, jeśli status posiłku był 'zapłacony'
- backend musi zrobić endpoint zwracający wszystki dni wolne w roku